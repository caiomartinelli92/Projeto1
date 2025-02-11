import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Input } from "../components/Input";
import { themas } from "../global/themes";
import { Flag } from "../components/Flag";
import CustomDateTimePicker from "../components/customDateTimePicker";

export const AuthContextList: any = createContext({});

const Flags = [
  { caption: "urgente", color: themas.colors.red },
  { caption: "opcional", color: themas.colors.blueLight },
];

export const AuthProviderList = (props: any) => {
  const modelizeRef = useRef<Modalize>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("urgente");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const onOpen = () => {
    modelizeRef.current?.open();
  };

  const onClose = () => {
    modelizeRef?.current?.close();
  };

  useEffect(() => {
    onOpen();
  }, []);

  const _renderFlags = () => {
    return Flags.map((item, index) => (
      <TouchableOpacity key={index}>
        <Flag
          caption={item.caption}
          color={item.color}
          //selected
        />
      </TouchableOpacity>
    ));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleTimeCHange = (date) => {
    setSelectedTime(date)
  }

  const _container = () => {
    let formatacaoHora = {hour:'2-digit', minute:'2-digit'}
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios'?'padding':'height'}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onClose()}>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>Criar Tarefa</Text>
          <TouchableOpacity>
            <AntDesign name="check" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Input
            title="Título:"
            labelStyle={styles.label}
            value={title}
            onChangeText={setTitle}
          />
          <Input
            title="Descrição:"
            labelStyle={styles.label}
            height={100}
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={setDescription}
          />
          <View style={{ width: "40%" }}>
            <View
            style={{
              flexDirection:'row',
              gap: 10,
              width:'100%'
            }}
            >
              <TouchableOpacity onPress={()=> setShowDatePicker(true)} style={{width:'150%'}} >
              <Input
                title="Data Limite"
                labelStyle={styles.label}
                editable={false}
                value={selectedDate.toLocaleDateString()}
                onPress={() => setShowDatePicker(true)}
              />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> setShowTimePicker(true)} style={{width:'100%'}} >
              <Input
                title="Hora Limite"
                labelStyle={styles.label}
                editable={false}
                value={selectedTime.toLocaleTimeString('pt-BR',formatacaoHora)}
                onPress={() => setShowTimePicker(true)}
              />
              </TouchableOpacity>

            </View>
            <CustomDateTimePicker
              onDateChange={handleDateChange}
              setShow={setShowDatePicker}
              show={showDatePicker}
              type={'date'}
            />
            <CustomDateTimePicker
              onDateChange={handleTimeCHange}
              setShow={setShowTimePicker}
              show={showTimePicker}
              type={'time'}
            />
          </View>
          <View style={styles.containerFlag}>
            <Text style={styles.label}>Flags:</Text>
            <View style={styles.rowFlag}>{_renderFlags()}</View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modelizeRef}
        childrenStyle={{ height: 540 }}
        adjustToContentHeight={true}
      >
        {_container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    width: "100%",
    height: 40,
    paddingHorizontal: 40,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
  },
  containerFlag: {
    width: "100%",
    padding: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#000",
  },
  rowFlag: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});
