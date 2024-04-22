import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config/app-theme"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { useCounterStore } from "../../store/counter-store";

export const SettingsScreen = () => {

  const navigator = useNavigation();
  const counter = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);

  useEffect(() => {
    navigator.setOptions({
      title: `Counter: ${counter}`
    })
  }, [counter])

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Count: {counter}</Text>

      <Pressable
        onPress={() => increment()}
        style={styles.primaryButton}
      >
        <Text>Incrementar</Text>
      </Pressable>

      <Pressable
        onPress={() => decrement()}
        style={styles.primaryButton}
      >
        <Text>Decrement</Text>
      </Pressable>
    </View>
  )
}
