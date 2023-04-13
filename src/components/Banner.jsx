import { StyleSheet, Text, View, Image } from "react-native";

import ImageBanner from "../../assets/Banner.jpeg";
import { LinearGradient } from "expo-linear-gradient";

function Banner() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://legadodadc.com.br/wp-content/uploads/2021/11/FD1yq6PWUAYeJUv.jpg",
                }}
                style={styles.image}
            />
            <Text style={{ color: "white" }}>Banner</Text>

            <LinearGradient
                // Background Linear Gradient
                colors={["transparent", "rgb(0, 0, 0)"]}
                style={styles.gradient}
            />
        </View>
    );
}

export default Banner;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },

    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        position: "absolute",
    },

    gradient: {
        height: "50%",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
});
