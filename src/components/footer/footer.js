import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// "@fortawesome/free-regular-svg-icons": "^5.15.1",

import {
  faGithub,
  faTwitter,
  faBehanceSquare,
  faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

import './footer.css';


export default function Footer(){
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © {new Date().getFullYear()}. Spongly. All rights reserved
        </span>
        <div className="socialinks">
          <span>Follow me</span>
          <a href="https://github.com/spongly" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/spongly" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="mailto:spongly@duck.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.behance.net/spongly" target="_blank">
            <FontAwesomeIcon icon={faBehanceSquare} />
          </a>
          <a href="https://codepen.io/spongly" target="_blank">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
      </div>
    </div>
  )
}
