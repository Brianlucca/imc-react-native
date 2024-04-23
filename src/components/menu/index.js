import { FontAwesome5 } from '@expo/vector-icons'
import { Box } from 'native-base'
import styleMenu from './style'

export default function Menu() {
  return (
    <Box style={styleMenu.container}>
      <Box style={styleMenu.content}>
        <FontAwesome5 name="home" size={24} color="white" />
        <FontAwesome5 name="address-book" size={24} color="white" />
        <FontAwesome5 name="question-circle" size={24} color="white" />
      </Box>
    </Box>
  )
}
