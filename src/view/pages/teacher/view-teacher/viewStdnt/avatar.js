import React, { useState, useEffect, useRef, useMemo } from "react";
import { storage } from "../../../../../firebasee/index";
import axios from "axios";
import { useDispatch } from "react-redux";
/**
 * @author
 * @function Avatar
 **/

export const Avatar = ({dispatchData, dataDetails, classes}) => {
  const dispatch = useDispatch();
  const uploadFileBtn = useRef(null);
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState(
    ""
  );
  useEffect(() => {
    const onHandleClick = () => {
      const uploadTask = storage.ref(`image/${img.name}`).put(img);
      uploadTask.on(
        "state_changed",
        (snapshot)=>{

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
              console.log(url);
              axios({
                method: "put",
                url: `http://localhost:3001/teacherInfo/${dispatchData.key}`,
                data: {
                  ...dataDetails,
                  img: url,
                },
                headers: { Authorization: `Bearer ${dispatchData.token}` },
              })
              dispatch({
                type: "FETCH_DETAIL_TEACHER",
                payload: { key: dispatchData.key, token: dispatchData.token },
              });
            });
        }
      );
    };
    if (img) {
      onHandleClick();
    }
  }, [img, dispatch]);
  const onHandleChange = (event) => {
    if (event.target.files[0]) {
      setImg(event.target.files[0]);
    }
  };
  useEffect(() => {
    if (dataDetails) {
      setUrl(dataDetails.img);
    }
  }, [dataDetails]);
  return (
    <div className={classes}>
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
      <input
        type="file"
        hidden={true}
        onChange={onHandleChange}
        ref={uploadFileBtn}
      />
      <div className="status">Trạng thái:Actived</div>
    </div>
  );
};
