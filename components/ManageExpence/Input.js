import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, style, invalid, textInputConfig }) {
    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    if (invalid) {
        inputStyles.push(styles.invalidinput);
    }

    return (
        <View style={[styles.inputcontainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidlabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputcontainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: 'white',
        marginBottom: 8,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        marginBottom: 20,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        height: 150,  // Corrected the "Height" typo to "height"
        textAlignVertical: 'top',
    },
    invalidlabel: {
        color: GlobalStyles.colors.error500,
    },
    invalidinput: {
        backgroundColor: GlobalStyles.colors.error50,
    },
});
