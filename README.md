# Chat Application

This is a real-time chat application built using Node.js, Express, Socket.IO, React Native, and MongoDB. Users can join chat rooms, send messages, and interact with others in real-time.

## Features

- Real-time messaging: Instantly send and receive messages without page reloads.
- User authentication: Users can provide their names to join chat rooms.
- Cross-platform: The frontend is built using React Native, making it compatible with both Android and iOS devices.

## Backend Setup

1. **Clone the repository:**
    ```
    git clone https://github.com/farhan7479/chatapp-mobile.git
    ```

2. **Install dependencies:**
    ```
    cd backend
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and configure the following variables:
    ```
    PORT=<port_number>
    MONGODB_URI=<mongodb_connection_string>
    ```

4. **Start the server:**
    ```
    npm start
    ```

## Frontend Setup

1. **Install React Native dependencies:**
    ```
    cd frontend
    npm install
    ```

2. **Update endpoint:**
    Open `ChatScreen.js` in the `frontend` directory and update the `ENDPOINT` variable with the backend server URL.

3. **Run the application:**
    - Android:
        ```
        npx react-native run-android
        ```
    - iOS:
        ```
        npx react-native run-ios
        ```

## Download the App

You can download the chat application from the following link:

[Chat Application - Google Drive](<google_drive_link>)

