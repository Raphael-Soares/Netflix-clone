import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, URL } from "../utils/Keys";

import { LinearGradient } from "expo-linear-gradient";
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/trending/all/week?api_key=${API_KEY}`).then((res) => {
            setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
        });
    }, []);
    return (
        <View style={styles.container}>
            {movie && (
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
                    }}
                    style={styles.image}
                />
            )}
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
        height: "60%",
        width: "100%",
        position: "relative",
    },

    image: {
        height: "100%",
        width: "100%",
        position: "absolute",
        resizeMode: "cover",
    },

    gradient: {
        height: "50%",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
});
