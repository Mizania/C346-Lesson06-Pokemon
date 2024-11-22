import React from 'react';
import {View, Text, Button, TextInput, Alert, StyleSheet} from "react-native";
import {useState} from "react";
import datasource from "./Data";

const Edit = ({navigation, route}) => {
    const [name, setName] = useState('');
    const [elementType, setElementType] = useState('');
    const [image, setImage] = useState('');
    return(
        <View style={styles.Container}>
            <Text style={styles.textStyle}>Edit Name</Text>
            <TextInput placeholder='Enter a Name'
                       value={name}
                       onChangeText={(name) => setName(name)}
                       style={[styles.textInputStyle,{borderWidth: 0}]}/>

            <Text style={styles.textStyle}>Edit Image Link</Text>
            <TextInput placeholder='Enter a Link'
                       value={image}
                       onChangeText={(image) => setImage(image)}
                       style={[styles.textInputStyle,{borderWidth: 0}]}/>

            <View style={{flexDirection: "row", justifyContent: "space-evenly", width: "100%"}}>
                <View style={{width: "45%"}}>
                    <Button
                        title="Save"
                        onPress={() => {
                            let indexnum = datasource.findIndex(
                                (section) =>
                                    section.elementType.toLowerCase() ===
                                    route.params.type.toLowerCase()
                            );
                            if (indexnum !== -1) {
                                datasource[indexnum].data[route.params.index].name = name;
                                datasource[indexnum].data[route.params.index].imageRef = image;
                                navigation.navigate("Home");
                            } else {
                                alert("Invalid type provided.");
                            }
                        }}
                    />
                </View>
                <View style={{width: "45%"}}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            let indexnum = datasource.findIndex(
                                (section) =>
                                    section.elementType.toLowerCase() ===
                                    route.params.type.toLowerCase()
                            );
                            if (indexnum !== -1) {
                                Alert.alert("Are you sure?", "", [
                                    {
                                        text: "Yes",
                                        onPress: () => {
                                            // Remove the item from the corresponding section
                                            datasource[indexnum].data.splice(route.params.index, 1);

                                            // Navigate back to the Home screen
                                            navigation.navigate("Home");
                                        },
                                    },
                                    {text: "No"},
                                ]);
                            } else {
                                alert("Invalid type provided.");
                            }
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonStyle: {
        marginTop: 'auto',
        marginBottom: 20,
        alignSelf: 'center',
        width: '40%',
    },
    textInputStyle: {
        borderWidth: 1,
        width: '80%', // Adjust the width of the input field
        marginBottom: 20,
        paddingHorizontal: 10, // Adjust padding for better aesthetics
    },
});

export default Edit;
