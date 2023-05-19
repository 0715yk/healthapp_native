import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function AboutPage() {
  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progressive-Overhead</Text>
      <View style={styles.introContainer}>
        <Image
          source={{
            uri: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MThfMjY0%2FMDAxNjU1NTE5NDQxMTI1.x6zhR1kJO5bfEUKtwudTUGAY8PwbV7Y2hvDSNeoGVGAg.iQCL8I0850yUv3g5PPnqcYw7TAjdxqexuepHaawz8CYg.JPEG.redgym114%2FKakaoTalk_20220618_112952856_01.jpg&type=sc960_832",
          }}
          style={styles.image}
        />
        <Text style={styles.introTitleText}>점진적 과부하란?</Text>
        <Text style={styles.introdescText}>
          '반복 횟수 x 무게'를 조금씩 늘려 근육이 점차적으로 강한 부하를 견디게
          하여 운동수행능력을 키우는 것.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=mtX_G4hFOkY")
          }
        >
          <Text style={styles.buttonText}>유튜브로 추가 설명 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",

    backgroundColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginTop: 90,
  },
  introContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 500,
    marginTop: 40,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  introTitleText: {
    width: 250,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  introdescText: {
    width: 250,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
