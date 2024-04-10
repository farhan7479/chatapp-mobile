import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import socketIo from 'socket.io-client';
import { user } from "./LandingPage";
import Message from '../components/Message';


const ENDPOINT = "http://localhost:5000/";
let socket;

const Chat = () => {
  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
        alert('Connected');
        setId(socket.id);

    })
    console.log(socket);
    socket.emit('joined', { user })

    socket.on('welcome', (data) => {
        setMessages([...messages, data]);
        console.log(data.user, data.message);
    })

    socket.on('userJoined', (data) => {
        setMessages([...messages, data]);
        console.log(data.user, data.message);
    })

    socket.on('leave', (data) => {
        setMessages([...messages, data]);
        console.log(data.user, data.message)
    })

    return () => {
        socket.emit('disconnected');
        socket.off();
    }
}, [])

useEffect(() => {
    socket.on('sendMessage', (data) => {
    const isDuplicate = messages.some(msg => msg.id === data.id);
      if (!isDuplicate) {
        setMessages(prevMessages => [...prevMessages, data]);
      }
    })
    return () => {
        socket.off('sendMessage');
    }
}, [messages])
  

const sendMessage = () => {
  if (messageInput.trim() !== "" && socket) {
    const newMessage = {  message: messageInput, id: id };
    setMessageInput("");
    setMessages(prevMessages => [...prevMessages, newMessage]);
    socket.emit('message', newMessage);
    setMessageInput("");
  }
};

  

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Message
            user={item.id === id ? '' : item.user}
            message={item.message}
            classs={item.id === id ? 'right' : 'left'}
          />
        )}
        
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageInput}
          onChangeText={text => setMessageInput(text)}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  sendButton: {
    padding: 10,
    backgroundColor: 'blue',
  },
  sendText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Chat;
