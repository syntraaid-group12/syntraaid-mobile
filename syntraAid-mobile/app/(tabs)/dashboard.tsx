import { Image, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '@/styles/main';
import { useNavigation } from '@react-navigation/native';

export default function dashboard() {

  function MyButton() {

    const navigation = useNavigation();
  };

  const Admin = () => { navigation.navigate('/(tabs)/admindashboard') };
  const Coordinator = () => { navigation.navigate('/(tabs)/coordinatordashboard') };
  const Volunteer = () => { navigation.navigate('/(tabs)/volunteer') };
  const Donor = () => { navigation.navigate('/(tabs)/donordashboard') };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ margin: 5, borderRadius: 10, }}>
        <View><Image source={require('@/assets/images/favicon.png')} /> </View>
        <View style={{ backgroundColor: '#fff', margin: 2 }}>
          <Text style={{ fontSize: 20 }}>Welcome Back!</Text>
          <Text style={{ padding: 5 }}>User</Text>
          <Text style={{ padding: 5 }}>Admin</Text>
        </View>
        <View style={{ backgroundColor: '#054d1d', padding: 80 }}>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'left' }}>Overview</Text>

          <TouchableOpacity style={styles.box3} onPress={Admin}>
            <Text style={styles.text3}>Admin</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box3} onPress={Coordinator}>
            <Text style={styles.text3}>Coordinator</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box3} onPress={Volunteer}>
            <Text style={styles.text3}>Volunteer</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box3} onPress={Donor}>
            <Text style={styles.text3}>Donor</Text></TouchableOpacity>
        </View>

        <View>
          <Text style={styles.text4}>Recent Activity</Text><Text style={styles.textright}><Text style={styles.link1} onPress={''}>View all</Text></Text>
        </View>
        <View style={styles.text5}>
          <Image source={require('@/assets/images/favicon.png')} /> <Text>New Volunteer Registered</Text>
        </View>
        <View style={styles.text5}>
          <Image source={require('@/assets/images/favicon.png')} /> <Text>New Volunteer Registered</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}
