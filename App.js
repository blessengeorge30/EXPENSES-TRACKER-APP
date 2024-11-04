import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import ManageExpences from './screens/ManageExpences';
import RecentExpences from './screens/RecentExpences';
import AllExpences from './screens/AllExpences';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpencesOverview(){
  return<BottomTabs.Navigator screenOptions={{}}>
    <BottomTabs.Screen name='RecentExpences' component={RecentExpences} />
    <BottomTabs.Screen name='AllExpences' component={AllExpences} />
  </BottomTabs.Navigator>
}


export default function App() {
  return (
<>
<StatusBar style="auto" />
<NavigationContainer>
  <Stack.Navigator>
    
     <Stack.Screen 
     name="ExpencesOverview" 
     component={ExpencesOverview} 
     options={{ headerShown: false}}/>

      <Stack.Screen name="ManageExpence" component={ManageExpences}/>
     
  </Stack.Navigator>
</NavigationContainer>


</>
     
      
 
  );
}


