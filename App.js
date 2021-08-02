import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/Home';
import Search from './src/screen/component/Search';
import Constant from 'expo-constants';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import Video from './src/screen/Video';
import Explore from './src/screen/Explore';
import Subscribe from './src/screen/Subscribe';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './src/screen/Reducer'

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:'white'
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"whitesmoke",
    iconColor:"black",
    tabIcon:'red'
  }
}

const store= createStore(reducer)
const Stack = createStackNavigator()
const Tabs=createBottomTabNavigator()
const RootHome=()=>{
  const {colors} =useTheme()
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = "home";
        } else if (route.name === 'Explore') {
          iconName = "explore";
        }else if (route.name === 'Subscribe') {
          iconName = "subscriptions";
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    
    >
      <Tabs.Screen name="Home" component={HomeScreen}/>
      <Tabs.Screen name="Explore" component={Explore}/>
      <Tabs.Screen name="Subscribe" component={Subscribe}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer theme={customDarkTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Video" component={Video}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
