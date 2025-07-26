import { Tabs, Tab } from "react-bootstrap";
import HLList from "./HLList";
import LLList from "./LLList";

export default function ReqTabs() {
  return (
    <Tabs defaultActiveKey="hl" id="req-tabs" className="mb-3">
      <Tab eventKey="hl" title="High Level Reqs">
        <HLList />
      </Tab>
      <Tab eventKey="ll" title="Low Level Reqs">
        <LLList />
      </Tab>
    </Tabs>
  );
}
