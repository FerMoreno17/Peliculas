import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigation/Navigator';
import { GradientProvider } from './context/GradientContext';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
