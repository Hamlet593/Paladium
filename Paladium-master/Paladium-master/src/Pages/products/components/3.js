import { Button } from "react-bootstrap";
import "./body.css"

export default function Uav () {
  return (
    <div className="uav">
      <Button href="/UAV_EPO">UAV EPO</Button>
      <Button href="/UAV_AG-10">UAV AG-10</Button>
      <Button>HF-60B</Button>
      <Button>BD-21</Button>
      <Button>PT-700</Button>
      <Button>TS-3A</Button>
    </div>
  )
}