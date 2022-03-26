import { Button,Table,Card,ListGroup,ListGroupItem, } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';




function Detail() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const currentUser = users.filter((user) => user.id === parseInt(id));
  console.log(currentUser);
  
const navigate= useNavigate()

  const routeChange = () => {
    let path = `/candidates`;
    navigate(path);
  };
  
  return (
    <div style={{textAlign: 'center'}}>
      
       
        
        {currentUser          
  ?.map((user) => {
   return (
        <Card style={{ width: '18rem', textAlign: 'center'}}>
  <Card.Img variant="top" src="https://source.unsplash.com/random/1600x901" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>id: {user.id}</ListGroupItem>
    <ListGroupItem>name: {user.name}</ListGroupItem>
    <ListGroupItem>e-mail: {user.email}</ListGroupItem>
    <ListGroupItem>phone: {user.phone}</ListGroupItem>
    <ListGroupItem><Button onClick={routeChange} variant="info">back</Button>{' '}</ListGroupItem>
  </ListGroup>
</Card>);
})}
     
      
    </div>
  )
}

export default Detail

// {currentUser          
//   ?.map((user) => {
//     return (
//       <tr key={user.id}>
//         <td>{user.id}</td>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//         <td>{user.phone}</td>
//         <td>
//         <Button variant="primary" size="sm">
//             Detail
//           </Button>
//         </td>
//       </tr>
//     );
//   })}