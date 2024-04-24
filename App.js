import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import Menu from './src/components/menu'
import Routes from './src/routes'

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
        <Menu />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
