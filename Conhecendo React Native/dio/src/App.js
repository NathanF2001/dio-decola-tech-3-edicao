import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/47864268?v=4';

const urlToMyGithub = 'https://github.com/NathanF2001';

const App = () => {
  const handlePressGoToGithub = async () => {
    const response = await Linking.canOpenURL(urlToMyGithub);
    if (response) {
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Nathan profile"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Nathan Freitas"
          style={[style.defaultText, style.name]}>
          Nathan Freitas
        </Text>
        <Text
          accessibilityLabel="Nickname: Nathan Freitas"
          style={[style.defaultText, style.nickname]}>
          NathanF2001
        </Text>
        <Text
          accessibilityLabel="Descrição: Nathan Freitas"
          style={[style.defaultText, style.description]}>
          Estudante Sistemas de Informação UFRPE
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              OpenGitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
