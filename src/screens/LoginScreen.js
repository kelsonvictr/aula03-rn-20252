import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const LoginScreen = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Cursos APP</Text>

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

        <View style={styles.buttonWrapper}>
          <Button title="Entrar" />
        </View>

        <View style={styles.linksRow}>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Registre-se</Text>
          </TouchableOpacity>
        </View>

        { /* Botões sociais */ }
        <View style={styles.socialSection}>
          <TouchableOpacity style={[styles.socialButtons, styles.googleButton]}>
            <FontAwesome name="google" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.socialText}>Entrar com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButtons, styles.githubButton]}>
            <FontAwesome name="github" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.socialText}>Entrar com GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60
  },
  content: { width: '100%', alignItems: 'center' },
  logo: { width: 160, height: 160, marginBottom: 16 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 24 },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingVertical: 14,
    fontSize: 16
  },
  orText: { marginVertical: 20, fontSize: 16, color: '#555' },
  buttonWrapper: { width: '100%', marginTop: 10 },
  linksRow: { width: '100%', alignItems: 'center', marginTop: 16 },
  linkButton: { paddingVertical: 6 },
  linkText: { color: '#4a90e2', fontWeight: '600' },
  socialSection: { width: '100%', marginTop: 24 },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    borderRadius: 5,
    marginVertical: 5,
    justifyContent: 'center'
  },
  googleButton: { backgroundColor: '#EA4335' },
  githubButton: { backgroundColor: '#333' },
  icon: { marginRight: 10 },
  socialText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }

})

export default LoginScreen
