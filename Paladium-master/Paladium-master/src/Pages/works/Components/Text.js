import "./style.css";
import { Button } from "react-bootstrap"

export function Text() {
  return (
    <div className="projtext">
      <h4>
        We treat all our clients as partners since we believe that partnership
        is the core value in business relations.
      </h4>
      <p>
        Our company is active in providing services and in the selling and
        purchasing of service or products for our projects and clients. We
        employ detailed procedures to ensure fairness and diligence. The company
        also provides support for the development of systems applications,
        training and process improvement. Our company has sustained as an
        organization built on honesty and truthfulness. Our success allows us
        the opportunity to help our clients to achieve their goals. We believe
        the key to success is building effective and transparent communication
        within the company to encourage employees to take responsibility for
        doing add-value actions which brings the satisfaction of the customer.
        The values created within the company are easily transformed to the
        suppliers and customers creating mutual beneficial and non-stop
        workflow.
      </p>
      <div className="projlink">
        <Button href="/projects">Our Projects</Button>
      </div>
    </div>
  );
}

export default Text;
