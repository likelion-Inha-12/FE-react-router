import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
        <h1>Main Page</h1>
        <Link to="/menu">메뉴 페이지로 이동</Link>
    </>
  );
}

export default Main;