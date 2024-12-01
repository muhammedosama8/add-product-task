import { Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './pages/Header';
import { useSelector } from 'react-redux';
import Product from './pages/Product';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';

function App() {
  const lang = useSelector((state) => state.auth.lang);
  return (
    <div className={`${lang}`}>
      <Header />
      <Row className='gutter'>
        <Col md={3} className='navbar-section'>
          <Navbar />
        </Col>
        <Col md={9} className='product-section'>
          <Product />
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default App;
