import React from "react";
import { Layout, Header } from "react-mdl";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <div>
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "orange" }} to="/">
              MURIAL'S PORTFOLIO
            </Link>
          }
          scroll
        ></Header>
      </Layout>
    </div>
  );
}

export default MainHeader;
