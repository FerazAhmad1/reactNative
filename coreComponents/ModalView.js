import React, { useState } from "react";
import { Button, Modal, View, Text } from "react-native";
export default function ModalView() {
  const [isModalvisible, setModalVisible] = useState(false);
  const modalVisibilityhandler = (state = false) => {
    setModalVisible(state);
  };
  return (
    <View>
      <Modal
        visible={isModalvisible}
        onRequestClose={modalVisibilityhandler}
        animationType="slide"
        presentationStyle="pageSheet">
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content </Text>
          <Button
            onPress={modalVisibilityhandler}
            title="Close"
            color="midnightblue"
          />
        </View>
      </Modal>
      <Button
        title="press"
        onPress={() => modalVisibilityhandler(true)}
        color="midnightblue"
      />
    </View>
  );
}
