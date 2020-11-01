import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CreativeTab from "./tabs/creativetab";
import EnterpreneurTab from "./tabs/entrepreneutab";
import FreeLancerTab from "./tabs/freelancertab";
import SmallbizTab from "./tabs/smallbixtab";
import StudentTab from "./tabs/studenttab";
import DevTab from "./tabs/devtab";

const TabsComp = () => {
  return (
    <>
      <div className="desktop-tab">
        <Tabs>
          <TabPanel>
            <CreativeTab />
          </TabPanel>
          <TabPanel>
            <DevTab />
          </TabPanel>
          <TabPanel>
            <StudentTab />
          </TabPanel>
          <TabPanel>
            <SmallbizTab />
          </TabPanel>
          <TabPanel>
            <EnterpreneurTab />
          </TabPanel>
          <TabPanel>
            <FreeLancerTab />
          </TabPanel>
          <TabList className="tablist">
            <Tab className="tab">Creatives</Tab>
            <Tab className="tab">Developers</Tab>
            <Tab className="tab">Students</Tab>
            <Tab className="tab">Small Businesses</Tab>
            <Tab className="tab">Enterpreneurs</Tab>
            <Tab className="tab">Freelancers</Tab>
          </TabList>
        </Tabs>
      </div>
      <div className="mobile-tab">
        <ul>
          <li>
            <CreativeTab />
          </li>
          <li>
            <DevTab />
          </li>
          <li>
            <StudentTab />
          </li>
          <li>
            <SmallbizTab />
          </li>
          <li>
            <EnterpreneurTab />
          </li>
          <li>
            <FreeLancerTab />
          </li>
        </ul>
      </div>
    </>
  );
};

export default TabsComp;
