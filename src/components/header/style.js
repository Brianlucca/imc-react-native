import { StyleSheet } from 'react-native'
const styleHeader = StyleSheet.create({
  container: {
    backgroundColor: '#2C3E50',
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
  content: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
export default styleHeader
