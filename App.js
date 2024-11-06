import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import ManageExpences from './screens/ManageExpences';
import RecentExpences from './screens/RecentExpences';
import AllExpences from './screens/AllExpences';
import { GlobalStyles } from './constants/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from './components/UI/IconButton';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpencesOverview(){
  return<BottomTabs.Navigator 
  screenOptions={({ navigation }) =>({
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: () => (
      <IconButton
      icon="person-add"
        size={29} 
        color="white" 
        onPress={() => {
          navigation.navigate('ManageExpence')
        }}
      />
    )
  })}
>


    <BottomTabs.Screen 
    name='RecentExpences' 
    component={RecentExpences} options={{
      title: 'Recent Expences',
      tabBarLabel: 'Recent',
      tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color}/>
    }} />
    <BottomTabs.Screen name='AllExpences' component={AllExpences} options={{
      title: 'All Expences' ,
      tabBarLabel: 'All Expences',
      tabBarIcon: ({color, size}) => <Ionicons name="calendar" size={size} color={color} />
    }} />
  </BottomTabs.Navigator>
}


export default function App() {
  return (
<>
<StatusBar style="auto" />
<NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerStyle: {backgroundColor: GlobalStyles.colors.primary500}
  }}>
    
     <Stack.Screen 
     name="ExpencesOverview" 
     component={ExpencesOverview} 
     options={{ headerShown: false}}/>

      <Stack.Screen name="ManageExpence" component={ManageExpences} options={{
        presentation: 'modal' , headerTitleStyle: { color: 'white' },
      }}/>
     
  </Stack.Navigator>
</NavigationContainer>


</>
     
      
 
  );
}


