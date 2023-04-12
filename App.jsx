import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Header from "./src/components/Header";
import Banner from "./src/components/Banner";

function App() {
    return (
        <View style={styles.container}>
            <Header />
            <Banner />
        </View>
    );
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});
