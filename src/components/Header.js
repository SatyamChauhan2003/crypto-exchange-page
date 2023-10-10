import React from "react";
import { BiSearch } from "react-icons/bi";
import { BiBuildings } from "react-icons/bi";

const Header = () => {
  return (
    <div style={{display:"block",justifyContent:"center",position:"relative",marginBottom:"45px"}}>
      <div style={{ marginTop: "12px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
          Top crypto exchanges
        </h1>
        <p style={{ fontWeight: "bold", color: "gray" }}>
          compare all 190 top crypto exchanges. The list is ranked by trading
          volume.
        </p>
      </div>
      <div
        style={{
          width: "100%",
          borderBottom: "2px solid gray",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <h4
          style={{
            width: "110px",
            color: "blue",
            borderBottom: "2px solid blue",
            padding: "15px",
            fontWeight: "bold",
          }}
        >
          Exchanges
        </h4>
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          border: "2px solid gray",
          borderRadius: "18px",
          position:"absolute",
          top:"80%",
          left:"42%"
        }}
      >
        <BiBuildings style={{ marginTop: "7px" }} />
        <input
          type="text"
          placeholder="Find an exchange"
          width="50px"
          style={{ padding: "3px 17px 5px 3px", borderRadius: "15px" }}
        />
        <BiSearch style={{ marginTop: "8px" }} />
      </div>
    </div>
  );
};

export default Header;
