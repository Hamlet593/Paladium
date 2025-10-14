import Button from 'react-bootstrap/Button';
import "./style.css"

function Info() {
    return <div className="info">
        <div className='info1'>
            <h4>PALADIUMTECHSERVICE LIMITED</h4>
            <h3>PaladiumTechService Limited is a multi-directional company specialized in providing comprehensive testing, maintenance and engineering services</h3>
        </div>
        <div className='info2'><Button href='/about' variant="light" className='btn'>Read more</Button></div>
    </div>;
  }
  
  export default Info;