import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import BannerImage from "../../assets/Banner.jpeg";

function Banner() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: BannerImage }} style={styles.image} />
            {/* <Text style={styles.text}>Banner</Text> */}
            <LinearGradient colors={["transparent", "rgb(0, 0, 0)"]} style={styles.gradient} />
        </View>
    );
}

export default Banner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        marginBottom: 10,
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        position: "absolute",
    },
    text: {
        color: "white",
        position: "absolute",
        top: 20,
        left: 20,
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        zIndex: 1,
    },
    gradient: {
        height: "50%",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
});
