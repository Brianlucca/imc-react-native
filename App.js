import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import Menu from './src/components/menu'
import Routes from './src/routes'
import Header from './src/components/header'

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
        <Header />
        <Menu />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
