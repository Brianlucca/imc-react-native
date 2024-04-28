import AsyncStorage from '@react-native-async-storage/async-storage'
import { Box, Input, Text, useToast } from 'native-base'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styleForm from './style'

function Form() {
  const [imc, setImc] = useState(null)
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const toast = useToast()

  async function validationImc() {
    if (weight != null && height != null) {
      const result = (weight / (height * height)).toFixed(2)
      setImc(result)
      setTextButton('Calcular Novamente')
    } else {
      setTextButton('Calcular')
    }
  }

  useEffect(() => {
    if (imc !== null) {
      setData()
      toast.show({
        description: (
          <Text style={{ color: '#ffff' }}>Resultado do IMC: {imc}</Text>
        ),
        placement: 'bottom',
        backgroundColor: '#4682B4',
      })
    }
  }, [imc])

  async function setData() {
    try {
      const existingHistory = await AsyncStorage.getItem('@historicImc')
      const historic = existingHistory ? JSON.parse(existingHistory) : []
      historic.push(imc)
      await AsyncStorage.setItem('@historicImc', JSON.stringify(historic))
    } catch (error) {
      console.error('Erro ao salvar histórico:', error)
    }
  }

  return (
    <Box style={styleForm.container}>
      <Box>
        <Box style={styleForm.contentHeader}>
          <Text style={styleForm.titleHeader}>SEU IMC DIGITAL</Text>
        </Box>
        <Box style={styleForm.content}>
          <Box style={styleForm.formContent}>
            <Box style={styleForm.form}>
              <Text style={styleForm.labelTitle}>Altura</Text>
              <Input
                borderColor="cyan.800"
                variant="filled"
                backgroundColor="#fff"
                onChangeText={setHeight}
                value={height}
                placeholder="EX: 1.75"
                keyboardType="numeric"
              />

              <Text style={styleForm.labelTitle}>Peso</Text>
              <Input
                borderColor="cyan.800"
                variant="filled"
                backgroundColor="#fff"
                onChangeText={setWeight}
                value={weight}
                placeholder="EX: 80.00"
                keyboardType="numeric"
              />
            </Box>
            <Box>
              <TouchableOpacity
                style={styleForm.button}
                onPress={() => {
                  validationImc()
                }}
              >
                <Text style={styleForm.textButton}>{textButton}</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Form
