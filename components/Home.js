import { React } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";

export default function Home() {
    const [nome, setNome] = useState('');
    const [imageSource, setImageSource] = useState('');
    const db = [
        {
            id: 1,
            title: 'CARRO 01',
            dec: 'decrição com mais de 100 letras'
        },
        {
            id: 2,
            title: 'CARRO 02',
            dec: 'decrição com mais de 100 letras'
        },
        {
            id: 3,
            title: 'CARRO 03',
            dec: 'decrição com mais de 100 letras'
        },
        {
            id: 4,
            title: 'CARRO 4',
            dec: 'decrição com mais de 100 letras'
        },
        {
            id: 5,
            title: 'CARRO 5',
            dec: 'decrição com mais de 100 letras'
        },
        {
            id: 6,
            title: 'CARRO 6',
            img: 'caminho do carro',
            dec: 'decrição com mais de 100 letras',
        },

        {
            id: 7,
            title: 'CARRO 7',
            img: 'caminho do carro',
            dec: 'decrição com mais de 100 letras',
        },
        {
            id: 8,
            title: 'CARRO 8',
            img: 'caminho do carro',
            dec: 'decrição com mais de 100 letras',
        },
        {
            id: 9,
            title: 'CARRO 9',
            img: 'caminho do carro',
            dec: 'decrição com mais de 100 letras',
        },

        {
            id: 10,
            title: 'CARRO 10',
            img: 'caminho do carro',
            dec: 'decrição com mais de 100 letras',
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={db}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                borderColor: '#000',
                                borderWidth: 1,
                                width: '100%',
                                height: 140,
                                backgroundColor: '#ff00ff',
                                margin: 2,
                            }}>
                            <Text>Title : {item.title}</Text>
                            <Text> ID: {item.id}</Text>
                            <Image
                                source={item.img}
                                style={{
                                    width: 150,
                                    height: 70,
                                    borderRadius: 5,
                                }}
                            />
                            <Button title="VER" />
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#Vermelho',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
