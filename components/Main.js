import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

const Main = ({navigation}) => {
  return (
    <View style={styles.Container}>

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
  },
})

export default withNavigation(Main)