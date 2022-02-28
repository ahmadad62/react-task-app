import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const { title, onAdd, showAddForm } = props;
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAddForm ? "green" : "red"}
          text={showAddForm ? "Close" : "Add Task"}
        />
      )}
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
