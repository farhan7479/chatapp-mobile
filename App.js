import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import ContactsList from './screens/ChatScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="contactsList">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Chats"
          component={ContactsList}
          options={{ title: 'Chats' }}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
