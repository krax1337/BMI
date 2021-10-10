import React from "react";
import {Text,View,StyleSheet} from "react-native";
import Constants from "expo-constants"
import Image  from "./Components/Image";
import Input from "./Components/input";

function App(){
    return(
        <View style={styles.container}>
           <Text style={styles.title}>BMI Calculator</Text>
           <Image/>
           <Input/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    title:{
        fontWeight: "bold",
        fontSize: 30,
        top: 0,
        marginVertical: 20,
        textAlign: "center"
    }

});

export default App
