import React, { Component } from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import About from "./body/About";
import ITnuoiIT from "./body/ITnuoiIT";
import CallDonate from "./body/CallDonate";
import Value from "./body/Value";
import Activitives from "./body/Activitives";
import Staffs from "./body/Staffs";
import Contact from "./body/Contact";
import Video from "./body/Video";
import Partners from "./body/Partners";
// import Movetop from "./body/Movetop";

class Home extends Component {
 
  render() {
    return (
      <>
        <Header/>
        <ITnuoiIT/>
        <CallDonate/>
        <About/>
        <Staffs/>
        <Value/>
        <Video/>
        <Activitives/>
        <Partners/>
        <Contact/>
        <Footer/>
        {/* <Movetop/Movetop> */}
      </>
    );
  }
}

export default Home;
