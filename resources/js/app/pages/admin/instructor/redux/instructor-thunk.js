import { store_instructor_service, delete_instructor_service, update_instructor_service, get_instructor_by_id_service, get_instructor_service } from "@/app/services/instructor-service";
import { instructorSlice } from "./instructor-slice";



export function get_instructor_thunk() {
  return async function (dispatch, getState) {
    const res = await get_instructor_service(2)
    dispatch(instructorSlice.actions.setInstructors(res.data.response));
    return res
  };
}

export function get_instructor_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_instructor_by_id_service(id)
    return res
  };
}

export function store_instructor_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_instructor_service(data)
    return res
  };
}

export function update_instructor_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_instructor_service(data)
    return res
  };
}

export function delete_instructor_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_instructor_service(id)
    return res
  };
}