/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home';
import SplashScreen from './src/screens/SplashScreen';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Ongoing from './src/screens/Ongoing';
import CompleteOrder from './src/screens/CompleteOrder';

import { CustomDrawerContent } from './src/drawer/CustomDraweContent';
import Toast from 'react-native-toast-message';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      edgeWidth={0}
      initialRouteName="SplashScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={'SplashScreen'} component={SplashScreen} />
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'SignIn'} component={SignIn} />
      <Drawer.Screen name={'SignUp'} component={SignUp} />
      <Drawer.Screen name={'Ongoing'} component={Ongoing} />
      <Drawer.Screen name={'CompleteOrder'} component={CompleteOrder} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
      <Toast />
    </NavigationContainer>
  );
}
