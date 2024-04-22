import { Text, View } from "react-native"
import { ButtomTabsNavigator } from "./presentation/navigators/ButtomTabsNavigator"
import { NavigationContainer } from "@react-navigation/native"

export const Main = () => {
  return (
      <NavigationContainer>
        <ButtomTabsNavigator />
      </NavigationContainer>
  )
}