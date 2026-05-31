import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useContext, useState } from "react"; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {styles} from '@/styles/main';
import { MyContext } from '@/context/AuthContext'; // Path to your AuthContext file


export default function Signup() {
   
  function MyButton() {
  const navigation = useNavigation();
  };

  const Signin = () => {navigation.navigate('/(tabs)/signin')};
  
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Consume signup function from AuthContext
  const {signUp} = useContext(MyContext);
  
  
  

  const handleSignUp = async () => {
    // Validate input fields
    if ( !name || !email || !password || !confirmPassword || !accountType) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setIsLoading(true);

    try {
      // Trigger context signup function
      await signUp(name, email, password, confirmPassword, accountType);
      Alert.alert('Success', 'Account created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Sign Up Failed - Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
        <Image source={require('@/assets/images/syntraaid_logo.png')} style={{ alignSelf:'center'}}/>
        <Text style={styles.text}>Let's Get Started</Text>
        <Text>Join SyntraAid to manage projects, volunteera, and impact</Text>
        </View>
        <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName}
        keyboardType="phone-pad" autoCapitalize="none" autoCorrect={false}/>
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}
        keyboardType="email-address" autoCapitalize="none" autoCorrect={false}/>
        <TextInput secureTextEntry value={password} onChangeText={setPassword} autoCapitalize="none" placeholder="Password" style={styles.input}/>
        <TextInput secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} autoCapitalize="none" placeholder="Confirm Password" style={styles.input}/>
        <TextInput placeholder="Account Type" style={styles.input} value={accountType} onChangeText={setAccountType} keyboardType="phone-pad" autoCapitalize="none" autoCorrect={false}/>
        <View>
        
        <Text style={styles.textcenter}>By continuing, you agree to</Text>
        <Text style={styles.textcenter}><Text style={styles.link}> Terms of use </Text> and <Text style={styles.link}> Conditions.</Text></Text>
        </View>
        <View>
        <TouchableOpacity style={styles.box} onPress={handleSignUp}>
        <Text style={styles.text2}>Sign Up </Text></TouchableOpacity>
        </View>
        
        <View>
        <Text style={styles.textcenter}>Already have an account?<Text style={styles.link} onPress={Signin}> Sign in</Text></Text> 
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}