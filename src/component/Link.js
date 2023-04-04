import React, {useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import rdata from  './data.json'


const Link = () => {
  const[data,setData] =useState([])
  useEffect(()=>{
      async function fun(){
        setData(await rdata)
      }fun()
  },[])
  return (
    <div  >
      <CardGroup >
      {
        data.map((element,i,k)=>{
          return(
            <div key={i}>

          <Card>
            <Card.Img className='imgset' variant="top" src={element.imge} />
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>
                <h3>{element.price}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
      </div>

         ) })
      }
      </CardGroup>
    </div>
  )
}

export default Link
