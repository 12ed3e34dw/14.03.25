import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function App(): React.JSX.Element {




    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.text}>Футболка</Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText }>Добавить в корзину</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Кофта</Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={  styles.buttonText }>Добавить в корзину</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Штаны</Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={ styles.buttonText }>Добавить в корзину</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Шорты</Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={ styles.buttonText}>Добавить в корзину</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 10,
        backgroundColor: '#eee',
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 5,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
    button: {
        paddingTop: 10,
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    // Style Click button
buttonText_1: {
        backgroundColor: 'blue',
},


});

export default App;

