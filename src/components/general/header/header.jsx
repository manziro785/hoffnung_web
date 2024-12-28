import React from "react";
import "./header.css";
import logo from "../../../assets/common/logo.svg";
import icon from "../../../assets/common/Symbol.svg";
import icon_email from "../../../assets/common/icon_email.svg";
import downloadfile from "../../../assets/Satzung.pdf";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container_header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <nav>
            <div>
              <ul className="menu">
                <li className="menu-item">
                  <a href="/" className="menu-link">
                    HOME
                  </a>
                </li>
                <li className="menu-item dropdown">
                  <a href="#" className="menu-link">
                    VEREIN
                    <span>
                      <img src={icon} alt="" />
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="/aboutus">Über uns</a>
                    </li>
                    <li>
                      <a
                        href="http://hoffnung-kirgisien.org/download/Satzung.pdf"
                        target="_blank"
                      >
                        Satzung
                      </a>
                    </li>
                    <li>
                      <a href={downloadfile} download>
                        Flyer
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item dropdown">
                  <a href="/kyrgyzstan" className="menu-link">
                    KIRGISTAN
                  </a>
                </li>
                <li className="menu-item dropdown">
                  <a href="/projects" className="menu-link">
                    PROJECTE
                    <span>
                      <img src={icon} alt="" />
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="/ourgoal">Zeile</a>
                    </li>
                    <li>
                      <a href="/projects/semenovka">Semenovka</a>
                    </li>
                    <li>
                      <a href="/projects/teplokluchinka">Teplokluchenka</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item dropdown">
                  <a href="#" className="menu-link">
                    PARTNER
                    <span>
                      <img src={icon} alt="" />
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="/via_kirgizia">Via kirgizia</a>
                    </li>
                    <li>
                      <a
                        href="https://www.uplift-aufwind.org/de/"
                        target="_blank"
                      >
                        Uplift-aufwind
                      </a>
                    </li>
                    <li>
                      <a href="https://umai-online.org/" target="_blank">
                        Umai
                      </a>
                    </li>
                    <li>
                      <a href="https://dkk-verein.com/" target="_blank">
                        DKK
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="/donate" className="menu-link">
                    SPENDEN
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/imprint" className="menu-link">
                    IMPRESSUM
                  </a>
                </li>
                <li className="btn_contact">
                  <a href="/contact">
                    <img src={icon_email} alt="" />
                    KONTAKT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
