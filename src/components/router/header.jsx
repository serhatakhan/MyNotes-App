import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenHeight} from '../../utils/constants';
import {MYNOTES} from '../../utils/routes';
import {AppColors} from '../../theme/colors';
import {HambergerMenu, More2, SearchNormal1} from 'iconsax-react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
        {/* değişkenlerimizi de globale yazdık{mesela MYNOTES}. oradan import ettik */}
        <Text style={{fontSize: 36, color: AppColors.SECONDARY}}>{MYNOTES}</Text>
      </View>

      {/* altındaki view elemanları yan yana gelsin diye flexDirection: row */}
      <View style={{paddingVertical: 20, flexDirection: 'row'}}>
        <View style={{padding: 5, flex: 1, justifyContent: "center"}}>
          <HambergerMenu size="26" color={AppColors.SECONDARY} />
        </View>

        <View style={{padding: 5, flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 12 }}>
            <SearchNormal1 size="26" color={AppColors.SECONDARY}/>
            <More2 size="26" color={AppColors.SECONDARY}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,
    padding: 10
  },
});

export default Header;
