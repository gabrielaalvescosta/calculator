import React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';


export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.Button}>{props.label}</Text>
        </TouchableHighlight>
    )
}


const style = StyleSheet.create({
    Button: {
        fontSize: 30,
        height: Dimensions.get('windows').width / 4,
        width: Dimensions.get('windows').width / 4,
        padding: 20,
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderColor: '#888'
    }
})