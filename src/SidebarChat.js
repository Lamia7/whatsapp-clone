import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
        {/* check documentation here : https://avatars.dicebear.com/*/}
      <Avatar src="https://avatars.dicebear.com/api/female/cindy.svg" />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
