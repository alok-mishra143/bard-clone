import React from "react";
import "./about.css"; // Importing CSS file for styling
import NavBar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Page() {
  return (
    <div className="genzbot-about">
      <NavBar />
      <header>
        <h1>About Genzbot</h1>
      </header>
      <main>
        <section>
          <h2>Introduction</h2>
          <p>
            Genzbot is an AI-powered virtual assistant designed to assist users
            with various tasks and inquiries.
          </p>
        </section>
        <section>
          <h2>Personality</h2>
          <p>
            Genzbot often replies like a Gen Z boy, incorporating modern slang
            and expressions into its responses.
          </p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Provides quick answers to questions</li>
            <li>Performs tasks such as setting reminders and alarms</li>
            <li>Engages in casual conversation with users</li>
          </ul>
        </section>
        <section>
          <h2>Development</h2>
          <p>
            Genzbot was developed using advanced natural language processing
            techniques and machine learning algorithms.
          </p>
        </section>
        <section>
          <h2>Additional Information</h2>
          <p>
            Genzbot is constantly learning and improving its capabilities to
            better serve its users.
          </p>
        </section>
        <section>
          <h2>Meet Genzbot</h2>
          <Image width={500} height={500} src={assets.meetgen} />
        </section>
      </main>
      <footer className="genzbot-footer">
        <div className="social-media">
          <a
            href="https://twitter.com/genzbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com/genzbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com/genzbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>© 2024 Genzbot Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page;
