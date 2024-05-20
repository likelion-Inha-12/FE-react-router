import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={()=>navigate(-1)}>뒤로 가기</button>
        <button onClick={() => navigate("/main")}>메인으로 가기</button>
      </div>
    </>
  );
}

export default Header;