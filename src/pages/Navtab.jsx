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



// import * as React from 'react';
// import {Link} from 'gatsby';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function Header(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// export default function FullWidthTabs() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="Rice" {...a11yProps(0)} />
//           <Tab label="Dal" {...a11yProps(1)} />
//           <Tab label="Vegitables" {...a11yProps(2)} />
//           <Tab label="Mashroom" {...a11yProps(3)} />
//           <Tab label="Fish" {...a11yProps(4)} />
//           <Tab label="Meat" {...a11yProps(5)} />
//           <Tab label="Desi Chicken" {...a11yProps(6)} />
//           <Tab label="Egg" {...a11yProps(7)} />
         
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
         
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
        
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
         
//         </TabPanel>
//         <TabPanel value={value} index={3} dir={theme.direction}>
        
//         </TabPanel>
//         <TabPanel value={value} index={4} dir={theme.direction}>
        
//         </TabPanel>
//         <TabPanel value={value} index={5} dir={theme.direction}>
         
//         </TabPanel>
//         <TabPanel value={value} index={6} dir={theme.direction}>
        
//         </TabPanel>
//         <TabPanel value={value} index={7} dir={theme.direction}>
         
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }
