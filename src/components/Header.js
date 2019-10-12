import React from "react";
import "../App";

const Header = props => (
    <>
    <div className="header fixed-top" id="navbar">
    <div className="title-bar">{props.children}</div>
    <img src="https://lion-castle.com/wp-content/uploads/2019/01/sstg-logo-BLACK.png" alt="Super Street Logo" height="75" width="150" id="sslogo"></img>

    <div className="scores">
      Score: {props.score} High-score: {props.highscore}
    </div>
  </div>


<div id="info">
<h1>JDM Clicky Game!</h1>
<h2>Click on an car to earn points, but don't click on any car more than once!</h2>
</div>

</> 
  );

export default Header;
