import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./Header.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> <img src="https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/r/leads/100/files/theme/42/v101/tpd.png" alt="" className="logo" /></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}