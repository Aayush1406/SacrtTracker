import React, { useState } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Details from './Details';

export default function BusShow({ data, isLoading, busNumber }) {
  return (
    <div style={{ padding: "0px 50px" }}>
      {isLoading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      ) : (
        data && (
          <div>
            <h1 style={{ margin: "12px 0px" }}>Bus Details: {busNumber}</h1>
            <Details data={data} />
          </div>
        )
      )}
    </div>
  );
}
