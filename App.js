import { Box, NativeBaseProvider } from 'native-base'
import React from 'react'
import Form from './src/screen/FormPage'
import Menu from './src/components/menu'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
        <Form />
        <Menu />
      </Box>
    </NativeBaseProvider>
  )
}
