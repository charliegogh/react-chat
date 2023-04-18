import Send from "./components/Send";
import React, { useState, useEffect, useRef } from "react";
const App = () => {
  const [messageList, setMsg] = useState([
    {
      id: 0,
      text: "hey",
      from: "answer",
      loading: false,
    },
  ]);
  const setMessageList = (value) => {
    messageList.push(value);
    setMsg([...messageList]);
    console.log(messageList);
  };
  const updateMessageList = (value) => {
    const idx = messageList.findIndex((i) => i.id === value.id);
    messageList.splice(idx, 1, value);
    setMsg([...messageList]);
  };
  return (
    <div className="chat">
      <Send
        messageList={messageList}
        setMessageList={setMessageList}
        updateMessageList={updateMessageList}
      />
    </div>
  );
};
export default App;
