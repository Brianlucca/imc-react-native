import { StyleSheet } from 'react-native'
const styleForm = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: '100%',
  },
  contentHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 90,
    color: '#00FF00',
  },
  labelTitle: {
    color: '#2C3E50',
    titleHeader: {
      fontSize: 20,
      color: '#2C3E50',
    },
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContent: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  form: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: '#2C3E50',
  },
})
export default styleForm
