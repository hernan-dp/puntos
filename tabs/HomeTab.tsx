import { useNavigation } from "@react-navigation/native";
import { Button, View } from "native-base";
import React from "react";

const HomeTab = () => {
  const { navigate } = useNavigation();
  return (
    <View
      h="full"
      w="full"
      bg="#F0F4F7"
      justifyContent="center"
      alignItems="center"
    >
      <Button onPress={() => navigate("SelectPlayersScreen")}>
        Empezar Juego
      </Button>
    </View>
  );
};

export default HomeTab;
