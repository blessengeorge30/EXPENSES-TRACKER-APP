import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpencesContext } from "../store/expences-context";
import ExpenceForm from "../components/ManageExpence/ExpenceForms";
import { storeExpence, updateExpence, deleteExpence } from "../util/http";

function ManageExpences({ route, navigation }) {
    const expencesCtx = useContext(ExpencesContext);

    const editedExpenceId = route.params?.expenceId;
    const isEditing = !!editedExpenceId;

    const selectedExpence = expencesCtx.expences.find(
        (expence) => expence.id === editedExpenceId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expence" : "Add Expence",
        });
    }, [navigation, isEditing]);

    async function deleteExpencehandler() {
        await deleteExpence(editedExpenceId);
        expencesCtx.deleteExpence(editedExpenceId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenceData) {
        if (isEditing) {
            expencesCtx.updateExpence(editedExpenceId, expenceData);
            await updateExpence(editedExpenceId, expenceData);
        } else {
            const id = await storeExpence(expenceData);
            expencesCtx.addExpence({ ...expenceData, id: id });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenceForm
                submitButtonLabel={isEditing ? "Update" : "Add"}
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
                defaultValues={selectedExpence} // Corrected this line
            />
            {isEditing && (
                <View style={styles.deletecontainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={46}
                        onPress={deleteExpencehandler}
                    />
                </View>
            )}
        </View>
    );
}

export default ManageExpences;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deletecontainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    },
});
