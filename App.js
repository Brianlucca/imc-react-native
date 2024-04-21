import { Box, NativeBaseProvider } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import Main from './src/components/main'
import Title from './src/components/title'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Title />
        <Main />
      </Box>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
