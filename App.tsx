import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function App(): React.JSX.Element {
    const [activeItems, setActiveItems] = useState([false, false, false, false]);

    const handlePress = (index: number) => {
        const updated = [...activeItems];
        updated[index] = !updated[index];
        setActiveItems(updated);
    };

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.text}>Футболка</Text>
                <TouchableOpacity
                    style={activeItems[0] ? styles.buttonActive : styles.button}
                    onPress={() => handlePress(0)}
                >
                    <Text style={styles.buttonText}>
                        {activeItems[0] ? 'В корзине' : 'Добавить в корзину'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Кофта</Text>
                <TouchableOpacity style={activeItems[1] ? styles.buttonActive : styles.button} onPress={() => handlePress(1)}>
                    <Text style={styles.buttonText}>
                        {activeItems[1] ? 'В корзине' : 'Добавить в корзину'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Штаны</Text>
                <TouchableOpacity style={activeItems[2] ? styles.buttonActive : styles.button} onPress={() => handlePress(2)}>
                    <Text style={styles.buttonText}>
                        {activeItems[2] ? 'В корзине' : 'Добавить в корзину'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Шорты</Text>
                <TouchableOpacity style={activeItems[3] ? styles.buttonActive : styles.button} onPress={() => handlePress(3)}>
                    <Text style={styles.buttonText}>
                        {activeItems[3] ? 'В корзине' : 'Добавить в корзину'}
                    </Text>
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
    buttonActive: {
        paddingTop: 10,
        backgroundColor: 'gray',
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

