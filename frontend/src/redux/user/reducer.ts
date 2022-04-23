import { FILTER_USERS, GET_USERS } from "./types";
const initialState: { user: []; countries: []; userData: [] } = {
  userData: [],
  user: [],
  countries: [],
};

export default function (
  state = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      console.log({ payload });
      return {
        ...state,
        user: payload[0].users,
        userData: payload[0].users,
        countries: payload[0].countries,
      };
    case FILTER_USERS:
      let newUser =
        payload === ""
          ? state.userData
          : state.userData.filter((data: any) => payload === data.location);
      console.log({ userData: state.userData, newUser, payload });
      return {
        ...state,
        user: newUser,
      };

    default:
      return state;
  }
}
