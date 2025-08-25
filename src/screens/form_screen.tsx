import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
 
 
type RootStackParamList = {
  Login: undefined;
  Test: undefined;
};

function FormScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [divisi, setDivisi] = useState('');
  const [ruangMeeting, setRuangMeeting] = useState('');
  const [tanggalMeeting, setTanggalMeeting] = useState<Date>(new Date());
  const [waktuMulaiMeeting, setWaktuMulaiMeeting] = useState('');
  const [waktuSelesaiMeeting, setWaktuSelesaiMeeting] = useState('');
  const [jumlahPeserta, setJumlahPeserta] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Ruang Meeting</Text>

      <TextInput
        style={styles.input}
        placeholder="Divisi"
        value={divisi}
        onChangeText={setDivisi}
        autoCapitalize="none" 
      />

      <TextInput
        style={styles.input}
        placeholder="Ruang Meeting"
        value={ruangMeeting}
        onChangeText={setRuangMeeting} 
      />

      <TextInput
        style={styles.dateInput}
        placeholder="Tanggal Meeting"
        value={tanggalMeeting.toLocaleDateString()}
        editable={false}
        onPressIn={() => setOpen(true)}
      />

      <TextInput
        style={styles.dateInput}
        placeholder="Waktu Mulai Meeting"
        value={waktuMulaiMeeting}
        onChangeText={setWaktuMulaiMeeting} 
      />

      <TextInput
        style={styles.dateInput}
        placeholder="Waktu Selesai Meeting"
        value={waktuSelesaiMeeting}
        onChangeText={setWaktuSelesaiMeeting} 
      />

      <TextInput
        style={styles.dateInput}
        placeholder="Jumlah Peserta"
        value={jumlahPeserta}
        onChangeText={setJumlahPeserta} 
      />
    

      {/* {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Submit" onPress={handleSubmit} />        
      )} */}

              <Button title="Submit" onPress={() => navigation.navigate('Test')} />

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
  dateInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default FormScreen;
