import React, { createContext,useContext, useEffect, useRef } from "react";
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import {MaterialIcons,AntDesign} from '@expo/vector-icons'
import { Input } from "../components/Input";

export const AuthContextList:any = createContext({})

export const AuthProviderList = (props:any) => {
    const modelizeRef = useRef<Modalize>(null)

    const onOpen = ()=>{
        modelizeRef.current?.open()
    }

    useEffect(() =>{
        onOpen()
    },[])

    const _container = () => {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <MaterialIcons 
                            name="close"
                            size={30}
                        />
                    </TouchableOpacity>
                        <Text style={styles.title} >Criar Tarefa</Text>
                    <TouchableOpacity>
                        <AntDesign 
                            name="check"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                        <Input 
                            title="Título:"
                            labelStyle={styles.label}
                        />
                        <Input 
                            title="Descrição:"
                            labelStyle={styles.label}
                            height={100}
                            multiline
                            numberOfLines={5}
                        />
                        <View style={{width:'40%'}}>
                            <Input 
                                title="Tempo limite:"
                                labelStyle={styles.label}
                            />
                        </View>
                        <View style={styles.containerFlag}>
                            <Text style={styles.label}>Flags:</Text>
                            <View style={{}}>

                            </View>
                        </View>
                    </View>
            </View>
        )
    }

    return (
        <AuthContextList.Provider value={{onOpen}}>
            {props.children}
            <Modalize
            ref={modelizeRef}
            childrenStyle={{height: Dimensions.get('window').height/1.3}}
            adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>
        </AuthContextList.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContextList)

export const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    header: {
        width: '100%',
        height: 40,
        paddingHorizontal: 40,
        flexDirection: 'row',
        marginTop:20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    content:{
        width: '100%',
        paddingHorizontal: 20
    },
    containerFlag:{
        width: '100%',
        padding: 10
    },
    label:{
        fontWeight: 'bold',
        color: '#000'
    }
})