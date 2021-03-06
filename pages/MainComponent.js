import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageOne from './PageOne';
import PageTwo from './PageTwo';


const Stack = createNativeStackNavigator();

const MainComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Page One'
                    component={PageOne}
                    options={{ title: 'Home Page' }} />
                <Stack.Screen
                    name='Page Two'
                    component={PageTwo}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainComponent
