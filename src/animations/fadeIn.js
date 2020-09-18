// Animations/FadeIn.js

import React, {useEffect, useState} from 'react';
import { Animated, Dimensions } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
const FadeIn = ({children}) => {

    const positionLeft = new Animated.Value(Dimensions.get('window').width);

    useEffect(() => {

        Animated.spring(
        
        positionLeft,
        {
            useNativeDriver: false,
            toValue: 0
        }

        ).start()

    })


    return (
        <Animated.View
            style={{   
tranform: 
                    [{translateX: 50}] 
            }}
        >
            {children}
        </Animated.View>
    )
  
}

export default FadeIn