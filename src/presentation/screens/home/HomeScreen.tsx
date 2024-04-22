import { Text, View } from "react-native"
import { styles } from "../../../config/app-theme"
import { useProfileStore } from "../../store/profile-store";

export const HomeScreen = () => {

  const email = useProfileStore(state => state.email);
  const name = useProfileStore(state => state.name);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}
