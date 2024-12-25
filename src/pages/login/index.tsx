import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import {MaterialIcons, Octicons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword,setShowPassword] = useState(true)
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
            <Input 
                value={email}
                onChangeText={setEmail}
                title="ENDEREÇO DE E-MAIL"
                IconRigth={MaterialIcons}
                iconRightName="email"
            />
            <Input
                value={password} 
                onChangeText={setPassword}
                title="SENHA"
                IconRigth={Octicons}
                iconRightName={showPassword?"eye-closed":"eye"}
                secureTextEntry={showPassword}
                onIconRigthPress={() => setShowPassword(!showPassword)}
            />
            
        </View>
        <View style={style.boxBottom}>
            <Button 
                text="ENTRAR"
                loading={loaging}
                onPress={()=>getLogin()}
            />
        </View>

        <Text style={style.textBottom}>Não tem uma conta? 
            <Text style={style.textBottomCreate}> Crie agora! </Text>
            </Text>

    </View>
    )
}