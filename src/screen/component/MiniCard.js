import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,TextInput,TouchableOpacity} from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons';
import {useNavigation,useTheme} from '@react-navigation/native'



// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q=songs&type=video&key=AIzaSyDS9TP1VsCeQeJCmAn2NNU6MxfZgEyN-bQ

const MiniCard=(props)=>{
    const navigation=useNavigation();
    const {colors} =useTheme()
    const  textColor =colors.iconColor
    return(
        <TouchableOpacity
        
        onPress={()=>navigation.navigate("Video",{videoId:props.videoId,title:props.title})}
        >
        <View style={{flexDirection:'row',
        margin:12,
        marginBottom:0
        }} >
             <Image
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
                width:'45%',
                height:100
            }}
            
            
            />
            <View style={{
                paddingLeft:7
            }}>
                <Text style={{
                    fontSize:17,
                    width:Dimensions.get("screen").width/2,
                    color:textColor
                }}
                ellipsizeMode="tail"
                numberOfLines={3}
                
                >
                   {props.title}
                </Text>
                <Text
                style={{
                    fontSize:12,
                    color:textColor
                }}
                >{props.channel}</Text>

            </View>
        </View>
        </TouchableOpacity>
    )
}
export default MiniCard