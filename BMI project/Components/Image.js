import React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";


function Image(){
    return(
    <View style={styles.container}>
        
        <TouchableOpacity>
        <Image style={styles.img} source={require('../images/3BVBHES-blue-person-symbol-vector.svg')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.img} source={require('../images/images.png')} />
        </TouchableOpacity>
    </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"row",
      justifyContent:"space-evenly"
    },
    img:{
      width:40,
      height:40,
      resizeMode:contain,
      borderTopRightRadius:5,
      borderTopLeftRadius:5,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5  
    }
    
})


export default Image