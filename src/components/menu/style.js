import { StyleSheet } from 'react-native'
const styleMenu = StyleSheet.create({
  container: {
    backgroundColor: '#2C3E50',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-around',
  },
})
export default styleMenu
