import { Image, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '@/styles/main';
import { useNavigation } from '@react-navigation/native';

export default function volunteer() {

    function MyButton() {

        const navigation = useNavigation();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ margin: 5, borderRadius: 10, }}>
                <View><Image source={require('@/assets/images/favicon.png')} /> </View>
                <View style={{ backgroundColor: '#fff', margin: 2 }}>
                    <Text style={{ fontSize: 20 }}>Welcome Back!</Text>
                    <Text style={{padding:5}}>Dunsin Ayo</Text>
                    <Text style={{padding:5}}>Volunteer</Text>
                </View>
                <View style={{ backgroundColor: '#054d1d', padding:80}}>
                    <Text style={{ fontSize: 20, color: '#fff', textAlign:'left' }}>Overview</Text>
                    
                    <TouchableOpacity style={styles.box3} onPress={''}>
                        <Text style={styles.text3}>Hours Logged</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.box3} onPress={''}>
                        <Text style={styles.text3}>Project Target</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.box3} onPress={''}>
                        <Text style={styles.text3}>Task Completed</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.box3} onPress={''}>
                        <Text style={styles.text3}>Project Joined</Text></TouchableOpacity>
                      
                </View>
                <View>
                    <Text style={styles.text4}>Recent Task</Text><Text style={styles.textright}><Text style={styles.link1} onPress={''}>View all</Text></Text>
                </View>
                <View style={styles.text5}>
                    <Image source={require('@/assets/images/favicon.png')}/> <Text>Clean Water Initiative</Text>
                </View>
                <View style={styles.text5}>
                    <Image source={require('@/assets/images/favicon.png')}/> <Text>Health Outreach</Text>
                </View>
                 

            
            </ScrollView>
        </SafeAreaView>
    );

}
