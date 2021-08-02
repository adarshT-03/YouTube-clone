import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,TextInput,FlatList} from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons';
import Header from './component/Header';
import Card from './component/Card';
import {useSelector,useDispatch} from 'react-redux'

const LittleCard=({name})=>{
    
    return(
        <View style={{
            backgroundColor:"red",
            width:"48%",
            borderRadius:4,
            marginTop:10
        }}>
            <Text style={{
                textAlign:"center",
                color:'white',
                fontSize:18,
                margin:5
            }}>{name}</Text>

        </View>
    )
}

const Explore=()=>{
    const cardData = useSelector(state=>{
        return state
      })
    return(
        <View style={{
            flex:1

        }}>
            <Header/>
           <View style={{flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:'space-around'
        
        }}>
           <LittleCard name="Gaming"/>
           <LittleCard name="Music"/>
           <LittleCard name="News"/>
           <LittleCard name="Movies"/>
           <LittleCard name="Fashion"/>
           <LittleCard name="Blogging"/>
           </View>
           <Text style={{
               margin:8,
               fontSize:22,
               borderBottomWidth:1
           }}>Trending Videos</Text>
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
            
        </View>
    )
}

export default Explore