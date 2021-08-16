import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import MoreVert from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-headerinfo">
          <h2>Name</h2>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className="chat-message">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>

        <p className="chat-message sender">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message sender">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message sender">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message">
          <span className="chat-name">Mrunmay </span>
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
      </div>
    </div>
  );
}

export default Chat;
