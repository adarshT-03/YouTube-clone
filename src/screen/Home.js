import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView, FlatList} from 'react-native';
import card from './component/Card';
import Header from './component/Header';
import Card from './component/Card';
import {useSelector,useDispatch} from 'react-redux'
function HomeScreen() {

  const cardData = useSelector(state=>{
    return state
  })
  return (
    <View >
      <Header/>
      <FlatList
      data={cardData}
      renderItem={({item})=>{
        return <Card
        videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
        
        />
      }}
      keyExtractor={item=>item.id.videoId}
      
      />
     
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
export default HomeScreen;
