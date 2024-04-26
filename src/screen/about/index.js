import { Box, ScrollView, Text } from 'native-base'
import styleAbout from './style'

function About() {
  return (
    <Box style={styleAbout.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={styleAbout.contentHeader}>
          <Text style={styleAbout.labelTitle}>SOBRE O IMC</Text>
        </Box>
        <Box style={styleAbout.content}>
          <Box style={styleAbout.contentInfor}>
            <Text style={styleAbout.infor}>
              O Índice de Massa Corporal (IMC) é uma das principais ferramentas,
              adotada inclusive pela Organização Mundial de Saúde (OMS), para
              calcular o chamado “peso ideal”. Obtido a partir do peso e da
              altura do indivíduo, o IMC também aponta níveis de magreza e
              obesidade, que são usados para nortear o trabalho de profissionais
              de saúde e de educadores físicos.
            </Text>
            <Text style={styleAbout.infor}>
              Para obter o IMC, basta dividir o seu peso (em quilos) pela altura
              (em metros) elevada ao quadrado (altura x altura). De acordo com o
              indicador, o peso considerado saudável é aquele situado entre 18,5
              e 24,9.
            </Text>
            <Text style={styleAbout.infor}>
              Os outros marcadores do IMC são:
            </Text>
          </Box>
          <Box style={styleAbout.ContentTableInfor}>
            <Text style={styleAbout.tableInfor}>
              - magreza leve (entre 17 e 18,4);
            </Text>
            <Text style={styleAbout.tableInfor}>
              - magreza moderada (entre 16 e 16,9);
            </Text>
            <Text style={styleAbout.tableInfor}>
              - magreza grave (menor que 16);
            </Text>
            <Text style={styleAbout.tableInfor}>
              - sobrepeso (índice de 25 a 29,9);
            </Text>
            <Text style={styleAbout.tableInfor}>
              - obesidade grau 1 (30 a 34,9);
            </Text>
            <Text style={styleAbout.tableInfor}>
              - obesidade severa (35 a 39,9);
            </Text>
            <Text style={styleAbout.tableInfor}>
              - obesidade mórbida (acima de 40);
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  )
}
export default About
