import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';


function RestReview({re}) {
    console.log(re);
    const [open, setOpen] = useState(false);

  return (
    <div>
        <p
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </p>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div>
            {re?.map(item=>(
                <ListGroup>
                <ListGroup.Item>{item.name}</ListGroup.Item>
                <ListGroup.Item>{item.date}</ListGroup.Item>
                <ListGroup.Item>{item.rating}</ListGroup.Item>
                <ListGroup.Item>{item.comments}</ListGroup.Item>
              </ListGroup>
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default RestReview