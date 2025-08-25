import { View,TextInput, Text, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, Pressable } from 'react-native';
import { useGetMeetingsQuery } from '../redux/ftl_api';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
 import DateTimePicker from '@react-native-community/datetimepicker';
 
 
type RootStackParamList = { 
  Form: undefined;
};

const ScheduleScreen = () => { 
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { data: meetings = [], isLoading, isError } = useGetMeetingsQuery();
  const [ruangMeeting, setRuangMeeting] = useState('');
  const [tanggalMeeting, setTanggalMeeting] = useState('');
  const [showPicker, setShowPicker] = useState(false);
 

      const toggleDatePicker = () => {
        setShowPicker(!showPicker);
      };
  return (
    <SafeAreaView style={styles.container}> 

      <View style={styles.header}>
        <TextInput
                style={styles.input}
                placeholder="Ruang Meeting"
                value={ruangMeeting}
                onChangeText={setRuangMeeting}
                autoCapitalize="none" 
              />

              <Pressable onPress={toggleDatePicker}>
        <TextInput
                style={styles.input}
                placeholder="Tanggal Meeting"
                value={tanggalMeeting}
                onChangeText={setTanggalMeeting}
                autoCapitalize="none" 
              />

              </Pressable>

               {showPicker && (
            <DateTimePicker
              value={tanggalMeeting ? new Date(tanggalMeeting) : new Date()}
              mode="date" 
              display="default"  
            //   onChange={onChange}
            />
          )}
        
      </View>

      
 
      <Text style={styles.scheduleTitle}>Jadwal Ruang Meeting Hari Ini</Text>
      {meetings?.map((meeting, index) => (
        <View key={index} style={styles.meetingCard}>
          <Text style={styles.meetingTime}>{meeting.waktu_mulai} - {meeting.waktu_selesai}</Text>
          <Text style={styles.meetingRoom}>{meeting.nama_ruangan}</Text>
        </View>
      ))}
 
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: { 
    paddingVertical: 20,
    height: 150,
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
  },
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  profile: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#CFCFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
   input: {
    height: 40,
    color: '#000',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    color: '#555',
  },
  scheduleTitle: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 16,
  },
  meetingCard: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meetingTime: {
    fontWeight: 'bold',
  },
  meetingRoom: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#F0F0F0',
    marginTop: 'auto',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontWeight: 'bold',
  },
});

export default ScheduleScreen;
