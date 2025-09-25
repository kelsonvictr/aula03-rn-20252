import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1,  justifyContent: 'center', alignItems: 'center', padding: 20  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', borderBottomWidth: 1, marginBottom: 20, padding: 8},
  orText: { marginVertical: 20, fontSize: 16, color: '#555' }
})

export default LoginScreen