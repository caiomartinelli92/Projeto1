import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import { CurrentRenderContext } from "@react-navigation/native";

export const style = StyleSheet.create(
    {
        tabArea:{
            height:80,
            backgroundColor:'#FFF',
            flexDirection:'row',
            borderTopColor: 'black',
            shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 3,
             },
             shadowOpacity: 0.29,
             shadowRadius: 4.65,
             elevation: 7,
            },
        tabItem:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        tabItemButtom:{
            width: 70,
            height: 70,
            borderRadius: 35,
            alignItems: 'center',
            zIndex: 9999,
            top: -30,
            backgroundColor: themas.colors.primary
        }
    }
)