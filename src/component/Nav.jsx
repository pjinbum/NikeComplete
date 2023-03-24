import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const loginList = ['매장찾기' , '고객센터' , '가입하기' , '로그인']
    const menuList = ['New Releases' , 'Men', 'Women' , 'Kid' , 'Sale' , 'SNKRS' , '나이키 앱']
    
    const navigate = useNavigate();
    const goToLogin = () => {
       navigate('/login')
    }
  return (
    <div>
        <div className='login'>
           <ul>
             {
                loginList.map(function(item , i){
                  if(i === loginList.length - 1) {
                    return <li className='gnb-item' key={i} onClick={goToLogin}>{item}</li>
                   } else {
                    return <li className='gnb-item' key={i}>{item}</li>
                   }

                  //   if (menu === '로그인') {
                  //   return (
                  //     <li className='gnb-item' key={i} onClick={() => console.log('로그인 버튼이 클릭되었습니다.')}>
                  //       {menu}
                  //     </li>
                  //   );
                  // }
                  

                    // return <li className='login-item' key={i}>{item}</li>
                })
             }
           </ul>
        </div>
        <div className='nav'>
          <a href="http://localhost:3000/"><img width={70} src="https://blog.kakaocdn.net/dn/o2k2o/btqwR37aRMc/imACexBUQZJms7mQRkQck1/img.jpg" alt="logo" /></a>
          <ul className='gnb-list'>
            {
                menuList.map(function(menu , i){
                 
                   
                    return <li className='gnb-item' key={i}>{menu}</li>
                })
            }
          </ul>
          <div className='icon-list'>
            <div className='search-box'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder='          검색' />
            </div>
          </div>
          <div className='font-icon'>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
          </div>
      
        </div>
    </div>
  )
}

export default Nav