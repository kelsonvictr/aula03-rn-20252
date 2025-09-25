import { View, Text } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoginScreen />
    </View>
  )
}

export default App