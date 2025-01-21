import React, { forwardRef, LegacyRef } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { style } from "./style";
import {MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons'
import { themas } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,  
    iconRightName?: string, 
    title?: string,
    onIconLeftPress?: () => void, 
    onIconRigthPress?: () => void
    height?:number,
    labelStyle?:StyleProp<TextStyle>
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput>) =>{

    const {
        IconLeft,
        IconRigth,
        iconLeftName,
        iconRightName,
        title,
        onIconLeftPress,
        onIconRigthPress,
        labelStyle,
        height,
        ...rest
    } = Props

    const calculateSizeWidth = () =>{
        if(IconLeft && IconRigth){
            return '80%'
        } else if(IconLeft || IconRigth){
            return '90%'
        }else{
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () =>{
        if(IconLeft && IconRigth){
            return 0
        } else if(IconLeft || IconRigth){
            return 10
        }else{
            return 20
        }
    }

    return (
        <>
            {title &&<Text style={[style.titleInput,labelStyle]} >{title}</Text>}
            <View style={[style.boxInput,{paddingLeft:calculateSizePaddingLeft(), height:height||40}]} >
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button} >
                        {IconLeft && iconLeftName &&(
                            <IconLeft name={iconLeftName as any}
                             size={20} 
                             color={themas.colors.gray} 
                             style={style.Icon} />
                        )}
                    </TouchableOpacity>
                    <TextInput
                        style={[
                            style.input,
                            {width:calculateSizeWidth(),height:'100%'}
                        ]}
                        {...rest}
                    />
                    <TouchableOpacity onPress={onIconRigthPress} style={style.Button} >
                        {IconRigth && iconRightName &&(
                            <IconRigth name={iconRightName as any}
                             size={20} 
                             color={themas.colors.gray} 
                             style={style.Icon} />
                        )}
                    </TouchableOpacity>
            </View>
        </>
    )
})