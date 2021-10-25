import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';

export default function Coffee() {
  const [coffeeList, setCoffeeList] = useState();
  const [temperature, setTemperature] = useState('hot');
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then(response => response.json())
      .then(setCoffeeList)
      .catch(alert)
  }, [temperature])
  return(
    <View style={styles.container}>
      <View style={styles.buttonBar}>
        <Button title="Hot" onPress={() => setTemperature('hot')} />
        <Button title="Iced" onPress={() => setTemperature('iced')} />
      </View>
      <ScrollView>
        {!coffeeList
          ? <Text>Loading...</Text>
          : coffeeList.map(item => <Text style={styles.coffee} key={item.id}>{item.title}</Text>)
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  coffee: {
    fontSize: 36,
    paddingTop: 12,
  },
})