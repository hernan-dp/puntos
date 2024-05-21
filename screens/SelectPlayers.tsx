import ColorSelector from "@components/ColorSelector";
import { Button, Fab, HStack, Input, Text, VStack } from "native-base";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import IonicIcons from "react-native-vector-icons/Ionicons";

const DEFAULT_PLAYER = { name: "", color: "primary.600", points: 0 };

const SelectPlayers = () => {
  const [players, setPlayers] = useState([DEFAULT_PLAYER]);

  const addPlayer = () => setPlayers([...players, DEFAULT_PLAYER]);

  const removePlayer = (index: number) => {
    if (players.length === 1) return;

    const newPlayers = players.filter((_, i) => i !== index);
    setPlayers(newPlayers);
  };

  const updateColor = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index].color = value;

    setPlayers(newPlayers);
  };

  const updateName = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index].name = value;

    setPlayers(newPlayers);
  };

  return (
    <VStack h="full" w="full" px="5" space={5} bg="white" py={10}>
      <Text fontWeight="bold" fontSize="xl">
        Añade Jugadores:
      </Text>
      {players.map((player, index) => (
        <HStack
          w="full"
          space={5}
          justifyContent="center"
          alignItems="center"
          key={`player_${index}`}
        >
          <Input
            placeholder={`Jugador ${index + 1}`}
            variant="outline"
            flex={1}
            value={player.name}
            onChangeText={(value) => updateName(index, value)}
          />
          <ColorSelector
            color={player.color}
            onChange={(newColor) => updateColor(index, newColor)}
          />
          {players.length > 1 && (
            <IonicIcons
              name="trash"
              size={40}
              color="red"
              onPress={() => removePlayer(index)}
            />
          )}
        </HStack>
      ))}
      <HStack space={5}>
        <Button
          onPress={addPlayer}
          ml="auto"
          mt="2"
          leftIcon={<Entypo name="plus" size={30} color="white" />}
        >
          <Text fontWeight="extrabold" color="white">
            Agregar Jugador
          </Text>
        </Button>
      </HStack>
      <Fab
        position="absolute"
        bottom={5}
        bgColor="tertiary.500"
        right={5}
        icon={<Entypo name="chevron-right" size={30} color="white" />}
        onPress={() => console.log("Start game")}
      />
    </VStack>
  );
};

export default SelectPlayers;
