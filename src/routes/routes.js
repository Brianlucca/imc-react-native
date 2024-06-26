import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Form from '../screen/formPage'
import About from '../screen/about'
import Historic from '../screen/historic'

const AppStack = createNativeStackNavigator()

function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="Form">
      <AppStack.Screen
        name="Form"
        component={Form}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Historic"
        component={Historic}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  )
}
export default AppRoutes
