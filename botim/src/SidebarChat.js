import React from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebar-Chat">
      <Avatar />
      <div className="sidebar-chatinfo">
        <h2>Chat Name</h2>
        <p>Last Text</p>
      </div>
    </div>
  );
}

export default SidebarChat;
