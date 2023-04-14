import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
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
];

function Banner() {
    const renderTag = ({ item }) => (
        <View style={styles.tagContainer}>
            <Text style={styles.tag}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Image source={{ uri: BannerImage }} style={styles.image} />
            <LinearGradient colors={["transparent", "rgb(0, 0, 0)"]} style={styles.gradient} />
            <View style={styles.content}>
                <FlatList
                    data={Tags}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderTag}
                    horizontal
                    ItemSeparatorComponent={() => (
                        <Entypo name="dot-single" size={24} color="gray" />
                    )}
                    contentContainerStyle={styles.tagsContainer}
                    style={styles.tagsList}
                />
            </View>
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
    gradient: {
        height: "50%",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    content: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 1,
    },
    tagsContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },
    tagsList: {
        width: "100%",
    },
    tagContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    tag: {
        color: "white",
        fontSize: 14,
        marginRight: 5,
    },
});
