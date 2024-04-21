import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import ImcResult from './resultImc'

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('Insira o Peso e a Altura')
  const [imc, setImc] = useState(null)
  // const [textButton, setTextButton] = useState('Calcular')

  const imcCalculator = () => {
    return setImc((weight / (height * height)).toFixed(2))
  }

  const validationImc = () => {
    if (weight != null && height != null) {
      imcCalculator()
      setWeight(null)
      setHeight(null)
      setMessageImc('Seu Imc é igual:')
      // setTextButton('Calcular Novamente')
      return
    }
    setImc(null)
    // setTextButton('Calcular')
    setMessageImc('Insira o peso e altura')
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="EX: 1.75"
          keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="EX: 80.00"
          keyboardType="numeric"
        />
        <Button onPress={() => validationImc()} title="Calcular Imc" />
      </View>
      <ImcResult messageResultImc={messageImc} ResultImc={imc} />
    </View>
  )
}
