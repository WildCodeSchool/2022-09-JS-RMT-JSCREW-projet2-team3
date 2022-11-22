import React from "react";
import { Link } from "react-router-dom";

function FooterNavButton({ recherche }) {
  return (
    <Link to={`/AllProduct?category=${recherche}`}>
      <li>{recherche}</li>
    </Link>
  );
}

export default FooterNavButton;
