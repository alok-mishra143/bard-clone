"use client";

import "./main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Image from "next/image";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest some beautiful places to see on an upcoming road trip
                </p>
                <Image src={assets.Compass} alt="compass icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this conecpt : Urban planning</p>
                <Image src={assets.Bulb} alt="compass icon" />
              </div>
              <div className="card">
                <p>Braistroam team bonding activities for our work retreat</p>
                <Image src={assets.Chat_bubble} alt="compass icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <Image src={assets.Code} alt="compass icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <Image src={assets.user} alt="laxman icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <Image src={assets.gemini_icon} alt="gemini icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter here..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <div className="search-icons">
              <Image
                src={assets.send}
                alt="send icon"
                onClick={() => onSent()}
              />
            </div>
          </div>
          <p className="bottom-line">
            Gemini may display inaccurate info, including about people, so
            double check it&apos;s responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
