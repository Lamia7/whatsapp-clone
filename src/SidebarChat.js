import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  // passing prop: addNewChat
  // get random seed whenever the SidebarChat loads
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      // if they enter something in prompt, do some clever database stuff later with the captured variable called roomName...
    }
  };

  // if it is not the addNewChat, (?) show this, (:) otherwise
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    // otherwise render out this div
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
