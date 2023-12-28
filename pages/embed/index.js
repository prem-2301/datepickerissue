import React from "react";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Date() {
  return (
    <>
      <div style={{ height: 1000 }}>filler</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker />
      </LocalizationProvider>
    </>
  );
}
