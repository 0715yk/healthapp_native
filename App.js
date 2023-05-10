import WebView from "react-native-webview";
import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import AboutPage from "./About";

const App = () => {
  const URI = "https://d1v4qnuyx40ush.cloudfront.net/";
  const [nowEndpoint, setNowEndpoint] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      {/* <WebView
        source={{ uri: URI }}
        onMessage={(event) => {
          setNowEndpoint(event.nativeEvent.data);
        }}
      /> */}
      {<AboutPage />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
  },
});
export default App;
