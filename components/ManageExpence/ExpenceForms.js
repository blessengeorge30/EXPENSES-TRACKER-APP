import {View} from 'react-native'
import Input from './Input'


function Expenceform(){
    function amountChangeHandler() {}
    return (
        <View>
            <Input label='Amount' 
                TextInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangeHandler,
            }}/>

            <Input label='Date' 
                   TextInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxlength: 10,
                    onChangeText: () => {}
                   }}/>
            <Input label='Descrpition' TextInputConfig={{
                multiline: true,
                autoCorrect: false,
                autoCapitalize: 'none'
            }}/>
        </View>
    )
}

export default Expenceform;