import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');

    return (
    <>
      <h1>Menu Page</h1>
      <input type={id}  onChange={(e)=>setId(e.target.value)} />
      <button onClick={() => navigate(`/product/${id}`)}>브랜드 페이지로 이동</button>
    </>
  );
}

export default Menu;