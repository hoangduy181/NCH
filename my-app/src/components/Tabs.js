import React, {useState, useEffect} from "react";
import {Tabs, Tab} from 'react-bootstrap'
import {Menu} from './MenuScreen'
function MenuTabs({sendMsg}) {

    const [key, setKey] = useState('all');
    const handleSelect = (k) => 
    {
      setKey(k);
      let pos = document.documentElement.scrollTop || document.body.scrollTop;
      if(pos > 260)
      window.scrollTo({
            top: 230,
            left: 0,
            behavior: "smooth"
          })
    }
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => handleSelect(k)}
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
        <Tab eventKey="salad" title="Salad">
        <Menu sendMsg={sendMsg} cataId='Salad'/>
        </Tab>
        <Tab eventKey="sushi" title="Sushi">
        <Menu sendMsg={sendMsg} cataId='Sushi'/>
        </Tab>
        <Tab eventKey="beefsteak" title="Beefsteak">
        <Menu sendMsg={sendMsg} cataId='Beefsteak'/>
        </Tab>
      </Tabs>
    );
  }

export default MenuTabs;