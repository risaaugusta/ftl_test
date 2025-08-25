import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useLoginMutation } from '../redux/auth_api';

// import ProfileScreen from './profile_screen';
 
type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
};

function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
   const [login, { isLoading }] = useLoginMutation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

     <Button
      title={isLoading ? 'Loading...' : 'Sign in'}
      disabled={isLoading}
      onPress={async () => {
        if (!email || !password) {
          Alert.alert('Error', 'Email dan Password harus diisi');
          return;
        }

        try {
          const result = await login({ email, password }).unwrap();  
          
          Alert.alert('Login Sukses', 'Selamat datang!');
          navigation.navigate('Profile');
        } catch (error: any) {
          Alert.alert('Login Gagal', error?.data?.message || 'Cek email dan password');
        }
      }}
    />

      {/* <Button
  title={loading ? 'Loading...' : 'Sign in'}
  disabled={loading}
  onPress={async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan Password harus diisi');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://uat-api.ftlgym.com/api/v1/test/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        Alert.alert('Login Sukses', `Selamat datang!`);
        navigation.navigate('Profile');  
      } else {
        Alert.alert('Login Gagal', data.message || 'Cek email dan password');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Terjadi kesalahan jaringan');
    } finally {
      setLoading(false);
    }
  }}
/> */}


              {/* <Button title="Sign in" onPress={() => navigation.navigate('Profile')} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default LoginScreen;
