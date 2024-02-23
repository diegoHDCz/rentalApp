import { HStack, Image, ScrollView, Stack, Text, VStack } from 'native-base';
import React from 'react';

import { CategorySelector } from '../../components/CategorySelector';
import { ColoredButton } from '../../components/ColoredButton';
import { NavBottom } from '../../components/NavBottom';
import color from '../../styles/color';
import { CarDetailItem } from '../../components/CarDetailItem';

export function AutoSelector() {
  const img = require('../../../assets/banner.png')
  function handleClick(clicked) {
    console.log('clicked:' + clicked)
  }
  return (
    <>
      <VStack flex={1} alignItems={'center'} justifyContent={'space-between'}>
        <Image source={img} w={'100%'} mb={4} alt='banner de entrada' />
        <HStack mx={4} mb={4}>
          <ColoredButton title='Ganhe dinheiro com seu veículo' color={color.green} />
        </HStack>
        <CategorySelector onChange={handleClick}  />

          <ScrollView showsVerticalScrollIndicator={false}>
              <CarDetailItem item={} key={}/>
          </ScrollView>

      </VStack>
      <NavBottom />
    </>
  )
}