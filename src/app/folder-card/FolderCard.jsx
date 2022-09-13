import "./folder-card.css";
import React from "react";
import { Link } from "react-router-dom";

const FolderCard = (props) => {
  const { linkTo, name, childs } = props;

  return (
    <Link to={linkTo} className="foldercard">
      <h1 className="foldercard__name">{name}</h1>
      <p className="foldercard__items">Number of items: {childs?.length} </p>
    </Link>
  );
};

export default FolderCard;
