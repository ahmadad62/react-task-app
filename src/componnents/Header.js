import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const { title, onAdd, showAddForm } = props;

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAddForm ? "green" : "red"}
        text={showAddForm ? "Close" : "Add Task"}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "To Do List Default",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
