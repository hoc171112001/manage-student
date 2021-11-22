import axios from "axios";

let baseApi = "http://localhost:3001";
export function login(data) {
  return axios.post(baseApi + "/auth/login", data).then((response) => {
    return response.data;
  });
}
export function loginGuest(data) {
  return axios.post(baseApi + "/auth/login", data).then((response) => {
    return response.data;
  });
}
export function fetchStudent(data) {
  const AuthStr = "Bearer " + data.token;
  let option = {
    headers: { Authorization: AuthStr },
  };
  return axios
    .get(
      `${baseApi}/students?_page=${data._page}&_limit=${data._limit}&q=${data.query}`,
      option
    )
    .then((response) => {
      return {
        listData: response.data,
        total: response.headers["x-total-count"],
      };
    });
}
export function fetchStudentDetails(data) {
  const AuthStr = "Bearer " + data.token;
  let option = {
    headers: { Authorization: AuthStr },
  };
  return axios
    .get(
      `${baseApi}/students/${data.key}`,
      option
    )
    .then((response) => {
      return response.data
    });
}
export function deleteStudent(data) {
  const AuthStr = "Bearer " + data.token;
  let option = {
    headers: { Authorization: AuthStr },
  };
  return axios.delete(`${baseApi}/students/${data.id}`, option).then((res) => {
    return res.data;
  });
}
export function createStudent(data) {
  const AuthStr = "Bearer " + data.token;
  return axios({
    method: "post",
    url: `${baseApi}/students`,
    data: {
      name: data.data.name,
      age: data.data.age,
      classes: [data.data.class],
      addr: data.data.adress,
      course: "",
      specialized: "CNTT",
      imgUrl:"https://firebasestorage.googleapis.com/v0/b/fir-upload-db77d.appspot.com/o/image%2Fkonan.jpg?alt=media&token=d30638e6-e597-40e3-abff-b373655b2797",
      info: {
        accommodations: "",
        birth: "",
        nation: "",
        religion: "",
        mssv: "",
        union:"",
        cmnd:"",
        bhyt:"",
        phone:"",
        email:""
      },
      gender:"",
      roles:"",
      levelEducate:"",
      typeEducate:""
    },
    headers: { Authorization: AuthStr },
  }).then((res) => {
    return res.data;
  });
}
export function fetchClasses(data) {
  const AuthStr = "Bearer " + data;
  let option = {
    headers: { Authorization: AuthStr },
  };
  return axios.get(`${baseApi}/classes`, option).then((response) => {
    return response.data;
  });
}
export function updateStudent(data) {
  const AuthStr = "Bearer " + data.token;
  return axios({
    method: "put",
    url: `${baseApi}/students/${data.data.key}`,
    data: {
      ...data.remainData,
      name: data.data.name,
      age: data.data.age,
      classes: [...data.data.classes],
      addr: data.data.address,
    },
    headers: { Authorization: AuthStr },
  }).then((res) => {
    return res.data;
  });
}
export function updateStudentTopDetails(data) {
  const AuthStr = "Bearer " + data.token;
  return axios({
    method: "put",
    url: `${baseApi}/students/${data.key}`,
    data: {
      ...data.remainData,
      name: data.data.name,
      classes: [...data.data.classes],
      course:data.data.course,
      gender:data.data.gender,
      levelEducate:data.data.levelEducate,
      roles:data.data.roles,
      specialized:data.data.specialized,
      typeEducate:data.data.typeEducate,
      info:{
        ...data.remainData.info,
        mssv:data.data.mssv
      }
    },
    headers: { Authorization: AuthStr },
  }).then((res) => {
    return res.data;
  });
}
export function updateStudentBotDetails(data) {
  const AuthStr = "Bearer " + data.token;
  return axios({
    method: "put",
    url: `${baseApi}/students/${data.key}`,
    data: {
      ...data.remainData,
      addr:data.data.address,
      age:data.age,
      info:{
        ...data.remainData.info,
        accommodations:data.data.accommodations,
        birth:data.data.birth,
        bhyt:data.data.bhyt,
        cmnd:data.data.cmnd,
        email:data.data.email,
        nation:data.data.nation,
        phone:data.data.phone,
        religion:data.data.religion,
        union:data.data.union,
      }
    },
    headers: { Authorization: AuthStr },
  }).then((res) => {
    return res.data;
  });
}