import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Banner from "./src/components/Banner";
import NavigationHeader from "./src/components/NavigationHeader";
import Slider from "./src/components/Slider";

function App() {
    return (
        <View style={styles.container}>
            <NavigationHeader />
            <FlatList
                data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }, { key: "e" }]}
                renderItem={({ item }) => <Slider />}
                ListHeaderComponent={<Banner />}
                ListHeaderComponentStyle={{ height: 400, marginBottom: 10 }}
                style={{ flex: 1 }}
            />
        </View>
    );
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        position: "relative",
    },
});
