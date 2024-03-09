import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { screenWidth } from '../../utils/constants';
import { AppColors } from '../../theme/colors';
import { Add } from 'iconsax-react-native';

// gönderdiğimiz propu burada karşıladık. butona basılınca bu prop çalışşsın istedik. bu propta index.js ekranında bir arrow fonk'u tetikliyor.
const FloatActionButton = ( props ) => {
    // console.log(props)
    // {...props} yazarak TouchableOpacity'nin alabileceği tüm özellikleri bu şekilde gönderebiliriz.
    return (
        <TouchableOpacity {...props} style={styles.container}>
            <Text>
                <Add size="50" color={AppColors.WHITE}/>
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.PRIMARY,
        borderRadius: 1000,
        // buton bileşeni görünmüyordu. absolute verdik üste çıktı. 
        // screen'lerden myNotes'un safeAreaView'ına flex:1 vermediğimiz için istediğimiz gibi sayfanın en altına gitmiyordu. flex:1 dedik ki tüm sayfayı kaplasın. böylelikle sayfanın en altına gidebildi.
        position: "absolute",
        bottom: 20,
        right: 20,
        // kare olsun istedik o yüzden height'ına da screenWidth*0.2 verdik
        width: screenWidth*0.18,
        height: screenWidth*0.18
    },
});

export default FloatActionButton;
