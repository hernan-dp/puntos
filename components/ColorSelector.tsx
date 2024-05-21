import { Modal, VStack, Pressable, HStack } from "native-base";
import React, { useState } from "react";

const firstRow = ["primary.600", "secondary.600", "yellow.400"];
const secondRow = ["success.600", "warning.600", "danger.600"];

type ColorSelectorProps = {
  color: string;
  onChange: (color: string) => void;
};

const ColorSelector = ({ color, onChange = () => {} }: ColorSelectorProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(color);

  const onColorPress = (color: string) => {
    setSelectedColor(color);
    onChange(color);
    setModalOpen(false);
  };

  return (
    <VStack>
      <Pressable
        w="10"
        h="10"
        borderWidth={2}
        borderColor="gray.600"
        rounded="full"
        bg={color || firstRow[0]}
        onPress={() => setModalOpen(true)}
      />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Elije un color</Modal.Header>
          <Modal.Body>
            <VStack w="full" space={5}>
              <HStack>
                {firstRow.map((color) => (
                  <Pressable
                    key={`${color}`}
                    w="10"
                    h="10"
                    mx="auto"
                    rounded="full"
                    borderWidth={selectedColor === color ? 4 : 2}
                    borderColor={
                      selectedColor === color ? "blue.600" : "gray.600"
                    }
                    bg={color}
                    onPress={() => onColorPress(color)}
                  />
                ))}
              </HStack>
              <HStack>
                {secondRow.map((color) => (
                  <Pressable
                    key={`${color}`}
                    w="10"
                    h="10"
                    mx="auto"
                    rounded="full"
                    borderWidth={selectedColor === color ? 4 : 2}
                    borderColor={
                      selectedColor === color ? "blue.600" : "gray.600"
                    }
                    bg={color}
                    onPress={() => onColorPress(color)}
                  />
                ))}
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Content>
      </Modal>
    </VStack>
  );
};

export default ColorSelector;
