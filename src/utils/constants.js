import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export {screenWidth, screenHeight}

//** "screen" olduğu zaman, kullanılabilir tüm alanı ifade eder
//** "window" olduğu zaman, orta alan ifade ediliyor. yani örneğin bir cihazda, 
// bir statü çubuğu veya diğer sistem çubukları varsa, bu çubuklar dahil edilmeyecektir.
//** GENELDE WINDOW OLARAK KULLANIYORUZ