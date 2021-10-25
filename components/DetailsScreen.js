import React, { useState } from "react";
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function DetailsScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const pickImage = async () => {
    const _image = await ImagePicker.launchImageLibraryAsync();
    if(!_image.cancelled) {
      setImage(_image.uri)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {firstName || 'Guest'}!</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.textStyle}>These are the details</Text>
      <Button title="Select Photo" onPress={pickImage} />
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name" />
      <Button title="< Back" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 64,
    textAlign: 'center',
    fontWeight: "600",
  },
  image: {
    width: 360,
    height: 240,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 28,
    textAlign: 'center',
  },
});