import React, { useEffect, useState } from 'react'

/**
* @author
* @function Details
**/

export const Details = (props) => {
    const [leftInfo,setLeftInfo] = useState([
        {
            key:1,
            title:"Nơi sinh",
            des:"Loading..."
        },
        {
            
            title:"Địa chỉ",
            des:"Loading...",
            key:2
        },
        {
            title:"Ngày sinh",
            des:"Loading...",
            key:3
        },
        {
            title:"Dân tộc",
            des:"Loading...",
            key:4
        },
        {
            title:"Tôn giáo",
            des:"Loading...",
            key:5
        },
        
    ])
    const [rightInfo,setRightInfo] = useState([
        {
            title:"Ngày vào đoàn",
            des:"Loading...",
            key:6
        },
        {
            title:"Số CMND",
            des:"Loading...",
            key:7
        },
        {
            title:"Số thẻ BHYT",
            des:"Loading...",
            key:8
        },
        {
            title:"SĐT",
            des:"Loading...",
            key:9
        },
        {
            title:"Email",
            des:"Loading...",
            key:10
        },  
    ])
    let {dataDetails} = props
    useEffect(()=>{
        if(dataDetails){
            setLeftInfo([
                {   

                    title:"Nơi sinh",
                    des:dataDetails?dataDetails.addr:"Loading...",
                    key:1
                },
                {
                    title:"Địa chỉ hiện tại",
                    des:dataDetails.info?dataDetails.info.accommodations:"Loading...",
                    key:2
                },
                {
                    title:"Ngày sinh",
                    des:dataDetails.info?dataDetails.info.birth:"Loading...",
                    key:3
                },
                {
                    title:"Dân tộc",
                    des:dataDetails.info?dataDetails.info.nation:"Loading...",
                    key:4
                },
                {
                    title:"Tôn giáo",
                    des:dataDetails.info?dataDetails.info.religion:"Loading...",
                    key:5
                }, 
            ])
            setRightInfo([
                {
                    title:"Ngày vào đoàn",
                    des:dataDetails.info?dataDetails.info.union:"Loading...",
                    key:6
                },
                {
                    title:"Số CMND",
                    des:dataDetails.info?dataDetails.info.cmnd:"Loading...",
                    key:7
                },
                {
                    title:"Số thẻ BHYT",
                    des:dataDetails.info?dataDetails.info.bhyt:"Loading...",
                    key:8
                },
                {
                    title:"SĐT",
                    des:dataDetails.info?dataDetails.info.phone:"Loading...",
                    key:9
                },
                {
                    title:"Email",
                    des:dataDetails.info?dataDetails.info.email:"Loading...",
                    key:10
                },  
            ])
        }
    },[dataDetails])
  return(
    <div className={props.class}>
        <div className="left-info">
            {leftInfo.map((info)=>{
                return(
                    <div className="info-left" key={info.key}>
                        <span>{info.title}: {info.des?info.des:"Chưa cập nhật"}</span>
                    </div>
                )
            })}
        </div>
        <div className="right-info">
        {rightInfo.map((info)=>{
                return(
                    <div className="info-right" key={info.key}>
                        <span>{info.title}: {info.des?info.des:"Chưa cập nhật"}</span>
                    </div>
                )
            })}
        </div>
    </div>
   )
  }
