import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, Image, Button } from 'react-native';
import datasource from "./Data";
import React from 'react';

export default function Home({navigation}) {
    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={() => navigation.navigate("Edit", {index: index, type: section.elementType})}
            >
                <View>
                    <Text style={styles.textStyle}>{item.name}</Text>
                </View>
                <View>
                    <Image source={{ uri: item.imageRef }} style={styles.imageStyle} />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View>
                <Button title="Add Pokemon" onPress={() => {navigation.navigate("Add")}}/>
            </View>
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{elementType, bgcolor, color}})=>(
                             <Text style={[styles.headerText, {backgroundColor: bgcolor, color: color}]}>{elementType}</Text>
                         )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F4F4F9',
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    textStyle: {
        fontSize: 18,
        color: "#333",
        fontWeight: "500",
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 5,
        borderRadius: 8,
        marginHorizontal: 10,
        textAlign: 'center'
    },
    imageStyle: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    addButton: {
        margin: 15,
        borderRadius: 8,
        backgroundColor: "#4CAF50",
        color: "white",
    },
});
