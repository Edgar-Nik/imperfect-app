import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import PickedItem from "../common/PickedItem";

export default function KeywordInput({
  filterItem,
  value,
  handleChange,
  disabled,
}) {
  const [inputValue, setInputValue] = useState("");
  const getValue = () => {
    if (inputValue.trim()) {
      let values = value ? value : [];
      if (!values.includes(inputValue)) {
        handleChange([...values, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const removeItem = (index) => {
    const clone = value.filter((_, idx) => idx !== index);

    clone.length ? handleChange([...clone]) : handleChange(undefined);
  };
  return (
    <Box>
      <FormControl variant="outlined" fullWidth>
        <InputLabel
          style={{ background: "#000", paddingRight: "5px" }}
          htmlFor="outlined-adornment-keyword"
        >
          {filterItem.title}
        </InputLabel>
        <OutlinedInput
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          disabled={disabled}
          id="outlined-adornment-keyword"
          endAdornment={
            <InputAdornment position="end">
              <Box margin={1}>
                <IconButton
                  disabled={disabled}
                  size="medium"
                  aria-label="add keyword"
                  onClick={getValue}
                  edge="end"
                >
                  <span style={{ width: "24px" }}>+</span>
                </IconButton>
              </Box>
            </InputAdornment>
          }
          label="Keyword"
        />
      </FormControl>
      {!!value?.length && (
        <Box display={"flex"} flexWrap={"wrap"} width={"100%"} marginY={2}>
          {value.map((item, idx) => (
            <PickedItem
              key={item + idx}
              label={item}
              handleRemove={() => removeItem(idx)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
