import React from 'react'
import Login from '../page/Login'
import ProductDetail from '../page/ProductDetail'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

//useNavigate (React Hook 중에 하나)
//React Hook 규칙
//조건문 , 반복문에서 useNavigate를 사용할수 없다
//use를 빼고  Navigate 를 임포트 해주고 링크 걸어준것처럼 to를 적어주고 뒤에 이동하고싶은 주소 적어주기

//조건부 랜더링
//userLogin이 true라면 <ProductDetail/> 을 보여주고 ,
//userLogin이 false라면 Login 페이지로 이동 ~!

const PrivateRoute = ({userLogin}) => {
    const navigate = useNavigate()
  return ( 
    
    // userLogin === true? <ProductDetail></ProductDetail> : <Login></Login>
    // userLogin === true? <ProductDetail></ProductDetail> : useNavigate('/login')
    userLogin === true? <ProductDetail></ProductDetail> : <Navigate to = '/login'></Navigate>

  )
}

export default PrivateRoute