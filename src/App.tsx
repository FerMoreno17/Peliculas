import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigation/Navigator';
import { GradientProvider } from './context/GradientContext';
import SplashScreen from 'react-native-splash-screen';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  );
};

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
