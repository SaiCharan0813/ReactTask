import React, { useState } from 'react'
import pic from '../assets/employee-img2.jpg'
import {
  Link,
  useParams
} from 'react-router-dom'
import '../EmployeeCard/style.css'
import {Container ,Card, Col, Button, Row} from 'react-bootstrap';  
import employee from '../Interface/Interface';
interface props{
  Employee_Img:any,
  _id:string,
  Preffered_Name:string,
  Designation:string,
  Department:string
}

const EmployeeCard:React.FC<props> = ({_id,Employee_Img,Preffered_Name,Designation,Department}) => {
  
//Component to diaplay the employee card  
  
  return (
    <>
    <Link to={`/employee/${_id}`} style={{textDecoration: 'none',
    color: 'black'}} >
    <div className="emp-details m-4" >
      
      <Card className='cards'>
        <Col>
          <Row>
            <img src={Employee_Img} alt="Employee2" className="emp-image"/>
          
            <p className="emp-name list_head position-relative">{Preffered_Name}</p>
            <p className="emp-dsgn list_elm position-relative">{Designation}</p>
            <p className="emp-dept list_elm position-relative">{Department}</p>
            <ul className="emp-icons position-relative">
                
                <li className="emp-icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                </li>
                <li className="emp-icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                      </svg>
                </li>
                <li className="emp-icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                      </svg>
                </li>
                <li className="emp-icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                </li>
                <li className="emp-icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                </li>
            </ul>
          </Row>
        </Col>
      </Card>
      
      
    </div>
    </Link>
    </>
  )
}
export default EmployeeCard
