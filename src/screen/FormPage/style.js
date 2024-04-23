import { StyleSheet } from 'react-native'
const styleForm = StyleSheet.create({
  container: {
    backgroundColor: '#2B85A2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: '100%',
  },
  contentHeader: {
    display: 'flex',
    // gap: 16,
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 150,
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
})
export default styleForm
