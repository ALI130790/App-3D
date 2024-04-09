
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigation} from "@react-navigation/native-stack";
import {Home} from './src/components/Home';
import {Details} from './src/components/Details';


const App = () => {

  const Stack = createNativeStackNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="home" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

