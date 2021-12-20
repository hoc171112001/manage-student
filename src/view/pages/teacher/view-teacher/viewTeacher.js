import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Spin, message } from "antd";
import { getToken } from "../../../../helper/helper";
import * as type from "../../../../redux/const/const";
import About from "./viewStdnt/about";
import { Avatar } from "./viewStdnt/avatar";
import Career from "./viewStdnt/career";
import { Details } from "./viewStdnt/details";
import {ModalUpper} from './modal/modalUpper';
import {ModalLower} from './modal/modalLower';
/**
 * @author
 * @function ViewTeacher
 **/

const ViewTeacher = (props) => {
  const { key } = useParams();
  const token = getToken();
  const dispatch = useDispatch();
  const {classData} = useSelector((state)=>state.classes)
  const { detailTeacher, updateDetailSuccess, loadingDetails, updateDetailMessage } = useSelector((state) => state.teacher);
  useEffect(() => {
    dispatch({ type: type.FETCH_DETAIL_TEACHER, payload: { token, key } });
  }, [updateDetailSuccess]);
  useEffect(()=>{
    dispatch({type:type.FETCH_CLASSES,payload:token})
  },[])
  useEffect(()=>{
    updateDetailSuccess&&updateDetailMessage ? message.success(updateDetailMessage) : updateDetailMessage && message.error(updateDetailMessage)
    return ()=>{
      dispatch({type:type.UPDATE_TEACHER_DETAIL_FAILED,message:""})
      message.destroy()
    }
  },[updateDetailMessage,updateDetailSuccess])
  return (
    <div className="student-wrapper">
      <Spin spinning={loadingDetails} tip="Loading">
        <div className="top-text">THÔNG TIN GIÁO VIÊN</div>
        <div className="student-info">
          <div className="info">
            <Avatar
              classes="avatar"
              dispatchData={{ token: token, key: key }}
              dataDetails={detailTeacher}
            />
            <About
              class="about"
              dataDetails={{
                name: detailTeacher.name,
                msgv: detailTeacher.mssgv,
                age: detailTeacher.info ? detailTeacher.info.age : "",
                classes: detailTeacher.classes,
                gender: detailTeacher.gender,
              }}
            />
          </div>
          <Career
            class="career"
            dataDetails={{
              workDate: detailTeacher.workDate,
              teacherExp: detailTeacher.teacherExp,
            }}
          />
        </div>
        <ModalUpper dataDetails={detailTeacher} classData={classData} dispatchData={ {token,key} } 
        />
        <div className="top-text">THÔNG TIN CÁ NHÂN</div>
        <Details
          class="student-details"
          dataDetails={{
            address: detailTeacher.info ? detailTeacher.info.address : "",
            locate: detailTeacher.info ? detailTeacher.info.location : "",
            birth: detailTeacher ? detailTeacher.birth : "",
            nation: detailTeacher.info ? detailTeacher.info.nation : "",
            religion: detailTeacher.info ? detailTeacher.info.religion : "",
            union: detailTeacher.info ? detailTeacher.info.union : "",
            cmnd: detailTeacher.info ? detailTeacher.info.cmnd : "",
            bhyt: detailTeacher.info ? detailTeacher.info.bhyt : "",
            phone: detailTeacher.info ? detailTeacher.info.phone : "",
            email: detailTeacher.info ? detailTeacher.info.email : "",
          }}
        />
        <ModalLower dataDetails={detailTeacher} dispatchData={{ token,key }} />
      </Spin>
    </div>
  );
};
export default ViewTeacher;
