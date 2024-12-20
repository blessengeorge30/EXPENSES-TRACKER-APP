import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { getFormattedDate } from "../util/date";
import { useNavigation } from '@react-navigation/native'

function ExpenceItems({ id, description, date, amount }) {
    const navigation = useNavigation();

    function expencePressHandler() {
        navigation.navigate('ManageExpence', {
            expenceId: id
        });
    }
    return (
        
            <Pressable onPress={expencePressHandler} style={({ pressed }) => pressed && styles.pressed}>
                <View style={styles.expenceItem}>
                    <View>
                        <Text style={[styles.textbase, styles.description]}>{description}</Text>
                        <Text style={styles.textbase}>{getFormattedDate(date)}</Text>
                    </View>
                    <View style={styles.amountcontainer}>
                        <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                    </View>
                </View>
            </Pressable>
   

    );
}

export default ExpenceItems;

const styles = StyleSheet.create({
    expenceItem: {
        padding: 12,
        marginVertical: 8, 
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textbase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',

    },
    amountcontainer: {
        paddingHorizontal: 12,
        paddingvertical: 4,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontweight: 'bold'
    },
    pressed: {
        opacity: 0.5, // Adjust opacity for pressed feedback
    },
    
});
