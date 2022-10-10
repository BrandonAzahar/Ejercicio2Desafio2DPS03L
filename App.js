import * as React from 'react';
import { Text, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Constants, Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

function PelisScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left' }}>
    <Text >comedias</Text>
    <AntDesign name="iconfontdesktop" size={24} color="black" />
    <ScrollView horizontal>
    
      <Video
      
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
          <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />

        <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
    
    </ScrollView>

     <Text >Romance</Text>
    <AntDesign name="iconfontdesktop" size={24} color="black" />
    <ScrollView horizontal>
    
      <Video
      
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
          <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />

        <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
    
    </ScrollView>




    <Text >Accion</Text>
    <AntDesign name="iconfontdesktop" size={24} color="black" />
    <ScrollView horizontal>
    
      <Video
      
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
          <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />

        <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
    
    </ScrollView>
    </View>
  );
}

function SeriesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Text >Series</Text>
    <AntDesign name="iconfontdesktop" size={24} color="black" />
    <ScrollView showsVerticalScrollIndicator>
    
      <Video
      
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
        <Text>batalla por terra</Text>
        <Text>temp 1</Text>


       
          <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
          
        />
         <Text>recate alado</Text>
        <Text>temp 2</Text>
        
        <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
         <Text>dejados atras</Text>
        <Text>temp 6</Text>
    
    </ScrollView>

    
   <AntDesign name="menu-unfold" size={24} color="black" />
    <ScrollView showsVerticalScrollIndicator>
    
      <Video
      
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
         <Text>la venganza de julia</Text>
        <Text>temp 1</Text>
          <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
         <Text>nauto</Text>
        <Text>temp 8</Text>

        <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
        />
         <Text>backrooms</Text>
        <Text>temp 15</Text>
    
    </ScrollView>
      
      
    </View>
  );
}

function ProximamenteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>proximante!</Text>
      <Text>temporara 3</Text>
      <Text>estreno Enero 2023</Text>

      <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
          
        />
        <Text>Verano de 2022</Text>
        <Text>Volvera en su segunda temporara</Text>
        <Text>fecha del estreno Dic 2022</Text>

        <Video
          ref={r => (this.vid = r)}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ width: 200, height: 200 }}
          onFullscreenUpdate={e => {
            this.setState({fullscreen: true});
            console.log(e);
          }}
          
        />



    </View>
  );
}




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Configuracion') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="peliculas" component={PelisScreen}  />
        <Tab.Screen name="series" component={SeriesScreen} />
        <Tab.Screen name="proximamente" component={ProximamenteScreen}/>
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}