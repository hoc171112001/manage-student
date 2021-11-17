import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getToken } from '../../../../helper/helper';

import {About} from "./viewStdnt/about";
import { Avatar } from "./viewStdnt/avatar";
import { Career } from "./viewStdnt/career";
import { Details } from "./viewStdnt/details";
import * as type from '../../../../redux/const/const'
/**
* @author
* @function ViewStudent
**/

const ViewStudent = (props) => {
    const {key} = useParams()
    const dispatch = useDispatch()
    const token = getToken()
    const [data,setData] = useState([])
    let dataApi = useSelector((state)=>{
      return state.student.dataDetails
    })
    useEffect(()=>{
      dispatch({type:type.DETAIL_STUDENT_FETCH,payload:{token,key}})
    },[])
    useEffect(()=>{
      if(dataApi){
        setData(dataApi)
      }
    },[dataApi])
  return(
    <div className="student-wrapper">
      {
        console.log("rener")
      }
      <div className="top-text">THÔNG TIN SINH VIÊN</div>
      <div className="student-info">
        <div className="info">
          <Avatar class="avatar" dataDetails={data} dispatchData={{token:token,key:key}} />
          <About class="about" dataDetails={data} />
        </div>
        <Career class="career" dataDetails={data}/>
      </div>
      <div className="top-text">THÔNG TIN CÁ NHÂN</div>
      <Details class="student-details" dataDetails={data} />
    </div>
   )
  }

export default ViewStudent