import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Box } from 'native-base'
import styleMenu from './style'

function Menu() {
  const navigation = useNavigation()

  const navigateAbout = () => {
    navigation.navigate('About')
  }
  const navigateForm = () => {
    navigation.navigate('Form')
  }
  const navigateHistoric = () => {
    navigation.navigate('Historic')
  }

  return (
    <Box style={styleMenu.container}>
      <Box style={styleMenu.content}>
        <FontAwesome5
          name="home"
          size={24}
          color="white"
          onPress={navigateForm}
        />
        <FontAwesome5
          name="address-book"
          size={24}
          color="white"
          onPress={navigateHistoric}
        />
        <FontAwesome5
          name="question-circle"
          size={24}
          color="white"
          onPress={navigateAbout}
        />
      </Box>
    </Box>
  )
}
export default Menu
