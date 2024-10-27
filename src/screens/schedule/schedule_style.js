import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 15,
  },
  theme: {
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue,
  },

  textHour: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.gray2,
    margin: 10,
  },

  picker: {
    borderBlockColor:COLORS.gray2,
    borderWidth:2,
    borderRadius:10,

  },
});
