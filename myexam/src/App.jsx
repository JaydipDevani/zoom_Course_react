import React from 'react';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Zoom_Header from './Component/Zoom_Header';
import Zoom_Home from './Component/Zoom_Home';
import Zoom_Footer from './Component/Zoom_Footer';
import Zoom_Terms_Conditions from './Component/Zoom_Terms_Conditions';
import Zoom_Information from './Component/Zoom_Information';
import Zoom_Privacy_Policy from './Component/Zoom_Privacy_Policy';
import Zoom_FAQ from './Component/Zoom_FAQ';
import Zoom_Brandpage from './Component/Zoom_Brandpage';
import Zoom_Gift_Sertificates from './Component/Zoom_Gift_Sertificates';
import Zoom_Affiliate from './Component/Zoom_Affiliate';
import Zoom_Search from './Component/Zoom_Search';
import Zoom_Specialoffers from './Component/Zoom_Specialoffers';
import Zoom_Contact_Us from './Component/Zoom_Contact_Us';
import Zoom_About_Us from './Component/Zoom_About_Us';
import ZoomThreegirl from './Component/ZoomThreegirl';
import Zoom_Fashion from './Component/Zoom_Fashion';
import Zoom_Accessories from './Component/Zoom_Accessories';
import Zoom_Category from './Component/Zoom_Category';
import Zoom_Collection from './Component/Zoom_Collection';
import Zoom_Outfits from './Component/Zoom_Outfits';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  let [Data, setData] = useState([])
  let [Email, setEmail] = useState("")
  let [Password, setPassword] = useState("")
  let [Name, setName] = useState("")
  let [eid, setEid] = useState(-1)
  let [Namevalid, setNamevalid] = useState([]);
  let [Emailvalid, setEmailvalid] = useState([]);
  let [Passwordvalid, setPasswordvalid] = useState([]);
  const [validEmail, setValidEmail] = useState(false);
  let Pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
  let DataSubmit = () => {
    let DataCopy = [...Data]
    if (Name.trim() && Email.trim() && Password.trim()) {
      if (eid >= 0) {
        DataCopy.splice(eid, 1, { Name, Email, Password })
        setEid(-1)
      } else {
        DataCopy.push({ Name, Email, Password })
        localStorage.setItem('Name', Name);
        localStorage.setItem('Email', Email);
        localStorage.setItem('Password', Password);
      }
      setData(DataCopy);
      setName('')
      setEmail('')
      setPassword('')
    }
    else {
      if (Name.trim()) {

      }
      else {
        setNamevalid("Name Is Required!");
      }
      if (Email.trim()) {

      }
      else {
        setEmailvalid("Email Is Required!");
      }
      if (Password.trim()) {

      }
      else {
        setPasswordvalid("Password Is Required!");
      }
    }
  }

  function DeleteData() {
    localStorage.setItem('Name', '');
    localStorage.setItem('Email', '');
    localStorage.setItem('Password', '');
  }
  function UpadateData() {
    let editName = localStorage.setItem('Name', Name);
    let editEmail = localStorage.setItem('Email', Email);
    let editPassword = localStorage.setItem('Password', Password);
  }
  return (
    // <div>
    //   <div style={{ display: "flex" }}>
    //     <input type="text"
    //       placeholder='Enter Your Name' value={Name} onChange={(e) => setName(e.target.value)} />
    //     <p>{Namevalid}</p>
    //   </div>
    //   <br />
    //   <div style={{ display: "flex" }}>
    //     <input type="Email" placeholder='Enter Your Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
    //     <p>{Emailvalid}</p>
    //   </div>
    //   <br />
    //   <div style={{display:"flex"}}>
    //     <input type="Password" placeholder='Enter Your Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
    //     <p>{Passwordvalid}</p>
    //   </div>
    //   <button style={{margin:"10px 0px"}} onClick={DataSubmit}>{eid >= 0 ? "Update" : "Submit"}</button>
    //   <table border={1} width={"50%"} cellPadding={1} cellSpacing={1}>
    //     <tr>
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>Password</th>
    //       <th>Update</th>
    //       <th>Delete</th>
    //     </tr>
    //     <td>{localStorage.getItem('Name', Name)}</td>
    //     <td>{localStorage.getItem('Email', Email)}</td>
    //     <td>{localStorage.getItem('Password', Password)}</td>
    //     <td><button onClick={() => UpadateData()} >Update</button></td>
    //     <td><button onClick={() => DeleteData()} >Delete</button></td>
    //   </table>
    // </div>

    <div>
      {/* <div className='position-sticky'>
        <Zoom_Header />
      </div> */}

      {/* <div>
        <ZoomThreegirl />
      </div> */}
      {/* <div className='pt-5' style={{backgroundColor:"#FAFAFA"}}>
        <div className='container-fluid'>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 bg-white" style={{ padding: "35px 12px" }}>
                <div className='d-flex justify-content-center'>
                  <div className='' style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                    <img src={service1img} alt="" />
                  </div>
                </div>
                <p className='text-center m-0' style={{fontSize:"17px"}}>Free Shipping</p>
                <p className='text-center poppins text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 bg-white" style={{ padding: "35px 12px" }}>
                <div className='d-flex justify-content-center'>
                  <div className='' style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                    <img src={service2img} alt="" />
                  </div>
                </div>
                <p className='text-center m-0' style={{fontSize:"17px"}}>Free Shipping</p>
                <p className='text-center poppins text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 bg-white" style={{ padding: "35px 12px" }}>
                <div className='d-flex justify-content-center'>
                  <div className='' style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                    <img src={service3img} alt="" />
                  </div>
                </div>
                <p className='text-center m-0' style={{fontSize:"17px"}}>Free Shipping</p>
                <p className='text-center poppins text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
              </div>
            </div>
        </div>
      </div> */}

      {/* <div style={{ backgroundColor: "#eee" }}>
        <Container>
          <Row className="mt-5 py-5">
            <Col md={4}>
              <Card>
                <Card.Body style={{ padding: "35px 12px" }}>
                  <div className="d-flex justify-content-center" style={{}}>
                    <div style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                      <Image src={service1img} height={64} />
                    </div>
                  </div>
                  <Card.Title className="text-center mt-3">Free Shipping</Card.Title>
                  <Card.Text className="text-center poppins">Lorem ipsum dolor sit amet, consectetur adipiscing.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body style={{ padding: "35px 12px" }}>
                  <div className="d-flex justify-content-center">
                    <div style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                      <Image src={service2img} height={64} />
                    </div>
                  </div>
                  <Card.Title className="text-center mt-3">Payment Process</Card.Title>
                  <Card.Text className="text-center poppins">Lorem ipsum dolor sit amet, consectetur adipiscing.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body style={{ padding: "35px 12px" }}>
                  <div className="d-flex justify-content-center">
                    <div style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                      <Image src={service3img} height={64} />
                    </div>
                  </div>
                  <Card.Title className="text-center mt-3">Return Policy</Card.Title>
                  <Card.Text className="text-center poppins">Lorem ipsum dolor sit amet, consectetur adipiscing.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <div>
          <div className='position-relative' style={{ padding: "0px 12px", textAlign: "center" }}>
            <img src={seperatorimg} alt="" className='position-absolute' style={{ left: "0", right: "0", justifySelf: "center" }} />
            <h3 className='position-relative text-center mb-2'>Trending Now</h3>
            <p className='text-center' style={{ color: "#666", fontWeight: "400", fontSize: "15px", marginBottom: "22px" }}>We have thousands of new accessories  for men and women in zoom store.</p>
          </div>
        </div>
        <div>
          <Router>
            <Container>
              <Row className="mt-5 mb-3">
                <Col md={12}>
                  <nav className='d-flex justify-content-center'>
                    <ul className='list-unstyled d-flex gap-2'>
                      <li>
                        <Link to="/featured" onClick={() => Btncolor(0)} className={`text-decoration-none ${btncolor[0]==1 ?'btncolor text-light':''}`} style={{color:"black",border:"2px solid #f4f4f4",padding:"9px 20px"}}>Featured</Link>
                      </li>
                      <li>
                        <Link to="/best-sellers" onClick={() => Btncolor(1)} className={`text-decoration-none ${btncolor[1]==1 ?'btncolor text-light':''}`} style={{color:"black",border:"2px solid #f4f4f4",padding:"9px 20px"}}>Best Sellers</Link>
                      </li>
                      <li>
                        <Link to="/new-arrivals" onClick={() => Btncolor(2)} className={`text-decoration-none ${btncolor[2]==1 ?'btncolor text-light':''}`} style={{color:"black",border:"2px solid #f4f4f4",padding:"9px 20px"}}>New Arrivals</Link>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
              <Routes>
                <Route path="/featured" element={<Featured />} />
                <Route path="/best-sellers" element={<BestSellers />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
              </Routes>
            </Container>
          </Router>
        </div>
      </div> */}

      {/* <div>
        <Zoom_Home />
      </div> */}

      {/* <div>
        <Zoom_Fashion />
      </div> */}

      {/* <div>
        <Zoom_Accessories/>
      </div> */}

      {/* <div>
        <Zoom_Category />
      </div> */}

      {/* <div>
        <Zoom_Collection />
      </div> */}

      {/* <div>
        <Zoom_Outfits />
      </div> */}

      {/* <div>
        <Zoom_Terms_Conditions />
      </div> */}

      {/* <div>
        <Zoom_Information />
      </div> */}

      {/* <div>
        <Zoom_Privacy_Policy />
      </div> */}

      {/* <div>
        <Zoom_FAQ />
      </div> */}

      {/* <div>
        <Zoom_Brandpage />
      </div> */}

      {/* <div>
        <Zoom_Gift_Sertificates />
      </div> */}

      {/* <div>
        <Zoom_Affiliate />
      </div> */}

      {/* <div>
        <Zoom_Search />
      </div> */}

      {/* <div>
        <Zoom_Specialoffers />
      </div> */}

      {/* <div>
        <Zoom_Contact_Us />
      </div> */}

      {/* <Router>
        <div>
          Define your routes here
          <Routes>
            <Route path="/home-page" exact component={<Zoom_Home />} />
            <Route path="/terms-conditions" component={<Zoom_Terms_Conditions />} />
            <Route path="/information" component={<Zoom_Information />} />
            <Route path="/about-us" component={<Zoom_About_Us />} />
            <Route path="/privacy-policy" component={<Zoom_Privacy_Policy />} />
            <Route path="/faq" component={<Zoom_FAQ />} />
            <Route path="/brand" component={<Zoom_Brandpage />} />
            <Route path="/gift-certificates" component={<Zoom_Gift_Sertificates />} />
            <Route path="/affiliate" component={<Zoom_Affiliate />} />
            <Route path="/search" component={<Zoom_Search />} />
            <Route path="/specialoffers" component={<Zoom_Specialoffers />} />
            <Route path="/contact-us" component={<Zoom_Contact_Us />} />
          </Routes>
          <Zoom_Footer />
        </div>
      </Router> */}

      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Zoom_Home />
            </Route>
            <Route path="/terms-conditions">
              <Zoom_Terms_Conditions />
            </Route>
            <Route path="/information">
              <Zoom_Information />
            </Route>
            <Route path="/about-us">
              <Zoom_About_Us />
            </Route>
            <Route path="/privacy-policy">
              <Zoom_Privacy_Policy />
            </Route>
            <Route path="/faq">
              <Zoom_FAQ />
            </Route>
            <Route path="/brand">
              <Zoom_Brandpage />
            </Route>
            <Route path="/gift-certificates">
              <Zoom_Gift_Sertificates />
            </Route>
            <Route path="/affiliate">
              <Zoom_Affiliate />
            </Route>
            <Route path="/search">
              <Zoom_Search />
            </Route>
            <Route path="/specialoffers">
              <Zoom_Specialoffers />
            </Route>
            <Route path="/contact-us">
              <Zoom_Contact_Us />
            </Route>
            <Route path="/fashion-page">
              <Zoom_Fashion />
            </Route>
            <Route path="/accessories-page">
              <Zoom_Accessories />
            </Route>
            <Route path="/catagory-page">
              <Zoom_Category />
            </Route>
            <Route path="/collection-page">
              <Zoom_Collection />
            </Route>
            <Route path="/outfits-page">
              <Zoom_Outfits />
            </Route>
          </Switch>
        </div>
      </Router>


    </div>

  );
}

export default App;
