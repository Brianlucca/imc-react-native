import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Form from '../screen/formPage'

const AppStack = createNativeStackNavigator()

function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="Form">
      <AppStack.Screen
        name="Form"
        component={Form}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  )
}
export default AppRoutes
