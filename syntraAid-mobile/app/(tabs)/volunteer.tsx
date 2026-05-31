import { Image, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {styles} from '@/styles/main';
import { useNavigation } from '@react-navigation/native';

export default function volunteer() {

  function MyButton() {

   const navigation = useNavigation();
    };
  
    const volunteer= ()=> {navigation.navigate('')};

    return(
      <SafeAreaView style={styles.container}>
      <ScrollView style={{margin:5, borderRadius:10, }}>
        <View><Image source={require('@/assets/images/favicon.png')}/> </View>
      <View  style={{backgroundColor:'#fff', margin:2 }}>
        <Text style={{fontSize:20}}>Welcome Back!</Text>
        <Text>User</Text>
      </View>  
      <View style={{backgroundColor:'#054d1d', padding:120 }}>
        <Text style={{fontSize:20, color:'#fff'}}>Overview</Text>
        <TouchableOpacity style={styles.box3} onPress={''}>
        <Text style={styles.text3}>Admin</Text></TouchableOpacity>
        <TouchableOpacity style={styles.box3} onPress={''}>
        <Text style={styles.text3}>Coordinator</Text></TouchableOpacity>
        <TouchableOpacity style={styles.box3} onPress={''}>
        <Text style={styles.text3}>Volunteer</Text></TouchableOpacity>
        <TouchableOpacity style={styles.box3} onPress={''}>
        <Text style={styles.text3}>Donor</Text></TouchableOpacity>
      </View>  
      </ScrollView>
      </SafeAreaView>
    );
  
}
