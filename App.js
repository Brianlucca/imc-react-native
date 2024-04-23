import { Box, NativeBaseProvider } from 'native-base'
import React from 'react'
import Form from './src/screen/FormPage'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
        <Form />
      </Box>
    </NativeBaseProvider>
  )
}
