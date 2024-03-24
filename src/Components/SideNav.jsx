import React from "react";

import CryptoScam from "./CryptoScam";


const SideNav = () => {
  return (
    <div className="sidenav">
      <h2>
        Coins and platforms involved in scams
      </h2>
      <CryptoScam />
    </div>
  );
};

export default SideNav;
