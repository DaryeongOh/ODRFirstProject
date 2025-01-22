import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import StopwatchScreen from './StopwatchScreen'; // Adjust the path if needed


interface SplashScreenProps {
  navigation: any; // You can replace 'any' with a more specific type if available
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 인사 */}
      <Text style={styles.headerText}>
        Goal-illa에 첫 방문이신가요? 반가워요!
      </Text>

      {/* 소개 */}
      <Text style={styles.subText}>
        Goal-illa는 서울대 재학생으로 구성된 개발팀이 만든 스터디 플래너 앱입니다.
      </Text>

      {/* 이미지 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    marginVertical: 10,
  },
  previewImage: {
    width: 200,
    height: 200,
  },
});

export default StopwatchScreen;