import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

import httpService from './services/httpService'

const register = () => {
    const SERVER_URL = 'http://10.5.7.221:3000'

    const router = useRouter()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const sendForm = async () => {
        const json = 
        {
            name: name,
            email: email,
            password: password,
            passwordRepeat: passwordRepeat
        }

        const result = await httpService.post(`${SERVER_URL}/api/user`, json)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", result)
        router.replace('/(tabs)/home')
    }
  return (
    <LinearGradient colors={['#0EDFBD', '#C60000']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}

    >
     <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
            <AntDesign style={styles.logo} name="bank" />
            <Text style={{color: '#FFF', fontSize:32, marginBottom: 20}}>Ecommerce IA</Text>
        </View>
        <TextInput onChangeText={(text) => setName(text)} style={styles.input} placeholder='Nome Completo*'/>
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='E-mail'/>
        <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='Senha' />
        <TextInput onChangeText={(text) => setPasswordRepeat(text)} style={styles.input} placeholder='Repetir Senha' secureTextEntry/>
        <TouchableOpacity onPress={()=> sendForm()} style={styles.loginButton}><Text style={{color: '#FFF'}}>Enviar</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> router.replace('/welcome')} style={styles.backButton}><Text style={{color: '#0EDFBD'}}>Voltar</Text></TouchableOpacity>
    
    </View>   

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        color: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    logo: {
        fontSize: 100,
        marginBottom: 20,
        color: '#FFF',
    },
    loginButton: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#0EDFBD',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    backButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#0EDFBD',
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    }

})

export default register