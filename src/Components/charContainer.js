import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App.css";

const CharContainer = (props) => {
  const characters = Array.from(props.charList).map((char, index) => {
    if (char !== " ") {
      return (
        <CSSTransition timeout={500} key={index} appear={true}>
          <p className="character" onClick={() => props.deleted(index)}>
            {" "}
            {char.toLowerCase()}{" "}
          </p>
        </CSSTransition>
      );
    }
    return null;
  });

  return (
    <TransitionGroup className="charComponent">{characters}</TransitionGroup>
  );
};

export default CharContainer;
