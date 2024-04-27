import { StyleSheet } from 'react-native'
const styleHistoric = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '50%',
    paddingHorizontal: 16,
  },
  content: {
    gap: 10,
  },
  contentHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  labelTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: '#2C3E50',
  },
  containerResult: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultImc: {
    fontSize: 20,
    color: '#2C3E50',
  },
})
export default styleHistoric
