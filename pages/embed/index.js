import React from "react";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Date() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ height: 1000 }}>
          Iframe Content (scroll down to see date picker.)
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker disableAutoFocus={true} keepMounted={true} />
        </LocalizationProvider>
      </div>
    </>
  );
}
