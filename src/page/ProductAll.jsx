import React from 'react'
import { useEffect , useState }  from 'react'
import { FormGroup } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import {Container , Row , Col} from 'react-bootstrap'

const ProductAll = () => {
    const [productList , setProductList] = useState([])
    //async await http 요청
    //비동기 처리하는 가장 최근에 나온 문법
    //기존에는 비동기 처리를 해주는게 콜백 함수 였다
    //콜백함수로 사용할 경우 , 콜백함수 안에 또 콜백함수가 들어가는 
    //형태로  들어갈 경우 계속 중첩 된다.
    //그러면 가독성도 떨어지고 로직변경이 힘들다. => 콜백지옥
    //해결하는 방법도 있지만 async await를 사용
    //비동기 처리 는 무엇이고 하면
    //특정 코드의 실행이 완료될때 까지 기다리지 않고 
    //다음 코드를 먼저 실행한다.

    useEffect(()=>{

       //2. 함수 내부 로직중 http 통신을 하는 비동기 처리 코드 앞에 await
       //3. await 함수내에서 사용하려면 
       //반드시 함수 앞에 async 키워드가 있어야 한다. 

       //await
       // 함수를 호출하고 본문이 실행될 때 잠시 중단 됬다가 
       //프라미스 가 처리되면 실행이 재개 된다.
       //프라미스 :  자바스크립트에서 비동기 처리에 사용 되는 객체

      const getProducts = async() => {
        //팻치함수는 내장함수라서 별도로 설치할필요없이 
        //모든 데이터를 가진 주소를 부른다.
        let url = 'http://localhost:5000/products'
        //url fetch 해줘라
        let response = await fetch(url)
        // response에서 json을 뽑아와라
        let data = await response.json()
        //에이싱크와 어웨이트
        console.log(data)
       
        //State 변경 함수에 data값 할당
        setProductList(data)
      }

      getProducts()
    } , [])

  return (
    <Container>
      {/* <ProductCard></ProductCard> */}
      {/* {
        productList.map((menu , i)=>{
          return (
            <ProductCard menu={menu}></ProductCard>
          )
        })
      } */}
      <Row>
      {
        productList.map((menu , i)=>{
          return (
            <Col lg={4}>
              <ProductCard menu={menu}></ProductCard>
            </Col>
          )
        })
      }
      </Row>
    </Container>
  )
}

export default ProductAll