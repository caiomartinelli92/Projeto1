import './gesture-handler';
import { StyleSheet } from 'react-native';
import Routes from './src/routes/index.routes';
import { NavigationContainer } from '@react-navigation/native';

//aula 5 parte 2, minuto 00:00
//para rodar o projeto, entrar na pasta, e rodar npx expo start pelo terminal

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
