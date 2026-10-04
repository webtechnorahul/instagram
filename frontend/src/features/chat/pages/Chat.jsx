import React, { useState } from "react";
import "../style/Chat.css";

const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    username: "@rahul",
    avatar: "https://i.pravatar.cc/100?img=12",
    lastMessage: "Hey! How are you?",
  },
  {
    id: 2,
    name: "Priya Singh",
    username: "@priya",
    avatar: "https://i.pravatar.cc/100?img=47",
    lastMessage: "See you tomorrow 😊",
  },
  {
    id: 3,
    name: "Aman Kumar",
    username: "@aman",
    avatar: "https://i.pravatar.cc/100?img=11",
    lastMessage: "Nice post!",
  },
  {
    id: 4,
    name: "Sneha Verma",
    username: "@sneha",
    avatar: "https://i.pravatar.cc/100?img=32",
    lastMessage: "Thank you ❤️",
  },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    console.log("Message:", message);
    setMessage("");
  };

  return (
    <div className="chat-page">

      {/* LEFT SIDEBAR */}
      <div className="chat-sidebar">

        <div className="chat-title">
          <h2>Messages</h2>
          <button>✎</button>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        <div className="chat-list">
          {users.map((user) => (
            <div
              key={user.id}
              className={`chat-user ${
                selectedUser.id === user.id ? "active" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img src={user.avatar} alt={user.name} />

              <div className="user-info">
                <h4>{user.username}</h4>
                <p>{user.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT AREA */}
      <div className="chat-area">

        {/* HEADER */}
        <div className="chat-header">
          <img src={selectedUser.avatar} alt={selectedUser.name} />

          <div>
            <h3>{selectedUser.name}</h3>
            <span>Active now</span>
          </div>

          <div className="header-icons">
            <button>📞</button>
            <button>🎥</button>
            <button>ⓘ</button>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="messages">

          <div className="profile-intro">
            <img src={selectedUser.avatar} alt="" />
            <h3>{selectedUser.name}</h3>
            <p>{selectedUser.username}</p>
          </div>

          <div className="message received">
            Hey! How are you?
          </div>

          <div className="message sent">
            I'm good! What about you?
          </div>

          <div className="message received">
            I'm doing great 😊
          </div>

          <div className="message sent">
            That's nice!
          </div>

        </div>

        {/* INPUT */}
        <div className="message-input">

          <button className="emoji-btn">😊</button>

          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          {message.trim() ? (
            <button className="send-btn" onClick={sendMessage}>
              Send
            </button>
          ) : (
            <>
              <button>🎤</button>
              <button>🖼️</button>
              <button>❤️</button>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default Chat;