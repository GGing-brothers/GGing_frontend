import React from 'react'
import { View, Text, Image, StyleSheet, Button, ImageBackgroundComponent, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Calendar } from 'react-native-calendars';

const Home = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Monthly_title}>
        <Text>이달의 목표</Text>
        <Text>매일 운동하기</Text>
      </View>
      <Calendar />
      <View style={styles.Daily_title}>
        <Text>오늘</Text>
        <View>
          <Text>팔굽혀펴기</Text>
          <Text>0kg/ 15 X 4</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
  },
})

export default withNavigation(Home)