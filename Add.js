import React from 'react';
import {Text, View, Button, TextInput, StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import {useState} from "react";
import datasource from "./Data";

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [elementType, setElementType] = useState('');
    const [image, setImage] = useState('');
    return (
        <View style={styles.Container}>
            <Text style={styles.textStyle}>Add Name</Text>
            <TextInput placeholder='Enter a Name'
                       style={[styles.textInputStyle,{borderWidth: 0}]}
                       onChangeText={(name) => setName(name)}/>
            <Text style={styles.textStyle}>Add Image Link</Text>
            <TextInput placeholder='Enter a Link'
                       style={[styles.textInputStyle,{borderWidth: 0}]}
                       onChangeText={(image) => setImage(image)}/>
            <RNPickerSelect placeholder={{
                label: 'Select an Element...',
                value: null,
            }} onValueChange={(elementType) => setElementType(elementType)}
                            items={[
                                {label: 'lightning', value: 'lightning'},
                                {label: 'fire', value: 'fire'},
                                {label: 'water', value: 'water'},
                                {label: 'earth', value: 'earth'},
                            ]}/>
            <Button
                style={styles.buttonStyle}
                title="Submit"
                onPress={() => {
                    let newItem = {
                        name: name,
                        imageRef: image,
                    };
                    let index = datasource.findIndex(
                        (section) => section.elementType.toLowerCase() === elementType.toLowerCase()
                    );
                    if (index !== -1) {
                        datasource[index].data.push(newItem);
                    } else {
                        alert("Please select a valid element type.");
                    }
                    navigation.navigate("Home");
                }}
            />
        </View>
    );
}

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
        width: '80%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default Add;
