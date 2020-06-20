import React from "react";
import { CSSTransition } from "react-transition-group";
import "../App.css";

const ValidationInput = (props) => {
  let trueLength =
    props.text.search(" ") === -1
      ? props.text.length
      : props.text.split(" ").join("").length;
  let shouldRender = false;
  let Valtext = "Text is good";
  const styles = {};

  if (trueLength < 5 || trueLength > 10) {
    shouldRender = true;
    Valtext = trueLength < 5 ? `Text is too short:` : `Text is long enough:`;
    styles.backgroundColor =
      trueLength < 5 ? "rgb(180, 15, 20)" : "rgb(15, 90, 20)";
  }

  return (
    <CSSTransition
      in={shouldRender}
      timeout={500}
      appear={true}
      unmountOnExit={true}
    >
      <p className="valInp" style={styles}>
        {Valtext} <strong>{trueLength}</strong>
      </p>
    </CSSTransition>
  );
};

export default ValidationInput;
