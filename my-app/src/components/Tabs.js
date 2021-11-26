import React, {useState} from "react";
import {Tabs, Tab} from 'react-bootstrap'
import {Menu} from './MenuScreen'
function MenuTabs({sendMsg}) {
    const [key, setKey] = useState('all');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 bg-light"
        style={{position: "sticky",  top: "4.5rem", zIndex:"1000"}}
      >
        <Tab eventKey="all" title="All">
          <Menu sendMsg={sendMsg}/>
        </Tab>
        <Tab eventKey="seafood" title="Sea Food">
        <Menu sendMsg={sendMsg} cataId='sef'/>
        </Tab>
        <Tab eventKey="fastfood" title="Fast Food">
        <Menu sendMsg={sendMsg} cataId='faf'/>
        </Tab>
        <Tab eventKey="desserts" title="Desserts">
        <Menu sendMsg={sendMsg} cataId='des'/>
        </Tab>
        <Tab eventKey="drinks" title="Drinks">
        <Menu sendMsg={sendMsg} cataId='dr'/>
        </Tab>
        <Tab eventKey="noodles" title="Noodles">
        <Menu sendMsg={sendMsg} cataId='ndl'/>
        </Tab>
        <Tab eventKey="dimsum" title="Dimsum">
        <Menu sendMsg={sendMsg} cataId='Dimsum'/>
        </Tab>
      </Tabs>
    );
  }

export default MenuTabs;