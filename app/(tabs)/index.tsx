import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import homescreenImage from '../assets/images/homescreenimage.png'; // Import the homescreen image

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

      {/* 홈화면 미리보기 */}

      <Image
        source={homescreenImage}
        style={styles.previewImage}
        resizeMode="contain"
      />


      {/* 설명 */}
      <Text style={styles.description}>
        가용시간을 입력하면, 공부 목표에 맞는 분량을 자동으로 분배해 드립니다.
      </Text>

      {/* 네비게이션 바 */}
      <View style={styles.navBar}>
        {/* To-do list 버튼 */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('TodoList')}
        >
          <Text style={styles.navButtonText}>☑</Text>
        </TouchableOpacity>

        {/* 통계 리포트 버튼 */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Statistics')}
        >
          <Text style={styles.navButtonText}>📊</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#555',
  },
  previewImage: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#555',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default SplashScreen;
