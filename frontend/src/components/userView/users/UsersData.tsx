import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import moment from "moment";

type Props = {
  data: any;
};

const UsersData: React.FC<Props> = ({ data }) => {
  const { name, email, gender } = data;
  return (
    <Grid container p="1em" m="1em" sx={{ border: "1px solid #ccc" }}>
      <Grid item container xs={11}>
        <Grid item xs={12}>
          Name: {name}
        </Grid>
        <Grid item xs={12}>
          Email: {email}
        </Grid>
      </Grid>
      <Grid item container xs={1}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          sx={{
            background: "#e08686",
            color: "#fff",
            fontSize: "1.2rem",
            borderRadius: "1em",
            alignSelf: "end",
          }}
        >
          {gender}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UsersData;
