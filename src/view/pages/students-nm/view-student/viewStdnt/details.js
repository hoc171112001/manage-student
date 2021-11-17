import React, { useEffect, useState } from 'react'

/**
* @author
* @function Details
**/

export const Details = (props) => {
    const [leftInfo,setLeftInfo] = useState([
        {
            title:"Nơi sinh",
            des:"Loading..."
        },
        {
            title:"Địa chỉ",
            des:"Loading..."
        },
        {
            title:"Ngày sinh",
            des:"Loading..."
        },
        {
            title:"Dân tộc",
            des:"Loading..."
        },
        {
            title:"Tôn giáo",
            des:"Loading..."
        },
        
    ])
    const [rightInfo,setRightInfo] = useState([
        {
            title:"Ngày vào đoàn",
            des:"Loading..."
        },
        {
            title:"Số CMND",
            des:"Loading..."
        },
        {
            title:"Số thẻ BHYT",
            des:"Loading..."
        },
        {
            title:"SĐT",
            des:"Loading..."
        },
        {
            title:"Email",
            des:"Loading..."
        },  
    ])
    let {dataDetails} = props
    useEffect(()=>{
        if(dataDetails){
            setLeftInfo([
                {
                    title:"Nơi sinh",
                    des:dataDetails?dataDetails.addr:"Loading..."
                },
                {
                    title:"Địa chỉ hiện tại",
                    des:dataDetails.info?dataDetails.info.accommodations:"Loading..."
                },
                {
                    title:"Ngày sinh",
                    des:dataDetails.info?dataDetails.info.birth:"Loading..."
                },
                {
                    title:"Dân tộc",
                    des:dataDetails.info?dataDetails.info.nation:"Loading..."
                },
                {
                    title:"Tôn giáo",
                    des:dataDetails.info?dataDetails.info.religion:"Loading..."
                }, 
            ])
            setRightInfo([
                {
                    title:"Ngày vào đoàn",
                    des:dataDetails.info?dataDetails.info.union:"Loading..."
                },
                {
                    title:"Số CMND",
                    des:dataDetails.info?dataDetails.info.cmnd:"Loading..."
                },
                {
                    title:"Số thẻ BHYT",
                    des:dataDetails.info?dataDetails.info.bhyt:"Loading..."
                },
                {
                    title:"SĐT",
                    des:dataDetails.info?dataDetails.info.phone:"Loading..."
                },
                {
                    title:"Email",
                    des:dataDetails.info?dataDetails.info.email:"Loading..."
                },  
            ])
        }
    },[dataDetails])
  return(
    <div className={props.class}>
        <div className="left-info">
            {leftInfo.map((info)=>{
                return(
                    <div className="info-left">
                        <span>{info.title}: {info.des?info.des:"Chưa cập nhật"}</span>
                    </div>
                )
            })}
        </div>
        <div className="right-info">
        {rightInfo.map((info)=>{
                return(
                    <div className="info-right">
                        <span>{info.title}: {info.des?info.des:"Chưa cập nhật"}</span>
                    </div>
                )
            })}
        </div>
    </div>
   )
  }
