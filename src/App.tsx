import React, { useState } from 'react'
import type {PropsWithChildren} from 'react';
import { StyleSheet, Text, View, ImageSourcePropType, Image, Pressable } from 'react-native';

import DiceOne from '../assets/img1.jpg'
import DiceTwo from '../assets/img2.jpg'
import DiceThree from '../assets/img3.jpg'
import DiceFour from '../assets/img4.jpg'

type DiceProps= PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element =>{
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}
export default function App():JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () =>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2: 
        setDiceImage(DiceTwo)
        break;
      case 3: 
        setDiceImage(DiceThree)
        break;
      case 4: 
        setDiceImage(DiceFour)
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text
        style={styles.rollDiceButton}
        >Roll the dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  diceImage: {
    height: 200,
    width: 300,
    borderRadius: 5
  },
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#FFFFFF',
    gap: 20
  },
  rollDiceButton:{
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'blue',

  }
}) 