import { FontAwesome5 } from '@expo/vector-icons'
import { Box } from 'native-base'
import styleHeader from './style'

function Header() {
  return (
    <Box style={styleHeader.container}>
      <Box style={styleHeader.content}>
        <FontAwesome5
          name="linkedin-in"
          size={24}
          color="white"
          style={styleHeader.icon}
        />
        <FontAwesome5
          name="github"
          size={24}
          color="white"
          style={styleHeader.icon}
        />
      </Box>
    </Box>
  )
}
export default Header
