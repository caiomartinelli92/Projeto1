import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import {MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";


export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loaging,SetLoading] = useState(false)

    async function getLogin(){
        try{
            SetLoading(true)

            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }

            setTimeout(() => {
                if(email == 'Caio' && password == '123'){
                    Alert.alert('Logado com sucesso!')
                } else {
                    Alert.alert('Usuário não encontrado!')
                }
                SetLoading(false)
            }, 3000);

        }catch (error){
            console.log(error)
        }
    }

    
    return (
        <View style={style.container}>
        <View style={style.boxTop}>
            <Image
                source={Logo}
                style={style.logo}
                resizeMode="contain"
            />
            <Text style={style.text}>Bem vindo de volta!</Text>
        </View>
        <View style={style.boxMid}>

            <Text style={style.titleInput} >ENDEREÇCO DE E-MAIL</Text>
            
            <View style={style.boxInput} >
                <TextInput 
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <MaterialIcons 
                    name="email"
                    size={20}
                    color={themas.colors.gray}
                />
            </View>

            <Text style={style.titleInput} >SENHA</Text>
            
            <View style={style.boxInput} >
                <TextInput 
                    style={style.input}
                    onChangeText={setPassword}
                />
                <MaterialIcons 
                    name="remove-red-eye"
                    size={20}
                    color={themas.colors.gray}
                />
            </View>

        </View>
        <View style={style.boxBottom}>
            <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                {
                    loaging?
                        <ActivityIndicator color={'#FFF'} size={'small'}/>
                    :
                        <Text style={style.textButton}>Entrar</Text>
                }
            </TouchableOpacity>
        </View>

        <Text style={style.textBottom}>Não tem uma conta? 
            <Text style={style.textBottomCreate}> Crie agora! </Text>
            </Text>

    </View>
    )
}