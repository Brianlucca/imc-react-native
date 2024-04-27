import AsyncStorage from '@react-native-async-storage/async-storage'
import { Box, Text } from 'native-base'
import { useState } from 'react'
import styleHistoric from './style'

function Historic() {
  const [history, setHistory] = useState()
  async function retrieveData() {
    try {
      const value = await AsyncStorage.getItem('@resultImc')
      if (value !== null) {
        setHistory(value)
      }
    } catch (error) {}
  }
  retrieveData()

  return (
    <Box style={styleHistoric.container}>
      <Box style={styleHistoric.content}>
        <Box style={styleHistoric.contentHeader}>
          <Text style={styleHistoric.labelTitle}>Ultimo Resultado</Text>
        </Box>
        <Box style={styleHistoric.containerResult}>
          <Text style={styleHistoric.resultImc}>
            Massa Corporal = {history}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
export default Historic
