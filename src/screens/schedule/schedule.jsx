import { Alert, Text, View } from "react-native";
import { styles } from "./schedule_style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";
import api from "../../constants/api";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export default function Schedule(props) {

  
  const id_doctor = props.route.params.id_doctor;
  const id_service = props.route.params.id_service;

  const [selectedDate, setSelectDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [selectedHour, setSelectHour] = useState("");


async function ClickBooking(){
  try {
  const response = await api.post("/appointments", {
    id_doctor,
    id_service,
    booking_date: selectedDate,
    booking_hour: selectedHour
  })
  
     if (response.data?.id_appointment){
         props.navigation.popToTop(); //voltar para tela inicial
     }
  
  } catch (error) {
     if(error.response?.data.error){
        Alert.alert(error.response.data.error)
     }else{
        Alert.alert("Falha ao se conectar com servidor. Tente novamente mais tarde")
  }
     }
  }

  return (
    <View style={styles.container}>
      <View>
        <Calendar
          theme={styles.theme}
          onDayPress={(day) => {
            setSelectDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: { selected: true },
          }}
          minDate={new Date().toDateString()}
        />

        <View>
          <Text style={styles.textHour}>Horário</Text>
        </View>

        <View>
          <Picker style={styles.picker}
            selectedValue={selectedHour}
            onValueChange={(itemValue) => {
              setSelectHour(itemValue);
            }}
          >
            <Picker.Item label="9:00" value="9:00" />
            <Picker.Item label="9:30" value="9:30" />
            <Picker.Item label="10:00" value="10:00" />
          </Picker>
        </View>
      </View>

      <View>
        <Button text={"Confirmar Reserva"} theme={"primary"} onPress={ClickBooking}/>
      </View>
    </View>
  );
}
