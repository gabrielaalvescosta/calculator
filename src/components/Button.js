import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';


const styles = StyleSheet.create({
    Button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#666',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})


export default props => {

    const stylesButton = [styles.Button]

    if (props.double) {
        stylesButton.push(styles.buttonDouble);
    } 

    if (props.triple) {
        stylesButton.push(styles.buttonTriple);
    }

    if (props.operation) {
        stylesButton.push(styles.operationButton);
    }

    // calculator functions

    const addDigit = n => {
        this.setState({ displayValue: n })
    }

    const clearMemory = () => {
        this.setState({ displayValue: '0'})
    }

    const setOperation = operation => {}

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}