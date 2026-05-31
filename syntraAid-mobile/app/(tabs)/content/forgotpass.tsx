import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from "react"; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {styles} from '@/styles/main';



export default function ForgotPass() {
  
  const [inputValue, setInputValue] = useState("");
 
  function MyButton() {
    
  const navigation = useNavigation();
  };

  const Submit= () => {navigation.navigate('/(tabs)')};
  const Signin= () => {navigation.navigate('/(tabs)/signin')};
  
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
        <Text style={styles.text}>Forgot Password</Text>
        <Text style={{fontSize:14}}>Don't worry it happens enter your registered email address and we'll send you a recovery code to reset your pssword</Text>
        <Image source={require('@/assets/images/forgot.jpg')} style={{ alignSelf:'center'}}/>
        <TextInput secureTextEntry autoCapitalize="characters" placeholder="Enter your email" style={styles.input}/>
         <TouchableOpacity style={styles.box} onPress={Submit}>
        <Text style={styles.text2}>Confirm</Text></TouchableOpacity>
        <Text style={styles.link} onPress={Signin}>Back to log in</Text>
        </View>    
              
      </ScrollView>
    </SafeAreaView>
  );
}