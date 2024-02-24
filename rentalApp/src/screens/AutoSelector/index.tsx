
import React from 'react';

import { CategorySelector } from '../../components/CategorySelector';
import { ColoredButton } from '../../components/ColoredButton';
import { NavBottom } from '../../components/NavBottom';
import color from '../../styles/color';
import { Carousel } from '../../components/Carousel';
import { Image, ScrollView,View } from 'react-native';
import { styles } from './styles';


export function AutoSelector() {
  const img = require('../../../assets/banner.png')
  function handleClick(clicked) {
   alert('clicked:' + clicked)
  }
  return (
    <>
       <Image source={img} style={{width:'100%'}} alt='banner de entrada' />
      <View style={styles.container}>
     
        <View>
          <ColoredButton title='Ganhe dinheiro com seu veículo' color={color.green} />
        </View>
        <CategorySelector onChange={handleClick}  />
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Carousel  />
          </ScrollView>
          </View>
      </View>
      <NavBottom />
    </>
  )
}