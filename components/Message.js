import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ user, message, classs }) => {
    return (
        <View style={[styles.messageBox, classs === 'right' ? styles.right : styles.left]}>
            <Text style={styles.messageText}>{user ? `${user}: ${message}` : `You: ${message}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageBox: {
        padding: 5,
        margin: 5,
        borderRadius: 5,
        fontSize: 14,
        fontFamily: 'Segoe UI',
        maxWidth: '70%', // Adjust as needed
    },
    right: {
        alignSelf: 'flex-end',
        backgroundColor: '#3BEE77',
        color: 'white',
    },
    left: {
        alignSelf: 'flex-start',
        backgroundColor: '#C4FFB8',
    },
    messageText: {
        fontSize: 14,
    },
});

export default Message;
