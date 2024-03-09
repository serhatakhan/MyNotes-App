import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';

const StateExample = () => {
  const [count, setCount] = useState(0);

  const setCountStyle = (count) => {
    if (count >= 10) {
      return styles.countSuccess;
    } else if (count < 0) {
      return styles.countError;
    } else {
      return styles.count;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.countWrapper}>
          <Text style={setCountStyle(count)}>{count}</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <Button onPress={() => setCount(count + 1)} title="Artır" />
          <Button onPress={() => setCount(count - 1)} title="Azalt" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  countSuccess: {
    color: '#37d67a',
    fontWeight: 'bold',
    fontSize: 50,
  },
  countError: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50,
  },
  countWrapper: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
    padding: 10,
    flexDirection: 'row',
  },
});

export default StateExample;
