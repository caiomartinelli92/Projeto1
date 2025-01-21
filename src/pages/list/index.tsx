import React from "react";
import {Text, TouchableOpacity, View} from 'react-native'
import { style } from "./styles";
import { Input } from "../../components/Input";
import {MaterialIcons} from '@expo/vector-icons'
import { FlatList } from "react-native-gesture-handler";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";

type PropCard = {
    item: number,
    title: string,
    description: string,
    flag: 'urgente' | 'opcional'
}

const data: Array<PropCard> =
[
    {
        item: 0,
        title: 'Realizar a lição de casa!',
        description: 'página 10 a 20',
        flag: 'urgente'
    },
    {
        item: 1,
        title: 'Passear com o cachorro!',
        description: 'página 10 a 20',
        flag: 'urgente'
    },
    {
        item: 2,
        title: 'Sair para tomar açai!',
        description: 'página 10 a 20',
        flag: 'urgente'
    },
]

export default function List(){

    const _renderCard = (item: PropCard) => {
        return (
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                        <Ball color="red"/>
                        <View>
                            <Text style={style.titleCard} >{item.title}</Text>
                            <Text style={style.descriptionCard}>{item.description}</Text>
                        </View>
                    </View>
                        <Flag caption="Urgente" color={themas.colors.red}/>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeding}>
                    Bom dia,
                        <Text style={{fontWeight:'bold'}}> Caio </Text>
                </Text>
                <View style={style.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        iconLeftName="search"
                    />
                </View>
            </View>   

            <View style={style.boxList}>
                <FlatList 
                    data={data}
                    style={
                        {
                            marginTop:40,
                            paddingHorizontal: 30
                        }
                    }
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({item, index}) => {
                        return (_renderCard(item))
                    }}
                />
            </View>         
        </View>
    )
}