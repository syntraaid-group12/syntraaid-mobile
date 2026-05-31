import { ActivityIndicator, Image, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';

import {styles} from '@/styles/main';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Trigger the automatic screen switch
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('/(tabs)/content/welcome'); 
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  

  if (isLoading) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding:130}}>
        <View>
          <Image source={require('@/assets/images/syntraaid_logo.png')} style={{alignSelf:'center'}} />  
          <ActivityIndicator size="large" color="#3f3d3d"  style={{ paddingBottom:10, alignItems:'center'}}/>
        </View> 
              
      </ScrollView>
    </SafeAreaView> 
  )};
  
}