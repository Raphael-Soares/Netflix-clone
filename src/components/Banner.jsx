import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import BannerImage from "../../assets/Banner.jpeg";

const Tags = [
    {
        id: 1,
        name: "Action",
    },
    {
        id: 2,
        name: "Adventure",
    },
    {
        id: 3,
        name: "Comedy",
    },
    {
        id: 4,
        name: "Crime",
    },
    {
        id: 5,
        name: "Drama",
    },
];

function Banner() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: BannerImage }} style={styles.image} />
            <View style={styles.content}>
                <FlatList
                    data={Tags}
                    renderItem={({ item }) => <Text style={styles.tag}>{item.name}</Text>}
                    ItemSeparatorComponent={() => <Text> | </Text>}
                    horizontal
                />
            </View>
            <LinearGradient colors={["transparent", "rgb(0, 0, 0)"]} style={styles.gradient} />
        </View>
    );
}
2;

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
    content: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,

        zIndex: 1,
    },

    gradient: {
        height: "50%",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    tag: {
        color: "white",
        fontSize: 16,
    },
});
