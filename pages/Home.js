import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'

function Home() {
    const [message, setMessage] = useState(false);

    const changeMessage = () => {
        if (message == false)
            setMessage("Hello you have clicked");
        else
            setMessage(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.messageText}>{message}</Text>
            <TouchableOpacity onPress={changeMessage} style={styles.button}>
                <Text style={styles.buttonText}>Click Me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
    },
    messageText: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Home;