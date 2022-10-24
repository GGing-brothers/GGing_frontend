import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

const Main = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.top_box}>
        <Text style={styles.logo_word}>GWH</Text>
        <Text style={styles.text}>GGing Workout Helper</Text>
      </View>
      <View style={styles.box}>
        <Button 
          onPress={() =>{
            navigation.navigate('Login')
          }}
          style={styles.login}
          title='로그인'
        />
        <Button 
          onPress={() =>{
            navigation.navigate('Signup')
          }}
          style={styles.signup}
          title='회원가입'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
  },
  top_box: {
    width: "100%",
    height: "70%",
    // backgroundColor: "red",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_word: {
    fontSize: "40px",
    fontWeight: "600",
  },
  text: {
    fontSize: "20px",
    marginTop: "10%"
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  signup: {
    marginTop: "10%"
  }
})

export default withNavigation(Main)