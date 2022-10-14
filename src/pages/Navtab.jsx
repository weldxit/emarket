import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import Product from "./Product";
import './css/navtab.css'

export default function Navtab() {
  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>
      <MDBTabs fill className="mb-3" >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("rice")}
            active={fillActive === "rice"}
          >
            <b>Rice</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("dal")}
            active={fillActive === "dal"}
          >
            <b>Dal</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("veg")}
            active={fillActive === "veg"}
          >
            <b>Vegitables</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("masroom")}
            active={fillActive === "masroom"}
          >
            <b>Mashroom</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("fish")}
            active={fillActive === "fish"}
          >
            <b>Fish</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("meat")}
            active={fillActive === "meat"}
          >
            <b>Meat</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("desi")}
            active={fillActive === "desi"}
          >
            <b>Desi Chicken</b>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("egg")}
            active={fillActive === "egg"}
          >
            <b>Egg</b>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === "rice"}>{<Product />}</MDBTabsPane>
        <MDBTabsPane show={fillActive === "dal"}>{<Product />}</MDBTabsPane>
        <MDBTabsPane show={fillActive === "veg"}>{<Product />}</MDBTabsPane>
        <MDBTabsPane show={fillActive === "masroom"}>{<Product />}</MDBTabsPane>
        <MDBTabsPane show={fillActive === "fish"}>{<Product />}</MDBTabsPane>
        <MDBTabsPane show={fillActive === "meat"}>{<Product />}</MDBTabsPane>
        <MDBTabsPane show={fillActive === "desi"}>{<Product />}</MDBTabsPane>
        <MDBTabsPane show={fillActive === "egg"}>{<Product />}</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
