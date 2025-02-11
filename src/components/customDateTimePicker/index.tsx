import React, { useEffect, useState } from "react";
import { Modal,View, Platform } from 'react-native'
import { style } from './styles'
import DateTimePicker from '@react-native-community/datetimepicker'

const CustomDateTimePicker = ({type,onDateChange,show,setShow}) => {
    const [date,setDate] = useState(new Date())

    useEffect(()=>{
        if(onDateChange){
            onDateChange(date)
        }
    },[date,onDateChange])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setDate(currentDate)
        setShow(false)
    }
    //aula 5 parte 2 minuto 23:31
    return(
        <Modal
            transparent={true}
            visible={show}
            onRequestClose={()=>setShow(false)}  
        >
            <View style={style.modalOverlay}>
                <View style={
                    style.container,
                    Platform.OS == 'android'&&{backgroundColor:'transparent'}
                    }>
                    <DateTimePicker
                    value={date}
                    mode={type}
                    display={Platform.OS === 'ios'?'inline':'default'}
                    onChange={onChange}
                    />
                </View>

            </View>
        </Modal>
    )
}

export default CustomDateTimePicker