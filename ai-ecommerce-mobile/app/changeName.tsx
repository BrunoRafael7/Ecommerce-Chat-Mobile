import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const changeName = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TextInput placeholder='Escreva seu nome' onChangeText={(text) => setUsername(text)} placeholderTextColor='black' style={styles.textInput}/>
        <TouchableOpacity disabled={username.trim() === ''} style={styles.button} onPress={() => router.replace({pathname: '/chat', params: {username}})}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    textInput:{ 
        width: '80%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        color: 'black',
        paddingLeft: 10,
      },
      button: {
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#0EDFBD',
        marginVertical: 10
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
      },
})

export default changeName