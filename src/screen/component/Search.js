import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,TextInput,FlatList,ActivityIndicator,ScrollView} from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons';
import MiniCard from './MiniCard';
import Constant from 'expo-constants';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native'
import { color } from 'react-native-reanimated';


const Search=({navigation})=>{
    const [value,setValue]=useState("")
    const {colors} =useTheme()
    const  mycolor =colors.iconColor
   
    //const[miniCardData,setMiniCard]=useState([])
    const dispatch =useDispatch()

   const miniCardData= useSelector(state=>{
       return state

    })


    const[loading,setLoading]=useState(false)


    const fetchData=()=>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q=${value}&type=video&key=AIzaSyDS9TP1VsCeQeJCmAn2NNU6MxfZgEyN-bQ`)
        .then(res=>res.json())
        .then(data=>{
           setLoading(false)
           dispatch({type:"add",payload:data.items})

            //setMiniCard(data.items)
        })
    }
    const cardMini=()=>{
        <MiniCard/>
    }


    return(
        <View style={{flex:1,
            marginTop:Constant.statusBarHeight,}}>
            <View style={{
                 flexDirection:'row',
                 justifyContent:'space-around',
                 
                 backgroundColor:colors.headerColor
                 ,paddingTop:10,
                 elevation:4,
                 height:55
            }}>
               
            <Ionicons name="md-arrow-back" 
            style={{color:mycolor}} size={28} color="#212121"
            onPress={()=>navigation.navigate('Home')}
            />
            <TextInput
           
            value={value}
            style={{width:"70%",height:35,
        backgroundColor:"#e6e6e6"
        }}
            
            onChangeText={(text)=>{
                setValue(text)
            }}
            />

            <Ionicons
             style={{color:mycolor}}
            name="md-send"
            size={28}
            onPress={
                ()=>fetchData()
            }
            
            />
        
            

            </View>

            {loading ?<ActivityIndicator size="large" color="red"/> : null}
           
            <FlatList 
            data={miniCardData}
            renderItem={({item})=>{
                return <MiniCard
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
const styles=StyleSheet.create({
    topHeader:{
   
       

        
       
      
   
    }
})

export default Search;