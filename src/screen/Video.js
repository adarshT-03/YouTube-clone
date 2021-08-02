import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,TextInput} from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import {useNavigation,useTheme} from '@react-navigation/native'


const Video=({route})=>{
    const {colors} =useTheme()
    const  textColor =colors.iconColor
    const {videoId,title}=route.params
    return(
        <View style={{ marginTop:Constant.statusBarHeight,}}>
            <View style={{width:"100%",
            height:200
        
        }}>
            <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri:`https://www.youtube.com/embed/${videoId}`}}
            />


            </View>
            <Text style={{fontSize:18,
            width:Dimensions.get("screen").width - 50,
            margin:9,
            color:textColor
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
            
            >
                {title}

            </Text>
            <View style={{borderBottomWidth:1}}/>
        </View>
    )
}

export default Video