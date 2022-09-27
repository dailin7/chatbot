import React from "react";
import { Collapse } from 'antd';
import bus_map from "/Users/dailin/Desktop/chatbot/client/src/resources/cabs-system-map.jpg";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Busses: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div>
      <img src={bus_map} alt="bus_map" />
      
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header="BE (BUCKEYE EXPRESS)" key="1">
        <p>{text}</p>
        </Panel>
        <Panel header="CC (CAMPUS CONNECTOR)" key="2">
        </Panel>
        <Panel header="ER (EAST RESIDENTIAL)" key="3">
        </Panel>
      </Collapse>
    </div>
    
  );

};

export default Busses;
