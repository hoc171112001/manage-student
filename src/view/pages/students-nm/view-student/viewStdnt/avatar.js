import React, {useState,useEffect,useRef} from "react";
import {storage} from '../../../../../firebasee/index'
import axios from 'axios'
/**
 * @author
 * @function Avatar
 **/

export const Avatar = (props) => {
  const uploadFileBtn = useRef(null);
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fir-upload-db77d.appspot.com/o/image%2Fkonan.jpg?alt=media&token=d30638e6-e597-40e3-abff-b373655b2797"
  );
  const [progress, setProgress] = useState(0);
  const dataDetails = props.dataDetails
  const dispatchData = props.dispatchData
  const onHandleClick = () => {
    const uploadTask = storage.ref(`image/${img.name}`).put(img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("image")
          .child(img.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            return axios({
              method:'put',
              url:`http://localhost:3001/students/${dispatchData.key}`,
              data:{
                ...dataDetails,
                imgUrl:url
              },
              headers: { Authorization:`Bearer ${dispatchData.token}` }
            })
          });
      }
    );
  };
  useEffect(() => {
    if (img) {
      onHandleClick();
    }
  }, [img]);
  const onHandleChange = (event) => {
    if (event.target.files[0]) {
      setImg(event.target.files[0]);
    }
  };
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
        title="Click to upload image"
        onClick={() => {
          uploadFileBtn.current.click();
        }}
      />
      {progress && progress !== 100 ? (
        <progress
          value={progress}
          max="100"
          style={{ height: "7px", width: "100%" }}
        />
      ) : (
        <></>
      )}
      <input
        type="file"
        hidden={true}
        onChange={onHandleChange}
        ref={uploadFileBtn}
      />
      <div className="status">Trạng thái: Đang học</div>
    </div>
  );
};
