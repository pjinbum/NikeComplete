import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import { Routes , Route } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Nav from './component/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1.wjscptkdvna(ProductAll),로그인,상세페이지(ProductDetail)

//2.로그인 전에 상세페이지 접속시 , 로그인 페이지를 먼저 보여준다.
//3.로그인이 이미 되어있다면 , 상세페이지 보여준다.

//4.로그인하면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다.



function App() {
   // 스테이트 값이 true면 로그인이 된상태이고 ,false면 로그인이 안된 상태 
   //사이트 접속했을 때 처음 로그인 된 상태면 안되니까 기본값이 false 
   //로그인 버튼을 클릭 했을 때 값을 true로 바꿔준다
   const [userLogin , setUserLogin] = useState(false)


   //userLogin값이 변경 될때 마다 console.log
    useEffect(()=>{
      console.log('login' , userLogin)
    },[userLogin])
  
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<Login userLogin={userLogin} setUserLogin={setUserLogin} ></Login>}></Route>
        <Route path='/product/:id' element={<PrivateRoute userLogin={userLogin}></PrivateRoute>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
