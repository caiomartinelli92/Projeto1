import React from "react";
import {Text,View,Alert,TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {style} from './styles'
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function User(){

    const navigation = useNavigation<NavigationProp<any>>()

    const handleLogout = () => {
        Alert.alert("Logout", "Você saiu da conta")
        return navigation.reset({routes:[{name:'Login'}]})
    }

    return (
        <View style={style.container}>
            <Text style={style.name}>Caio Martinelli.</Text>
            <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
                <Ionicons
                    name="exit"
                    style={{color:'gray'}}
                    size={40}
                />
            </TouchableOpacity>
        </View>
        )
}