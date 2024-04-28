import AsyncStorage from '@react-native-async-storage/async-storage'
import { Box, Text } from 'native-base'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import styleHistoric from './style'

function Historic() {
  const [history, setHistory] = useState()
  async function retrieveData() {
    try {
      const value = await AsyncStorage.getItem('@historicImc')
      if (value !== null) {
        setHistory(JSON.parse(value))
      }
    } catch (error) {
      console.error('Erro ao recuperar histórico:', error)
    }
  }
  retrieveData()
  return (
    <Box style={styleHistoric.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={styleHistoric.content}>
          <Box style={styleHistoric.contentHeader}>
            <Text style={styleHistoric.labelTitle}>
              Histórico de Resultados
            </Text>
          </Box>
          <Box style={styleHistoric.containerResult}>
            {history &&
              history.map((item, index) => (
                <Box key={index} style={styleHistoric.resultContainer}>
                  <Text style={styleHistoric.resultImc}>
                    Massa Corporal #{index + 1}
                  </Text>
                  <Text style={styleHistoric.resultValue}>{item}</Text>
                </Box>
              ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  )
}
export default Historic
