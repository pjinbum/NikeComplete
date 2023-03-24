import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div style={{width:'100vw',height:'200px', display: 'flex' , justifyContent : 'space-between' , backgroundColor : `${props.color}` , alignItems : 'center'}}>
        <div>
            <img height={'200px'} src={'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150723_91%2Fmusic98980_1437660019065zmCSs_GIF%2Fd0039f718e1f14193b71d090c1174ef0.gif&type=sc960_832_gif'} />
        </div>
        <div>
          <h1 className='hana' style={{color : '#fff'}} onMouseOver={()=>{
             
          }}>{props.title}</h1>
        </div>
    </div>
  )
}

export default Header