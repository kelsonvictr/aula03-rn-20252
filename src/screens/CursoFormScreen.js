import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React from 'react'


const CursoFormScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Novo Curso
      </Text>

      <TextInput
        placeholder="Nome do curso"
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        style={styles.input}
      />

      <Button title="Criar Curso"  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
})

export default CursoFormScreen
