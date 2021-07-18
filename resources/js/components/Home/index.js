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
import Shares from "./body/Shares";
import Partners from "./body/Partners";
import Movetop from "./body/Movetop";
import ContentAPI from '../../api/contentAPI';
import CampaignAPI from '../../api/campaignsAPI';
import SharingAPI from '../../api/sharingAPI';
import PartnerAPI from '../../api/partnerAPI';
import ActivitiesAPI from '../../api/activitiesAPI';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sharing: [],
      partner: [],
      activities: [],
      campaigns: "",
      title: "",
      content: "",
      img: ""
    }
  }
  getAllPartners = () => {
    PartnerAPI.getAll()
      .then((res) => {
        this.setState({ partner: res })
        console.log(res);
      })
      .catch((err) => { })
  }
  getallSharing = () => {
    SharingAPI.getAll()
      .then((res) => {
        this.setState({ sharing: res })
      })
      .catch((err) => { })
  }
  getAllCampaigns = () => {
    CampaignAPI.getAll()
      .then((res) => {
        this.setState({ campaigns: res[0] })
        // console.log(typeof res[0].description);
      })
      .catch((err) => { })
  }
  getAllContent = () => {
    ContentAPI.getAll()
      .then((res) => {
        let arrTitle = [];
        let arrContent = [];
        let arrImg = []
        console.log(res);
        res.map(data => {
          arrTitle.push(data.title);
          arrContent.push(data.content);
          arrImg.push(data.img);
          return null;
        })
        console.log(arrImg);
        this.setState({
          title: arrTitle,
          content: arrContent,
          img: arrImg
        });
      })
      .catch((err) => { })
  }
  getAllActivities=()=>{
    ActivitiesAPI.getAll()
      .then((res) => {
        this.setState({ activities: res })
      })
      .catch((err) => { })
  }
  componentDidMount = () => {
    this.getAllContent();
    this.getAllPartners();
    this.getAllCampaigns();
    this.getAllActivities();
    this.getallSharing();
  }
  render() {
    return (
      <>
        <Header />
        <ITnuoiIT title={this.state.campaigns.name} content={this.state.campaigns.description} />
        <CallDonate title={this.state.title[0]} content={this.state.content[0]} />
        <About title={this.state.title[1]} content={this.state.content[1]} />
        <Staffs />
        <Value />
        <Video title={this.state.title[2]} content={this.state.content[2]} url={this.state.img[2]} />
        <Activitives activities={this.state.activities}/>
        <Shares sharing={this.state.sharing} />
        <Partners partner={this.state.partner} />
        <Contact />
        <Footer />
        <Movetop />
      </>
    );
  }
}

export default Home;
