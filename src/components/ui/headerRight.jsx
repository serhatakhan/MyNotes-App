import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { More2, Paperclip2, Share } from 'iconsax-react-native';
import { AppColors } from '../../theme/colors';

const HeaderRight = () => {
    return (
        <View style={styles.container}>
            <Paperclip2 size="24" color={AppColors.SECONDARY}/>
            <Share size="24" color={AppColors.SECONDARY}/>
            <More2 size="24" color={AppColors.SECONDARY}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        gap: 8
    },
});

export default HeaderRight;
