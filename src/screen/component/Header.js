import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants';
import {useNavigation,useTheme} from '@react-navigation/native'

function Header() {
    const navigation=useNavigation()
    const {colors} =useTheme()
    const mycolor=colors.iconColor
    
  return (
    <View style={{
       
        height:50,
        backgroundColor:colors.headerColor,
        flexDirection:"row",
        justifyContent:'space-between',
        elevation:6,
        marginTop:Constant.statusBarHeight,
      
       
    }}>
        <View style={styles.leftHead}>
            <Entypo style={{margin:5}} 
            name="youtube" size={32} 
            color="red"/>
            <Text 
            style={{fontSize:18, margin:5, fontWeight:'bold', color:mycolor}}>
                YouTube
            </Text>

        </View>
        <View style={styles.rightHead}>
            <Ionicons name="md-videocam"  size={28} color={mycolor}/>
            <Ionicons name="md-search"  size={28} color={mycolor}
            onPress={()=>navigation.navigate("Search")}
            />
            <MaterialIcons name="account-circle"  size={28} color={mycolor}/>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    leftHead:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:10,
        margin:8
     
      
       

    },
    rightHead:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-around',
        width:150,
        margin:8
        
    }
  
});
export default Header;
