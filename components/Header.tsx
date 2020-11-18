import React from "react";
import { globals } from "../globals";

export const Header: React.FC = () => (
  <div
    style={{
      top: 0,
      width: "100%",
      height: "48px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: globals.accentColor,
      padding: "24px",
      fontSize: "12pt",
    }}
  >
    <a href="/" style={{ textDecoration: "none" }}>
      <p style={{ color: globals.secondaryColor }}>{globals.siteName}</p>
    </a>
    <div style={{ flex: 1 }} />
    {/*<a href="https://github.com/Lawlez/dev.lwlx.xyz" style={{ textDecoration: 'none' }}>
      <p style={{ padding: '0px 1em', color: globals.secondaryColor }}>GitHub</p>
    </a>
    <a href="https://github.com/InfoSecx0" style={{ textDecoration: 'none' }}>
      <p style={{ padding: '0px 1em', color: globals.secondaryColor }}>Twitter</p>
  </a>*/}
  </div>
);
