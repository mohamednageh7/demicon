import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import SelectInput from "../../../coreUI/SelectInput";
import { selectData } from "./selectData";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../../redux/user/selector";
import { UsersContext } from "../UsersViewWrapper";

type Props = {};

const Filter: React.FC<Props> = () => {
  let dispatch = useDispatch();

  const { countries} = useSelector(userSelector);
  console.log({countries})
  const [handleChangeData, handleFilterData, handleReset] =
    useContext(UsersContext);
  return (
    <Grid container justifyContent={"center"} spacing={4}>
      {selectData({
        optionsCountries: countries,
      }).map(
        (
          data: {
            options: any;
            name: string;
            title: string;
          },
          i: number
        ) => (
          <Grid item xs={2} key={i}>
            <SelectInput
              name={data.name}
              title={data.title}
              options={data.options}
              handleFilter={handleChangeData}
            />
          </Grid>
        )
      )}

      <Grid
        item
        xs={2}
        display="flex"
        textAlign="center"
        sx={{
          alignSelf: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="contained" onClick={handleFilterData}>
          Filter
        </Button>
      </Grid>
      <Grid
        item
        xs={2}
        display="flex"
        textAlign="center"
        sx={{
          alignSelf: "center",
          justifyContent: "flex-start",
        }}
      >
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
