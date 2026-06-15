import * as Device from "expo-device";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Text>running On {Platform.OS}</Text>
      <Text>Device: {Device.brand}</Text>
      <Text>Device: {Device.modelName}</Text>
      <Text>Device os version : {Device.osVersion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
