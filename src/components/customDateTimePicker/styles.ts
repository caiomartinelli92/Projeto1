import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create(
    {
        modalOverlay:{
            flex: 1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: themas.colors.transparent
        },
        container:{
            width: '80%',
            padding: 16,
            backgroundColor:'#FFF',
            elevation: 5,
            alignItems:'center'
        },
        dateTex:{
            marginTop:20,
            fontSize:18,
            textAlign:'center'
        }
    }
)