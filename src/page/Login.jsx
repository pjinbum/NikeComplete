import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = ({setUserLogin}) => {

const navigate = useNavigate()    
 
  const loginUser = (e) => {
    //콘솔이 잠깐 찍혔다가 사라지는 이유
    // : 페이지를 새로고침 하기 때문!
    //해결방법 : preventDefault로 form이 새로고침 하는걸 막아준다
    e.preventDefault()
    
    console.log('loginUser')
    navigate('/')
    setUserLogin(true);
     

  }


  return (
    <div style={{display : 'flex' , justifyContent : 'center'}}>
      {/* onSubmit : type이 submit 일 경우 onClick 이 아니라 onSubmit사용 */}
      {/* form 자체에서 주는 이벤트를 파라미터 값으로 보내줌 */}
      
      <form onSubmit={(e)=>loginUser(e)}>
        <div className='logDiv' style={{width : '500px' , height : '500px', marginTop : '100px'}}>
          <div>
            <img width={50} src="https://blog.kakaocdn.net/dn/o2k2o/btqwR37aRMc/imACexBUQZJms7mQRkQck1/img.jpg" alt="logo" />
          </div>
          <div>
            <h2>가입 또는 로그인을 위해 이메일을 입력하세요.</h2>
            <span>대한민국</span>  <span><a href="">변경</a></span>
          </div>
          <div>
            <input style={{height : '50px', width : '490px'}} type="text" placeholder='  이메일'/>
          </div>
          <div>
            계속 진행하면 나이키의 <a href="">개인 정보 처리 방침</a> 및 이용약관에 동의하게 됩니다.
          </div>
          <div style={{ textAlign : 'end'}}>
            <button type='submit' style={{width : '100px' , height : '50px' , border : 'none' , borderRadius : '30px' , backgroundColor : 'black' , color : '#fff' }} >계속</button>
          </div>
      
      </div>
      </form>


    </div>
  )
}

export default Login