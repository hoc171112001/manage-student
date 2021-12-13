import axios from "axios";
const baseApi = "http://localhost:3001";
export function fetchTeacher(data) {
  if (data) {
    const AuthStr = "Bearer " + data.token;
    let option = {
      headers: { Authorization: AuthStr },
    };
    return axios
      .get(
        `${baseApi}/teacherInfo?_page=${data._page}&_limit=${data._limit}&q=${data.query}`,
        option
      )
      .then((response) => {
        return {
          data: response.data,
          total: response.headers["x-total-count"],
        };
      });
  }
}
export function deleteTeacher(data) {
  if (data) {
    const AuthStr = "Bearer " + data.token;
    let option = {
      headers: { Authorization: AuthStr },
    };
    return axios
      .delete(`${baseApi}/teacherInfo/${data.id}`, option)
      .then((response) => {
        return response.data;
      });
  }
}
export function updateListTeacher(data) {
  if (data) {
    const AuthStr = "Bearer " + data.token;
    return axios({
      method: "put",
      url: `${baseApi}/teacherInfo/${data.data.key}`,
      headers: { Authorization: AuthStr },
      data: {
        ...data.remainData,
        name: data.data.name,
        classes: data.data.classes,
        info: {
          ...data.remainData.info,
          age: data.data.age,
          address: data.data.address,
        },
      },
    }).then((response) => {
      return response.data;
    });
  }
}
export function createTeacher(data) {
  if (data) {
    const AuthStr = "Bearer " + data.token;
    return axios({
      method: "post",
      url: `${baseApi}/teacherInfo`,
      headers: { Authorization: AuthStr },
      data: {
        name: data.data.name,
        birth: data.data.birth,
        gender: data.data.gender,
        teacherExp: data.data.teacherExp,
        classes: [data.data.class],
        info: {
          address: data.data.address,
          age:data.age,
          email: "",
          phone: "",
          bhyt: "",
          birth: "",
          location: "",
          nation: "",
          religion: "",
          cmnd: "",
          union: "",
        },
        mssgv: "",
        img: "",
        workDate: "",
      },
    }).then((response) => {
      return response.data;
    });
  }
}

export function fetchDetailsTeacher(data) {
  if (data) {
    const AuthStr = "Bearer " + data.token;
    let option = {
      headers: { Authorization: AuthStr },
    };
    return axios
      .get(`${baseApi}/teacherInfo/${data.key}`, option)
      .then((response) => {
        return response.data;
      });
  }
}
