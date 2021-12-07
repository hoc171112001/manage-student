import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Spin, Typography } from "antd";
import { getToken } from "../../../../helper/helper";

import { About } from "./viewStdnt/about";
import { Avatar } from "./viewStdnt/avatar";
import { Career } from "./viewStdnt/career";
import { Details } from "./viewStdnt/details";
import * as type from "../../../../redux/const/const";
import { ModalUpper } from "./modal/modalUpper";
import { ModalLower } from "./modal/modalLower";

/**
 * @author
 * @function ViewStudent
 **/

const ViewStudent = (props) => {
 const { key } = useParams();
  const dispatch = useDispatch();
  const token = getToken();
  const [data, setData] = useState([]);

  let dataApi = useSelector((state) => {
    return state.student.dataDetails;
  });
  let { updateDetailSuccess, loadingDetails, updateDetailMessage } = useSelector((state) => {
    return state.student;
  });
  useEffect(() => {
    dispatch({ type: type.FETCH_CLASSES, payload: token });
  }, []);
  useEffect(() => {
    dispatch({ type: type.DETAIL_STUDENT_FETCH, payload: { token, id:key } })
  }, [updateDetailSuccess]);
  useEffect(() => {
    if (dataApi) {
      setData(dataApi);
    }
  }, [dataApi]);

  //
  const {Text} = Typography
  return (
    <div className="student-wrapper">
      <Spin spinning={loadingDetails} tip="Loading">
        <Text type="warning" >{updateDetailMessage}</Text>
        <div className="top-text">THÔNG TIN SINH VIÊN</div>
        <div className="student-info">
          <div className="info">
            <Avatar
              class="avatar"
              dataDetails={data}
              dispatchData={{ token: token, key: key }}
              key={key}
            />
            <About class="about" dataDetails={data}/>
          </div>
          <Career class="career" dataDetails={data} key={key}/>
        </div>
        <ModalUpper dataDetails={data} dispatchData={{ token: token }}/>
        <div className="top-text">THÔNG TIN CÁ NHÂN</div>
        <Details class="student-details" dataDetails={data}/>
        <ModalLower dataDetails={data} dispatchData={{ token: token }}/>
      </Spin>
    </div>
  );
};

export default ViewStudent;
