import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Header() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="netflix" size={36} color="red" />
            <View style={styles.nav}>
                <Feather name="cast" size={24} color="white" />
                <AntDesign name="search1" size={24} color="white" />
                <AntDesign name="user" size={24} color="white" />
            </View>
        </View>
    );
}

export default Header;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
    },
});
