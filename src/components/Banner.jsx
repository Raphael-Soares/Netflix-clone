import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, URL } from "../utils/Keys";
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
                        uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
                    }}
                    style={styles.image}
                />
            )}
        </View>
    );
}

export default Banner;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});
