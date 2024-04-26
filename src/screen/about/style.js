import { StyleSheet } from 'react-native'
const styleAbout = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 100,
    paddingHorizontal: 16,
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
  content: {
    gap: 10,
  },
  contentInfor: {
    gap: 10,
  },
  infor: {
    fontSize: 15,
    fontWeight: 500,
    color: '#2C3E50',
  },
  ContentTableInfor: {
    gap: 5,
  },
  tableInfor: {
    fontSize: 15,
    fontWeight: 400,
    color: '#1C1C1C',
    backgroundColor: '#B0C4DE',
    borderRadius: 8,
    padding: 5,
  },
})
export default styleAbout
