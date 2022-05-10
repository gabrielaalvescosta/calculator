import React from 'react';
import {
    StyleSheet,
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
        fontSize: 20,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderColor: '#888'
    }
})