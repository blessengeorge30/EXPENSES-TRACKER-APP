import { View, StyleSheet, Text, Alert } from 'react-native';
import Input from './Input';
import Button from '../UI/Button';
import { useState } from 'react';
import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

function ExpenceForm({ onCancel, onSubmit, submitButtonLabel ,defaultValues}) {  // Destructure the props here
    const [inputs, setInputs] = useState({
        amount: {value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: { value: defaultValues ? getFormattedDate(defaultValues.date) : '', 
            isValid: true,
        },
        description: { value: defaultValues ? defaultValues.description: '',
            isValid: true,
        },
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            };
        });
    }

    function submitHandler() {
        const expenceData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };
    
        const amountIsValid = !isNaN(expenceData.amount) && expenceData.amount > 0;
        const dateIsValid = !isNaN(Date.parse(expenceData.date)); // Updated date validation
        const descriptionIsValid = expenceData.description.trim().length > 0;
    
        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((curInputs) => {
                return {
                    amount: { value: curInputs.amount.value, isValid: amountIsValid },
                    date: { value: curInputs.date.value, isValid: dateIsValid },
                    description: { value: curInputs.description.value, isValid: descriptionIsValid },
                };
            });
            return;
        }
    
        onSubmit(expenceData);
    }
    

    const formIsInvalid = 
    !inputs.amount.isValid  ||
     !inputs.date.isValid  || 
     !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.textstyle}> EXPENSES </Text>
            <View style={styles.inputRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value,
                        placeholder: 'Enter amount',
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        // keyboardType: 'numeric',
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value,
                    }}
                />
            </View>

            <Input
                style={styles.description}
                label="Description"
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    autoCorrect: false,
                    autoCapitalize: 'none',
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value,
                }}
            />

           {formIsInvalid && <Text style={styles.errorText}>Invalid Input Values - please check your entered data!</Text>}
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    );
}

export default ExpenceForm;

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1
    },
    errorText:{
        textAlign:'center',
        color: GlobalStyles.colors.error500,
        marginBottom:15,
        margin:5

    },
    form: {
        marginTop: 20
    },
    textstyle: {
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    description: {
        
        textAlignVertical: 'top',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
  
});
