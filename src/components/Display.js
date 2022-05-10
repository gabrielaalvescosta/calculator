import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default props => {
    return (
        <View style={styles.displayValue}>
            <Text style={styles.displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 2,
        justifyContent: 'center',
        backgroundColor: '#f89999',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})