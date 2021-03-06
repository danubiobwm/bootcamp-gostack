import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import AppProvider from './hooks';

import Router from './routes';

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <AppProvider>
          <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <Router />
          </View>
        </AppProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
