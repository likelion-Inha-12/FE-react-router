# [FE] React Router

### 이번 세션에서는 React Router와 Link, useNavigate, useParams에 대해 다루었습니다.

### 따라서 이번 실습과 과제는 이를 활용해보는 문제들로, 실습 문제 5개로 이루어져 있습니다! 

### 기존의 실습 과제에서 사용된 개념들도 녹아있으니, 이전 개념들도 다시 복기하면서 해결해나가시면 좋을 것 같습니다!

<br/>

# [실습 1번]

모든 페이지들에서 나타나는 Header 컴포넌트를 만들어주세요!<br/>
Header 컴포넌트의 기능은 다음과 같습니다!<br/>
(Hint : useNavigate를 활용해 보세요!)

1. 뒤로 가기 버튼 : 이전 페이지로 이동! 
2. 메인으로 가기 버튼 : Main Page("/")로 이동!

<br/>
src/components/Header.jsx 와 App.js 에서 진행해주시면 됩니다!
<br/><br/>

![스크린샷 2024-05-13 시간: 15 42 50](https://github.com/likelion-Inha-12/FE-react-router/assets/116332741/f5d89057-2716-4401-98e6-aac9bc4ea9df)

<br/>

# [실습 2번]

Link를 활용하여 Main Page에서 Menu Page로 이동할 수 있도록 해주세요!

<br/>
src/pages/Main.jsx 와 App.js 에서 진행해주시면 됩니다!
<br/><br/> 

![스크린샷 2024-05-13 시간: 15 03 55](https://github.com/likelion-Inha-12/FE-react-router/assets/116332741/d8a2e7f7-3b8c-4203-81a0-0516e94ec94c)

<br/>

# [실습 3번]

실습 3번 문제와 실습 4번 문제는 직접적인 연관이 있는 문제입니다.<br/><br/>
Menu Page에서 브랜드 명을 입력 받아 해당 Product 페이지로 이동할 수 있는 버튼을 만들어주세요!<br/> 
이동할 수 있는 브랜드는 5가지입니다.

1. 맘스터치
2. 맥도날드
3. 롯데리아
4. KFC
5. 버거킹
 
<br/>
src/pages/Menu.jsx, src/pages/Product.jsx, App.js 에서 진행해주시면 됩니다!
<br/><br/>

![스크린샷 2024-05-13 시간: 15 03 37](https://github.com/likelion-Inha-12/FE-react-router/assets/116332741/9f7095ac-9f51-46d0-8e88-dc2b95c7cc0f)

<br/>

# [실습 4번]

Menu Page에서 브랜드 명을 입력받아 해당 내용으로 Product Page로 이동했습니다.<br/>
data라는 이름으로 된 객체 배열이 존재하는데요!
<br/><br/>
Menu Page에서 입력한 브랜드 명이 data 객체 배열에 존재하는 key 값이라면,
해당 브랜드 명, 제품 명, 가격을 그림과 같이 나타내주세요! 

만약, 이외의 브랜드를 입력받았다면 다음과 같이 "해당 브랜드의 제품을 찾을 수 없습니다." 라고 표시해주세요!

<br/>
src/pages/Menu.jsx, src/pages/Product.jsx, App.js 에서 진행해주시면 됩니다!
<br/><br/>

- 올바른 브랜드를 입력했을 때
![스크린샷 2024-05-13 시간: 15 03 43](https://github.com/likelion-Inha-12/FE-react-router/assets/116332741/63ec23fe-5aef-4ba8-9e9d-f661eaf8ae49)
<br/>

- 부적절한 브랜드를 입력했을 때
![스크린샷 2024-05-13 시간: 15 49 02](https://github.com/likelion-Inha-12/FE-react-router/assets/116332741/eff5e4fb-627f-439c-bf4b-f7c77a401cdc)
<br/>

# [실습 5번]

1~4번 문제에서 정의되지 않은 경로로 접근하려는 경우는 없어야겠죠??<br/>
비정상적인 경로로 접근하는 경우에는 다음과 같이 "존재하지 않는 페이지 입니다." 라고 표시해주세요!

<br/>
src/pages/NotFound.jsx, App.js 에서 진행해주시면 됩니다!
<br/><br/>

![스크린샷 2024-05-13 시간: 15 07 52](https://github.com/likelion-Inha-12/FE-react-router/assets/116332741/ac42222f-77e3-4c94-b96f-dc1e01a3ab7a)
<br/>
