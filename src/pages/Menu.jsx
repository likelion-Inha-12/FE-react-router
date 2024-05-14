import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [brandname, setbrandname] = useState('');

  const handleName = e =>{ // input box의 값을 추적하기 위한 함수
    setbrandname(e.target.value)
  }

  const handleButtonClick = () => { // button의 onClick 이벤트에서 작동할 함수 (`/product/${brandname}` 로 이동!) 
    console.log(brandname); // brandname check용
    navigate(`/product/${brandname}`);
  }

  const handleKeyPress = e => { // enter를 활용한 검색을 하기 위한 함수
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  }

  return (
    <>
        <h1>Menu Page</h1>  
        <input name="myName" placeholder="브랜드을 입력해주세요" onChange={handleName} onKeyPress={handleKeyPress} />
        <button onClick={handleButtonClick}>상품 페이지로 이동</button>
    </>
  );
}

export default Menu;