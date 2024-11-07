import { View,Text,TextInput } from "react-native"
import {  } from "react-native-gesture-handler"

function Input({label, TextInputConfig}) {
    return(
        <View>
            <Text>
                {label}
            </Text>
            <TextInput {...TextInputConfig}/>

        </View>
    )

}

export default Input;
