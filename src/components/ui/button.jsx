import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppColors } from '../../theme/colors';

const Button = (props) => {
    // gelen props'u alıp title değişkenine obje dağıtarak atadık
    const {title} = props

    return (
        <TouchableOpacity {...props} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.PRIMARY,
        padding: 10,
        paddingVertical: 13,
        borderRadius: 6,
        marginHorizontal: 15,
    },
    title:{
        color: "#fff",
        fontSize: 16,
        fontWeight: 600
    }
});

export default Button;
