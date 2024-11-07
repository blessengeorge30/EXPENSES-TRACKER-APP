import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpencesContext } from "../store/expences-context";

function ManageExpences({ route, navigation }) {
    const expencesCtx = useContext(ExpencesContext);

    const editedExpenceId = route.params?.expenceId;
    const isEditing = !!editedExpenceId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expence' : 'Add Expence'
        });
    }, [navigation, isEditing]);



    function deleteExpencehandler() {
        expencesCtx.deleteExpence() 
              navigation.goBack();
 
    }

    function cancelHandler() {
        navigation.goBack();
    }
    function confirmHandler() {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button  style={styles.button}mode={"flat"} onPress={cancelHandler}>Cancel</Button>
                <Button onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>

            {isEditing && (
                <View style={styles.deletecontainer}>

                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={46} 
                        onPress={deleteExpencehandler} />

                  
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
        backgroundColor: GlobalStyles.colors.primary800

    },
    buttons:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    button: {
        minWidth:120,
        marginHorizontal: 8,
    },

    deletecontainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
})
