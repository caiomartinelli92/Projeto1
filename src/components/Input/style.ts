import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput:{
                width: '100%',
                height: 40,
                borderWidth: 1,
                borderRadius: 40,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingHorizontal: 20,
                backgroundColor: themas.colors.bgScreen,
                borderColor: themas.colors.lightGray
            },
            input:{
                width:'90%',
                height:'100%',
                borderRadius: 40,
                paddingLeft: 0 
            },
            titleInput:{
                marginLeft: 5,
                color: themas.colors.gray,
                marginTop: 20
            },
            Icon:{
                width: '100%'
            },
            Button:{
                //width:'10%'
            }
})