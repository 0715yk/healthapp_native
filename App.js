import WebView from "react-native-webview";
import { SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <WebView source={{ uri: "https://d1v4qnuyx40ush.cloudfront.net/" }} />
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
