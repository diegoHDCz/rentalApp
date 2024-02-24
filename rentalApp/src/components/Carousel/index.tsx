import React, { useRef, useState } from 'react';
import { Animated, FlatList, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import slides from '../../../slides';
import { CarDetailItem } from '../../components/CarDetailItem';
import { Paginator } from '../../components/Paginator';
import { styles } from './styles';

interface Slide {
  id: string;
  img: string;
}

interface ICarouselProps {
  carName?:string;
  ratingStar?: number;
  modelYear?: number;
  city?: string;
  state?: string;
  kmUsage?: number;
  available?: boolean;
  slides?: Slide[];

}

export  function Carousel(data:ICarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [widthBar, setWidthBar] = useState(0)
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current
  const onLayout = (event: { nativeEvent: { layout: { x: any; y: any; height: number; width: number; }; }; }) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setWidthBar(width)
  }

  const slidesRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
    <View style={styles.carousel}>
      <FlatList data={slides}
        renderItem={({ item }) => <CarDetailItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </View>
    <View style={styles.descriptionRow}>
      <Text style={styles.header}>Tiguan 2.0 TSI</Text>
      <Icon name='star' size={24}><Text style={styles.header}>3.0</Text></Icon>
    </View>
    <View style={styles.descriptionRow}>
      <Text style={styles.subtitle}>Ano 2019</Text>
      <Text style={styles.subtitle}>Recife - PE</Text>
    </View>
    <View style={styles.descriptionRow}>
      <Text style={styles.subtitle}>34.342 Km</Text>
      <Text style={styles.subtitle}>1 - 6 de setembro</Text>
    </View>
    </ScrollView>
  )
}