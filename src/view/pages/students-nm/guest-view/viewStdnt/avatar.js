import React, {useState,useEffect} from "react";
// import {storage} from '../../../../../firebasee/index'
// import axios from 'axios'
/**
 * @author
 * @function Avatar
 **/

export const Avatar = (props) => {
  // const [img, setImg] = useState(null);
  const [url, setUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fir-upload-db77d.appspot.com/o/image%2Fkonan.jpg?alt=media&token=d30638e6-e597-40e3-abff-b373655b2797"
  );
  const dataDetails = props.dataDetails
  useEffect(()=>{
    if(dataDetails){
      setUrl(dataDetails.imgUrl)
    }
  },[dataDetails])
  return (
    <div className={props.class}>
      <img
        src={url}
        alt="avatar"
        width="100%"
        max-height="90%"
      />
      <div className="status">Trạng thái: Đang học</div>
    </div>
  );
};
