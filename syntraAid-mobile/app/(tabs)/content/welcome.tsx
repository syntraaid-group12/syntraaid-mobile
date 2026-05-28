import { Image, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {styles} from '@/styles/main';
import { useNavigation } from '@react-navigation/native';

export default function DashBoard() {

  function MyButton() {

   const navigation = useNavigation();
    };
  
    const Signup= ()=> {navigation.navigate('/(tabs)/content/signup')};
    const Signin = () => {navigation.navigate('/(tabs)/signin')};

    return(
      <SafeAreaView style={styles.container}>
      <ScrollView style={{margin:5, borderRadius:10, }}>
        <View><Image source={require('@/assets/images/hands.jpg')}/> </View>
      <View  style={{backgroundColor:'#fff', margin:2 }}>
        <Text style={{fontSize:30, textAlign:'center', padding:10}}>Connect with Purpose</Text>
        <Text style={{fontSize:15,textAlign:'center', padding:10}}>Find causes that matter and start making a real difference today.</Text>
      </View>  
      <View>
        <TouchableOpacity style={styles.box} onPress={Signup}>
        <Text style={styles.text2}>Get Started</Text></TouchableOpacity>
        <Text style={styles.link} onPress={Signin}> log in</Text> 
        <Text style={{fontSize:12, textAlign:'center', padding:10}}>Terms of Service</Text>
        </View>  
       </ScrollView>
    </SafeAreaView>
    );
  
}
