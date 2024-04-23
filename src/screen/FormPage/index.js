import { Box, Button, Input, Text, useToast } from 'native-base'
import React, { useEffect, useState } from 'react'
import styleForm from './style'

export default function Form() {
  const [imc, setImc] = useState(null)
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const toast = useToast()

  useEffect(() => {
    if (imc !== null) {
      toast.show({
        description: imc,
      })
    }
  }, [imc])

  function validationImc() {
    if (weight != null && height != null) {
      const result = (weight / (height * height)).toFixed(2)
      setImc(result)
      setTextButton('Calcular Novamente')
    }
    setTextButton('Calcular')
  }
  return (
    <Box style={styleForm.container}>
      <Box>
        <Box style={styleForm.contentHeader}>
          <Text>SEU IMC DIGITAL</Text>
        </Box>
        <Box style={styleForm.content}>
          <Box style={styleForm.formContent}>
            <Box style={styleForm.form}>
              <Text>Altura</Text>
              <Input
                variant="filled"
                backgroundColor="#fff"
                onChangeText={setHeight}
                value={height}
                placeholder="EX: 1.75"
                keyboardType="numeric"
              />

              <Text>Peso</Text>
              <Input
                variant="filled"
                backgroundColor="#fff"
                onChangeText={setWeight}
                value={weight}
                placeholder="EX: 80.00"
                keyboardType="numeric"
              />
            </Box>
            <Box style={styleForm}>
              <Button
                onPress={() => {
                  validationImc()
                }}
              >
                {textButton}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}