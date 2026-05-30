import { Image, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react"; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import useStore from '@/store/useStore';

import {styles} from '@/styles/main';



export default function Login() {
  const [greeting, setGreeting] = useState("Welcome")
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logBox, setLogBox] = useState('');


  function MyButton() {
    
  const navigation = useNavigation();
  };

  const Dash= ()=> {navigation.navigate('/(tabs)/content/dashb')};
  const Signup= () => {navigation.navigate('/(tabs)/content/signup')};
  const Forgotpass= () => {navigation.navigate('/(tabs)/content/forgotpass')};

  

  const user2 = useStore((state: any) => state.user2)
  const setUser2 = useStore((state: any) => state.setUser2)

  const handleLogin = () => {
    // TODO: Replace with real API authentication call in M2
        if (user2.email=='user@gmail.com' && user2.password==12345){
          navigation.navigate('/(tabs)/volunteer');     
        } else{
            alert("Wrong credential!, Please try again");
        }
    }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding:20}}>
        <View>
        <Image source={require('@/assets/images/syntraaid_logo.png')} style={{ resizeMode:'contain', alignSelf:'center' }}/>
        <Text style={styles.text}>Welcome back!</Text>
        <Text>Join SyntraAid to manage projects, volunteers, and impact</Text>
        <TextInput value={user2.email} onChangeText={(value) => setUser2({...user2, email: value})} placeholder="Email" style={styles.input} keyboardType='email-address'/>    
        <TextInput secureTextEntry value={user2.password} onChangeText={(value) => setUser2({...user2, password: value})} placeholder="Password" style={styles.input}/>
        <Text style={styles.textright}><Text style={styles.link} onPress={Forgotpass}>Forgot Password</Text></Text>
        </View>
        
        <View>
        <TouchableOpacity style={styles.box} onPress={handleLogin}>
        <Text style={styles.text2}>Log In </Text></TouchableOpacity>
        <Text style={styles.textcenter}>Don't have an account? <Text style={styles.link} onPress={Signup}>Sign up</Text></Text> 
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}