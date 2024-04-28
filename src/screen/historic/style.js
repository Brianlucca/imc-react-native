import { StyleSheet } from 'react-native'
const styleHistoric = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
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
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  containerResult: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultImc: {
    fontSize: 20,
    color: '#2C3E50',
    textAlign: 'center',
    margin: 6,
  },
  resultValue: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#4682B4',
    borderRadius: 8,
  },
})
export default styleHistoric
