// App.js
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;


// // 수정된 코드
// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import InputField from "./components/InputField/InputField";
// import MessageContainer from "./components/MessageContainer/MessageContainer";
// // const socket = require("./server");

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// function App() {
//   const [user, setUser] = useState(null);
//   const [message,setMessage] = useState("");
//   const [messageList,setMessageList] = useState([]);
//   console.log("message List",messageList);
//   // 렌더링 되자 마자 물어보기위해서
//   useEffect(() => {
//     socket.on('message',(message)=>{
//       setMessageList((prevState)=>prevState.concat(message));
//     });
//     askUserName();
//   }, [])

//   const askUserName = () => {
//     const userName = prompt("당신의 이름을 입력하세요.")
//     console.log("uuu", userName);

//     // emit (제목, 보낼내용, 콜백함수)
//     socket.emit("login",userName,(res)=>{
//       if(res?.ok){
//         setUser(res.data);
//         }
//         console.log("Res",res);
//     });
//   };

//   const sendMessage=(event)=>{
//     //onSubmit 함수 실행일때 시작됨. 웹페이지를 계속 새로고침함 이를 막기위해
//     event.preventDefault();
//     socket.emit("sendMessage",message,(res)=>{
//       console.log("sendMessage res",res);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.container}>
//         <MessageContainer messageList={messageList} user={user} />
//         <InputField
//           message={message}
//           setMessage={setMessage}
//           sendMessage={sendMessage}
//         />
//       </View>
//     </View>
//   );
// }

// export default App;