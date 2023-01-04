import axios from "axios";
import moment from "moment";
import {
  BUS_REQUEST,
  BUS_FAILURE,
  BUS_SUCCESS,
  SAVE_SEARCHDATA,
  SELECTED_SEATS, 
} from "./busActionType";

const busRequest = () => {
  return {
    type: BUS_REQUEST,
  };
};
const busSuccess = (payload) => {
  return {
    type: BUS_SUCCESS,
    payload: payload,
  };
};
const busFailure = () => {
  return {
    type: BUS_FAILURE,
  };
};

const saveSearchData = (payload) => {
  return {
    type: SAVE_SEARCHDATA,
    payload,
  };
};

const selectedseatsData =(payload)=>{
  return {
    type:SELECTED_SEATS,
    payload
  }
}

export const getBusesData = (payload) => (dispatch) => {
  dispatch(saveSearchData(payload));
  dispatch(busRequest());

  //__________________________________________________________________Change this link to original API _____________________//
  return axios
    .get(
      `http://localhost:2244/buses/route?from=${payload.departureLocation}&to=${
        payload.arrivalLocation
      }&date=${moment(payload.selectedDate).format("DD-MM-YYYY")}`
    )
    .then((res) => {
      dispatch(busSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(busFailure(err));
    });
};


export const getSelectedData=(payload)=>(dispatch)=>{
      dispatch(selectedseatsData(payload))
};