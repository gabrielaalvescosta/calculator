import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    display: {
        padding: 30,
        color: '#fff',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    valueDisplay: {
        fontSize: 60,
        color: '#fff'
    }
})

export default props => {

    return (
        <View style={styles.display}>
            <Text style={styles.valueDisplay}>{props.value}</Text>
        </View>
    )

}
