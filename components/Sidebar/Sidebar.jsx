/* eslint-disable no-unused-vars */
"use client";
import "./Sidebar.css";
import { assets } from "@/assets/assets";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import Image from "next/image";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const [recentPrompt, setRecentPromptFromStorage] = useState(null);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Image
          src={assets.Hamburgur}
          alt="menu icon"
          className="menu"
          onClick={() => {
            setExtended((prevState) => !prevState);
          }}
        />
        <div className="new-chat">
          <Image src={assets.plus_icon} alt="plus icon" />
          {extended && <p>New chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recents">
              {prevPrompts.map((prevPrompt) => (
                <div
                  className="recent-entry"
                  key={Math.random()}
                  onClick={() => loadPrompt(prevPrompt)}
                >
                  <Image src={assets.Chat_bubble} alt="message-icon" />
                  <p>{prevPrompt.slice(0, 20)}...</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <Image src={assets.question} alt="question icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <Image src={assets.History} alt="history icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <Image src={assets.Setting} alt="settings icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
