import "./body.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function ToolbarBasicExample() {
  return (
    <div className="uavbtn11">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="Third group">
          <Button href="/UAV_EPO">EPO-02P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/UAV_AG-10">RIG-01P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/VX-5P">VX-5P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/FEAR-01P">GIR-01P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/ZT-05P">ZT-05P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/ZT-10P"> ZT-10P</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default ToolbarBasicExample;
