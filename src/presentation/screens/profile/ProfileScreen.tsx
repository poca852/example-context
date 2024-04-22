import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config/app-theme"
import { useProfileStore } from "../../store/profile-store";

export const ProfileScreen = () => {

  const email = useProfileStore(state => state.email);
  const name = useProfileStore(state => state.name);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>{name}</Text>

      <Pressable 
        onPress={() => useProfileStore.setState({
          name: 'natali soto',
          email: 'natali-soto@hotmail.com'
        })}
        style={styles.primaryButton}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        onPress={() => changeProfile('david-cuspoca@hotmail.com', 'david cuspoca')}
        style={styles.primaryButton}
      >
        <Text>Volver a david</Text>
      </Pressable>
    </View>
  )
}
