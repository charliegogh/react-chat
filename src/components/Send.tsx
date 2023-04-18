import React, { useState, useEffect, useRef } from "react";
import getChat from "./chatgpt";
const Send = (props) => {
  const [value, setValue] = useState("");
  const { messageList } = props;
  const insertMessage = async () => {
    if ((value ?? "") === "") {
      return;
    }
    // 收集问题信息
    props.setMessageList({
      id: new Date().getTime(),
      text: value,
      from: "ask",
      loading: false,
    });
    setValue("");
    let answerId = new Date().getTime() + 1;
    props.setMessageList({
      id: answerId,
      text: value,
      from: "answer",
      loading: true,
    });
    try {
      const rs = await getChat(value);
      // const {
      //   data: { choices },
      // } = rs;
      // props.updateMessageList({
      //   id: answerId,
      //   text: choices[0].message.content,
      //   from: "answer",
      //   loading: false,
      // });
    } catch (e) {
      throw e;
    }
  };
  return (
    <>
      <textarea
        type="text"
        className="message-input"
        placeholder="...  "
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={(e) => e.keyCode === 13 && insertMessage()}
      ></textarea>
      <button
        type="submit"
        className="message-submit"
        onClick={() => insertMessage()}
      >
        Send
      </button>
    </>
  );
};
export default Send;
