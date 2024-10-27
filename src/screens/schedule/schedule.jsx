import { Text, View } from "react-native";
import { styles } from "./schedule_style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export default function Schedule() {
  const [selectedDate, setSelectDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [selectedHour, setSelectHour] = useState("");

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
        <Button text={"Confirmar Reserva"} theme={"primary"} />
      </View>
    </View>
  );
}
