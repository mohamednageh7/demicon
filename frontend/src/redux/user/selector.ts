import { createSelector } from "reselect";

export const userSelector = createSelector(
  (state: any) => state.user,
  (users: any) => {
    return {
      user: users.user,
      countries: users.countries,
    };
  }
);
