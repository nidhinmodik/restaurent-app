import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';




function Viewrest() {
  const [restDetails,setrestDetails]=useState({})
  const {id} = useParams()
  console.log(id);//object -> id=3
  //API call to get details of the particular restaurent using the path parameter
  const base_url='https://backend-restaurant-listing.onrender.com/restaurants'

  const fetchRest=async()=>{

    const result =await axios.get(`${base_url}/${id}`)
    console.log(result);
    setrestDetails(result.data)
  }

  useEffect(()=>{
    fetchRest()
  },[])


  return (
    <div>
      <Row style={{backgroundColor:'black',color:'white'}}>
        <Col>
        <img src={restDetails.photograph} alt="" style={{height:'600px',width:'600px'}} />
        </Col>
        <Col>
        <div className='container my-5 p-5'>
        <ListGroup>
          <h1 className='text-center'>{restDetails.name}</h1>
      <ListGroup.Item>Address : {restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine type : {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview re={restDetails.reviews}/></ListGroup.Item>
    </ListGroup>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default Viewrest