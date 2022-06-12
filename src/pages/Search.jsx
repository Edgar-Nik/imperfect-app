import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FiltersBox from "../components/filters/FiltersBox";
import filters from "../utils/filters";

const parseUrlCategory = (str) => {
  return str.replace(/-/g, "_");
};

const Search = () => {
  const { category } = useParams();
  const [picked, setPicked] = useState({});

  return (
    <Box display={"flex"} py={3} px={4}>
      <Box width={350}>
        <FiltersBox
          picked={picked}
          filterObject={filters[parseUrlCategory(category)]}
          setPicked={setPicked}
        />
      </Box>
      <Box width={"calc(100% - 350px)"} paddingLeft={20}></Box>
    </Box>
  );
};

export default Search;
