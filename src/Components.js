import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
   
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  }


class App extends React.Component {
    // May have issues with false
    // Perhaps use null or empty str
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // introContainer: false,
    //         // introId: false,
    //     };
    // }
    // componentDidMount(){
    //     this.setState({isLoading:false,
    //     introContainer:"intro-container",
    //     introClass:"row bg-intro"});
    // }
    render() {
        // if (this.state.isLoading) return (
        //     <Intro introClass="row"/>
        // );
        return(
            <React.Fragment>
            <Intro/>
            <AboutMe/>
            <MyWorks/>
            </React.Fragment>
        );
    };
};

class Intro extends React.Component {
    render() {
        return(
            <div id="intro" className="row bg-intro">
                <div className="container d-flex align-items-center intro-image">
                        <div className="card-body text-white d-flex justify-content-center">
                            <div className="jumbotron bg-intro-card text-center">
                                <h1>Hi. I'm COYOMI（暦）</h1>
                                <h2>I'm an Illustrator/Designer</h2>
                            </div>
                        </div>
                    </div>
            </div>
        );
    };
};

class AboutMe extends React.Component {
    render() {
        return(
            <div id="aboutme" className="row p-15">
                <div className="col card bg-aboutme-card text-center">
                    <h1 className="card-header"><strong>ABOUT ME</strong></h1>
                    <p className="card-body">
                        <h4 className="card-title">I'm a Illustrator from Japan.</h4>
                        Currently living in Tokyo and finishing up College.
                        I taught myself English by playing games and watching movies. <small className="">(especially Tarantino and Marvel)</small>
                        <br/>
                        <span>&nbsp;</span>
                        <br/>
                        ...And I just really like to draw... things...
                    </p>
                </div>
            </div>
        );
    };
};

class MyWorks extends React.Component {
    render(){
        return(
            <div id="myworks" className="row p-5">
                    <div className="col-4">
                        <h3>Here are a few things:</h3>
                        <li>Spooky things.</li>
                        <li>Happy things.</li>
                        <li>Weird things.</li>
                        <li>Cool things.</li>
                    </div>
                    <div id="myworks-img" className="col-8">
                    <Slideshow/>
                    </div>

            </div>
        );
    };
};

const Slideshow = () => {
    return (
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src="../src/media/myworks1.png" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src="../src/media/myworks2.png" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src="../src/media/myworks3.png" />
          </div>
        </div>
      </Fade>
    )
  }

export {App};