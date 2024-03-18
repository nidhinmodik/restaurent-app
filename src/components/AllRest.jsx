import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Restcard from './Restcard'


function AllRest() {

  const base_url='https://backend-restaurant-listing.onrender.com/restaurants'

  //to hold array of restaurent data
  const [AllRestData,setAllRestData] = useState([])

  //Api fetching
  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllRestData(result.data)
  }
  console.log(AllRestData);


  useEffect(()=>{
    fetchData()
  },[])




  return (
    <div>
      <Row>
        {
          AllRestData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <Restcard restaurents = {item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default AllRest