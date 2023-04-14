import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

const movies = [
    {
        id: 1,
        cover: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        title: "Joker",
    },
    {
        id: 2,
        cover: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Ad Astra",
    },
    {
        id: 3,
        cover: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
        title: "It Chapter Two",
    },
    {
        id: 4,
        cover: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
        title: "It Chapter Two",
    },
];

function Slider({ categoria }) {
    return (
        <>
            <Text style={styles.title}>{categoria.categoria}</Text>
            <FlatList
                style={styles.container}
                data={categoria.data}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.poster }} style={styles.image} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}

export default Slider;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        position: "relative",
        padding: 10,
    },
    image: {
        width: 150,
        height: 200,
        marginRight: 10,

        borderRadius: 3,
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        padding: 10,
    },
});
