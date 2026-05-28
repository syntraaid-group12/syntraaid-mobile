import { Image, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {styles} from '@/styles/main';
import { useNavigation } from '@react-navigation/native';

export default function DashBoard() {

  function MyButton() {

   const navigation = useNavigation();
    };
  
    const Signup= ()=> {navigation.navigate('/(tabs)/content/signup')};

    return(
      <SafeAreaView style={styles.container}>
      <ScrollView style={{margin:5, borderRadius:10, }}>
        <View><Image source={require('@/assets/images/hands.jpg')}/> </View>
     
      <View style={{backgroundColor:'#fff', margin:20, borderRadius:10, padding:25, alignItems:'center'}}>

      <Text style={{fontSize:30}}>Connect with Purpose</Text>
      <Text style={{fontSize:13}}>Find causes that matter and start making a real difference today.</Text>
      </View>  
      <View>
        <TouchableOpacity style={styles.box} onPress={Signup}>
        <Text style={styles.text2}>Get Started</Text></TouchableOpacity>
        </View>  
       </ScrollView>
    </SafeAreaView>
    );
  
}
