import React from "react";
import {Text,View,StyleSheet,TextInput,Button} from "react-native";

function Input(){
    const [word, setword] = useState('')
    const [height, setheight] = useState('')
    const [loader, setloader] = useState(false)
    if(loader){
        return(
            <View style={{alignItems:"center"}}>
                <Text>Calculating</Text>
                <ActivityIndicator size={40} color="blue"/>
            </View>
        )
    }
    const Calculating=()=>{
        setloader(true)
        setTimeout(()=>{setloader(false)},2000)
        const res= word/((height*height)/10000)
        return(
            <View>
             <Text> You Body Mass Index is {res}</Text>
             <Text>A Healthy BMI Ranges Between 19 and 25 :)</Text>
            </View>
        )

    }
    return(
       <View>
            <TextInput
            placeholder="kg"
            style={styles.input}
            onChangeText={(text)=>{setword(text)}}
            value={word}
            />
            <TextInput
            placeholder="cm"
            style={styles.input}
            value={height}
            onChangeText={(text)=>{setheight(text)}}
            />
           
           <Button
           title="Calculate BMI"
           onPress={()=>Calculating()}
           />
           </View>

    )
}

const styles=StyleSheet.create({
    input:{
        color: '#555555',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        borderColor: '#6E5BAA',
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: '#ffffff'
    }
})


export default  Input