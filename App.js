import * as React from 'react';
import * as Speech from 'expo-speech';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speakTheWord = () => {
    var speech = this.state.name;
    Speech.speak(speech);
  };

  render() {
    return (
      <View
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
        }}>
        <SafeAreaProvider>
          <Header
            centerComponent={{
              text: 'Text To Speech',
              style: {
                fontSize: 24,
                fontWeight: 'bold',
                alignItems: 'center',
                height: 50,
                justifyContent: 'center',
                marginTop: 15,
              },
            }}
          />

          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'https://image.shutterstock.com/z/stock-vector-notification-on-the-screen-of-a-smartphone-sms-in-the-form-of-a-speech-ball-on-the-screen-of-a-1715813038.jpg',
            }}
          />

          <TextInput
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
            }}
            value={this.state.name}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.speech}
            onPress={() => {
              this.state.name ? this.speakTheWord() : alert('please write a word to speak')
            }}>
            Click Here To Listen
          </TouchableOpacity>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    fontSize: 16,
  },

  speech: {
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 20,
    borderWidth: 5,
    borderColor: 'black',
    padding: 10,
    backgroundColor: 'turquoise',
    borderRadius: 15,
    outline: 'none',
    fontFamily: 'Inconsolata',
    fontWeight: 'bold',
  },

  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});
