import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NavigationHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY === 0;
            setIsScrolled(!isTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: isScrolled ? "#00000050" : "transparent",
                },
            ]}
        >
            <MaterialCommunityIcons name="netflix" size={48} color="red" />
            <View style={styles.nav}>
                <Feather name="cast" size={24} color="white" />
                <AntDesign name="search1" size={24} color="white" />
                <AntDesign name="user" size={24} color="white" />
            </View>
        </View>
    );
}

export default NavigationHeader;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: "100%",

        backgroundColor: "transparent",
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "35%",
        paddingVertical: 10,
    },
});
