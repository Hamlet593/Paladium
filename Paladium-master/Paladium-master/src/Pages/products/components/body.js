import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-bootstrap";
import car from "../../../Components/cardList2/pics/car.svg";
import helmetIcon from "../../../Components/cardList2/pics/helmet.svg";
import aiplaneIcon from "../../../Components/cardList2/pics/airplane.svg";
import tractorIcon from "../../../Components/cardList2/pics/tractor.svg";
import sheildIcon from "../../../Components/cardList2/pics/sheild.svg";
import vestIcon from "../../../Components/cardList2/pics/vest.svg";
import coverIcon from "../../../Components/cardList2/pics/cover.svg";
import opticsIcon from "../../../Components/cardList2/pics/optics.svg";
import accessoriesIcon from "../../../Components/cardList2/pics/accessories.svg";
import communicationIcon from "../../../Components/cardList2/pics/communication.svg";
import nightIcon from "../../../Components/cardList2/pics/night.svg";
import thermalIcon from "../../../Components/cardList2/pics/thermal.svg";
import robotIcon from "../../../Components/cardList2/pics/robot.svg";
import "./style.css";

function GridExample() {
  return (
    <div className="prodcont_1">
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card>
            <Card.Img
              className="icon"
              variant="top"
              alt="AutoSpareParts"
              src={car}
            />
            <Card.Body>
              <Card.Title>
                <NavLink href="/AutoSpareParts">Auto Spare Parts</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              className="icon"
              variant="top"
              alt="UAV"
              src={aiplaneIcon}
            />
            <Card.Body>
              <Card.Title>
                <NavLink href="/UAV">UAV</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              className="icon"
              variant="top"
              alt="TrackedVehiclesSpareParts"
              src={tractorIcon}
            />
            <Card.Body>
              <Card.Title>
                <NavLink href="/TrackedVehiclesSpareParts">
                  Tracked Vehicles Spare Parts
                </NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card>
            <Card.Img
              className="icon"
              variant="top"
              alt="Cover"
              src={coverIcon}
            />
            <Card.Body>
              <Card.Title>
                <NavLink href="/Cover">Cover</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              className="icon"
              variant="top"
              alt="Communication"
              src={communicationIcon}
            />
            <Card.Body>
              <Card.Title>
                <NavLink href="/Communication">Communication</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              className="icon"
              variant="top"
              alt="Robots"
              src={robotIcon}
            />
            <Card.Body>
              <Card.Title>
                <NavLink href="/Robots">Robots</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="weaponry">
        <div className="h3">
          <h3>Weaponry</h3>
        </div>

        <div className="g-3">
          <Row xs={1} md={2} className="g-4">
            <Col className="col1">
              <Card>
                <Card.Img
                  className="icon"
                  variant="top"
                  alt="Helmets"
                  src={helmetIcon}
                />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/Helmets">Helmets</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img
                  className="icon"
                  variant="top"
                  alt="Accessories"
                  src={accessoriesIcon}
                />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/Accessories">Accessories</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img
                  className="icon"
                  variant="top"
                  alt="ArmorPlates"
                  src={sheildIcon}
                />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/ArmorPlates">Armor Plates</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img
                  className="icon"
                  variant="top"
                  alt="BulletprofVest"
                  src={vestIcon}
                />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/BulletprofVest">Bulletprof Vest</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="optics">
        <div className="h3">
          <h3>Optics</h3>
        </div>
        <Row xs={1} md={2} className="g-4">
          <Col className="col1">
            <Card>
              <Card.Img
                className="icon"
                variant="top"
                alt="Optics"
                src={opticsIcon}
              />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/Optics">Daylight Optics</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col1">
            <Card>
              <Card.Img className="icon" variant="top" alt="NightVision" src={nightIcon} />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/NightVision">Night Vision Optics</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col1">
            <Card>
              <Card.Img
                className="icon"
                variant="top"
                alt="ThermalVision"
                src={thermalIcon}
              />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/ThermalVision">Thermal Vision Optics</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GridExample;
