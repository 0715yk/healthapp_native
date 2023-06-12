import WebView from "react-native-webview";
import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import AboutPage from "./About";

const App = () => {
  const URI = "https://d1v4qnuyx40ush.cloudfront.net/";

  const [nowEndpoint, setNowEndpoint] = useState(false);

  return (
    <>
      <SafeAreaView style={nowEndpoint ? styles.rootAbout : styles.root}>
        <WebView
          source={{ uri: URI }}
          onMessage={(event) => {
            const { data } = JSON.parse(event.nativeEvent.data);
            if (data === "about") {
              setNowEndpoint(true);
            } else {
              setNowEndpoint(false);
            }
          }}
        />
        {nowEndpoint && <AboutPage />}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
  },
  rootAbout: {
    flex: 1,
  },
});
export default App;
