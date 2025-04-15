import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
const login = () => {
    const router = useRouter()

    const [email, setEmail] = useState({value: '', dirty: false});
    const [password, setPassword] = useState({value: '', dirty: false});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const handleErrorEmail = () => {
        if(!email.value && email.dirty) {
            return <Text style={styles.error}>Campo obrigatório</Text>
        } else if (!emailRegex.test(email.value) && email.dirty) {
            return <Text style={styles.error}>E-mail inválido</Text>
        } else {
            return <Text style={styles.error}></Text> 
        }
    }

    const handleErrorPassword = () => {
        if(!password.value && password.dirty) {
            return <Text style={styles.error}>Campo obrigatório</Text>
        } else {
            return <Text style={styles.error}></Text> 
        }
    }

    const handleErrorForm = () => {
        /*let hasError = false;
        if(!password.value) {
          setPassword({value: password.value, dirty: true})
          hasError = true;
        }
    
        if(!email.value) {
          setEmail({value: email.value, dirty: true})
          hasError = true
        }
        
        if (!emailRegex.test(email.value)) {
          setEmail({value: email.value, dirty: true})
          hasError = true
        }
    
        if(!hasError) {*/
            router.replace('/(tabs)/home')
        //}
      } 
  return (
    <LinearGradient colors={['#0EDFBD', '#0950AB']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}

    >
     <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
            <AntDesign style={styles.logo} name="bank" />
            <Text style={{color: '#FFF', fontSize:32, marginBottom: 20}}>Ecommerce IA</Text>
        </View>
        <TextInput style={styles.input} placeholder='E-mail' onChangeText={(text) => {setEmail({value: text, dirty: true})}}/>
        {handleErrorEmail()}
        <TextInput style={styles.input} placeholder='Senha' onChangeText={(text) => {setPassword({value: text, dirty: true})}} secureTextEntry/>
        {handleErrorPassword()}
        <TouchableOpacity onPress={()=> handleErrorForm()} style={styles.loginButton}><Text style={{color: '#FFF'}}>Entrar</Text></TouchableOpacity>
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
        borderRadius: 5
    },
    error: {
        width: '100%',
        marginBottom: 20,
        color: '#FFF',
        fontWeight: 'bold',
        height: 20,
        fontSize: 14
    }

})

export default login