import React, { useState, useEffect, useRef } from "react";
const Send = ()=> {
      const [value, setValue] = useState(undefined);
      const insertMessage = (e)=>{
        console.log(e)
      }
    return(
        <>
          <textarea
          type="text"
          className="message-input"
          placeholder="..."
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
    )
}
export default Send;