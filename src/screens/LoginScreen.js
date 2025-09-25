import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const LoginScreen = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Digite seu email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1,  justifyContent: 'center', alignItems: 'center', padding: 20  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', borderBottomWidth: 1, marginBottom: 20, padding: 8},
  orText: { marginVertical: 20, fontSize: 16, color: '#555' },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 5,
    margimVertical: 5,
    justifyContent: 'center'
  },
})

export default LoginScreen