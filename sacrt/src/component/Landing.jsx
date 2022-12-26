import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/";
import BusShow from "./DisplayConent";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const dummyResponse = [
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "05:43:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "06:13:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "06:43:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "07:13:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "07:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "08:14:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "08:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "09:14:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "09:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "10:14:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "10:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "11:14:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "11:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "12:15:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "12:45:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "13:15:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "13:45:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "14:17:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "14:47:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "15:17:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "15:32:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "15:47:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "16:17:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "16:47:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "17:17:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "17:47:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "18:14:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "18:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "19:14:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "19:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "20:14:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "20:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "21:14:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
  {
    detached: false,
    columnDefinitions: { detached: false },
    formattedContents: {
      stopid: 1660,
      arrivaltime: "21:44:00.000000000",
      atstreet: "HOWE AVE",
      onstreet: "NORTHROP AVE",
      route: 82,
      stopname: "NORTHROP AVE & HOWE AVE (WB)",
      tripheads: "University/65th Station",
    },
  },
];

async function findBus(busnumber) {
  console.log("Bus number:", busnumber);
  return fetch("http://localhost:8080/" + busnumber.busnumber, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //    body: JSON.stringify(credentials)
  }).then((data) => data.json());
}

export default function BusFind({ setToken }) {
  const [busnumber, setBusNumber] = useState("");
  const [busResponse, setBusResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const busResp = await findBus({
      busnumber,
    });
    console.log(busResp)
    setIsLoading(true);

    // Simulate server response
    setTimeout(() => {
      setBusResponse(busResp);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <div
        className="login-wrapper"
        style={{
          padding: "20px",
          flexDirection: "column",
          justifyContent: "center",
          display: "flex",
          gap: "200px",
        }}
      >
        <div style={{ justifyContent: "center", display: "flex" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="standard"
              data-testid="bus-input"
              variant="filled"
              label="Enter Bus number"
              value={busnumber}
              onChange={(e) => setBusNumber(e.target.value)}
              sx={{
                width: "30vw",
                backgroundColor: "white",
              }}
              color="primary"
              InputProps={{
                endAdornment: (
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </form>
        </div>
      </div>
      <BusShow busNumber={busnumber} data={busResponse} isLoading={isLoading} />
    </>
  );
}
