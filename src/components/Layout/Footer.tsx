import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__developer">
        <p>DEVELOPER</p>
        <ul>
          <li>
            <p>JIWON27</p>
            <div className="github-container">
              <AiFillGithub />
              <a href="https://github.com/JIWON27">github</a>
            </div>
          </li>
          <li>
            <p>rnignon</p>
            <div className="github-container">
              <AiFillGithub />
              <a href="https://github.com/rnignon">github</a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
