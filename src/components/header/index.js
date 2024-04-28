import { FontAwesome5 } from '@expo/vector-icons'
import { Box, Link } from 'native-base'
import styleHeader from './style'

function Header() {
  return (
    <Box style={styleHeader.container}>
      <Box style={styleHeader.content}>
        <Link href="https://www.linkedin.com/in/brian-lucca-cardozo-a2a134297/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FontAwesome5
            name="linkedin-in"
            size={24}
            color="white"
            style={styleHeader.icon}
          />
        </Link>
        <Link href="https://github.com/Brianlucca">
          <FontAwesome5
            name="github"
            size={24}
            color="white"
            style={styleHeader.icon}
          />
        </Link>
      </Box>
    </Box>
  )
}
export default Header
