import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Restcard({ restaurents }) {
  console.log(restaurents);

  return (
    <div>
      <Link to={`view/${restaurents.id}`} style={{textDecoration:'none'}}>
      <MDBCard className='my-5' style={{ height: '500px' }}>
        <MDBCardImage src={restaurents.photograph} height={'350px'} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{restaurents.name}</MDBCardTitle>
          <MDBCardText>
            {restaurents.address}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </Link>
    </div>
  )
}

export default Restcard