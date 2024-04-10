import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';


let user ;

const Join = ({navigation}) => {
   const [name , setName] = useState("");
   

    const handleJoin = () => {
        if (name.trim() !== "") {
            user = name;
            navigation.navigate('Chats');
        }
    };

    return (
        <View style={styles.joinPage}>
            <View style={styles.joinContainer}>
               
                <Text style={styles.title}>Private Chat</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Enter Your Name"
                />
                <TouchableOpacity
                    style={styles.joinBtn}
                    onPress={handleJoin}
                    disabled={!name.trim()}
                >
                    <Text style={styles.btnText}>Login In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
 
const styles = {
    joinPage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    joinContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    joinBtn: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
};

export default Join;
export { user };
