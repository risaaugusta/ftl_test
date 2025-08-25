import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const meetings = [
  { time: '08:00 - 09:00', room: 'Squats Room' },
  { time: '10:00 - 12:00', room: 'Lunges Room' },
];

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>HOME/RUANG MEETING</Text>

      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Y</Text>
        </View>
        <View>
          <Text style={styles.name}>Yosi</Text>
          <Text style={styles.role}>Web Developer</Text>
        </View>
      </View>
 
      <Text style={styles.scheduleTitle}>Jadwal Ruang Meeting Hari Ini</Text>
      {meetings.map((meeting, index) => (
        <View key={index} style={styles.meetingCard}>
          <Text style={styles.meetingTime}>{meeting.time}</Text>
          <Text style={styles.meetingRoom}>{meeting.room}</Text>
        </View>
      ))}
 
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Jadwal Ruang Meeting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Booking Ruang Meeting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    color: '#A0A0A0',
    fontWeight: 'bold',
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
  avatarText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
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

export default ProfileScreen;
