import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions, TouchableOpacity} from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons';
import {useNavigation,useTheme} from '@react-navigation/native'

const card =(props)=>{
    const navigation=useNavigation();
    const {colors} =useTheme()
    const  textColor =colors.iconColor
    return(
        <TouchableOpacity
        
        onPress={()=>navigation.navigate("Video",{videoId:props.videoId,title:props.title})}
        >

       
        <View style={{marginBottom:12,flex:1}}
        
       
        >
            <Image
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
                width:'100%',
                height:230
            }}
            
            
            />
            <View style={styles.videoInfo}>
            <MaterialIcons name="account-circle"  size={38} color="#212121"/>
                <View>
                    <Text style={{fontSize:17,
                    fontWeight:'bold',
                    marginLeft:10,
                    width:Dimensions.get("screen").width-70,
                    color:textColor

                
                }}
                    ellipsizeMode="tail"
                    numberOfLines={1}


                    >{props.title}
                    </Text>
                    <Text style={{fontSize:13,
                        fontWeight:'normal',
                         marginLeft:10,
                         color:textColor}}
                         >{props.channel}
                    </Text>
                </View>
            </View>

           

        </View>
        </TouchableOpacity>
    )

}
const styles=StyleSheet.create({
    videoInfo:{
        flexDirection:'row',
        alignItems:'center',
        margin:7

    }
})

export default card