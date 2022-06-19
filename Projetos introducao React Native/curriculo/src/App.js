import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card';

import foto from './assets/foto.jpg';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://linkedin.com/in/nathanf2001');
        break;
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/nathanf2001');
        break;
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://facebook.com/nathanf2001');
        break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabeçalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Nathan Freitas</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.rede_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="facebook"
                size={30}
                onPress={() => handleRedeSocial('facebook')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="linkedin"
                size={30}
                onPress={() => handleRedeSocial('linkedin')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Experiências">
          <Text style={style.card_content_text}>Data Mining</Text>
          <Text style={style.card_content_text}>Power BI</Text>
          <Text style={style.card_content_text}>Desevolvimento Mobile</Text>
        </Card>
        <Card titulo="Formação Academica">
          <Text style={style.card_content_text}>
            Bacharelando em Sistemas de Informação
          </Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabeçalho: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  rede_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
