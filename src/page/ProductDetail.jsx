import React from 'react'
import { Container , Row ,Col } from 'react-bootstrap'
import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
   let {id} = useParams();
   const [product , setProduct] = useState(null)
  

    const getProductDetail = async() => {
      // API 호출
      // `http://localhost:3000/product/0 백틱해주고 프로덕트 뒤에값은 내가 클릭한 값이 들어와야 한다.
      let url = ` http://localhost:5000/products/${id}`
      let response = await fetch(url)
      let data = await response.json();
      console.log(data)


      setProduct(data)
    }
    useEffect(()=>{
     getProductDetail()
   } ,[])

  return (
    <div>
        <Container>
      <Row style={{marginTop : "50px"}}>
        <Col>
          <img width={500} src={product?.img}/>
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <div>{product?.price}</div>
          <div>사이즈 : {product?.size}</div>
        </Col>
      </Row>
    </Container>
    </div>
  
  )
}

export default ProductDetail