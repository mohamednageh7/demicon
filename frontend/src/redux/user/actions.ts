import axios from "axios";
import { FILTER_USERS, GET_USERS} from "./types";

export const getUsers = () => async (dispatch: any) => {
  try {
    let res: any = await axios.get(
      `${process.env.REACT_APP_DB_BASEURL}/getUser`
    );
    console.log({getUsers:res.data})
    return dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    console.log({ removeAlertError: error });
  }
};

export const filterUser =(value:string) => (dispatch:any) => {
  console.log({value})
  return dispatch({
    type: FILTER_USERS,
    payload: value,
  });
}
