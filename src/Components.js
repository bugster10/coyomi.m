import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
   
const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
}

const thingArr = [
    'SPOOKY','COOL','WEIRD',
    'COMFY', 'BLOODY'
]


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
    render() {
        // if (this.state.isLoading) return (
        //     <Intro introClass="row"/>
        // );
        return(
            <React.Fragment>
            {/* <Intro/> */}
            <AboutMe/>
            <MyWorks/>
            <MySkills/>
            <Contact/>
            <Footer/>
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
            <div id="aboutme" className="row p-15 text-dark">
                <div className="col card bg-aboutme-card text-center text-dark">
                    <h1 className="card-header"><strong>I'm COYOMI (暦)</strong></h1>
                    <div className="card-body">
                        <h4 className="card-title">An Illustrator from Japan.</h4>
                        <p className="thick-font">
                        Currently living in Tokyo and finishing up College.
                        I taught myself English by playing games and watching movies. <small className="">(especially Tarantino and Marvel)</small>
                        <br></br>
                        ...And I just really like to draw... things...
                        </p>
                    </div>
                </div>
            </div>
        );
    };
};

class MyWorks extends React.Component {
    render(){
        return(
            <div id="myworks" className="bg-dark">
            <div className="mx-auto row container p-2 d-flex justify-content-center">
                        <h6 className="text-nowrap bg-light border border-light rounded p-2">I can draw <span id="what-thing-container" className="border rounded border-secondary text-center bg-dark text-white"><span id="what-thing">SPOOKY</span></span> things</h6>
            </div>
                    <div id="myworks-img" className="row">
                        <div id="myworks-col" className="col">
                    <Slideshow/>
                        </div>
                    </div>
            </div>

        );
    };
};

const skillsArr = [
    'Comics', 'Posters', 'Web',
    '日本語', 'English',
]
let counter = 0;
class MySkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            skill: skillsArr[0],
        };
    }
    componentDidMount(){
        this.intervalId = setInterval(() => {
            counter = counter < 4 ? counter + 1 : 0;
            this.setState({
                index: this.state.index < 4 ? this.state.index + 1 : 0,
                skill: skillsArr[counter]
            })
        }, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render(){
        return(
            <div id="myskills" className="row">
                <div id="myskills-text-col" className="col-6 text-center pt-4-alt ml-2 pr-5-alt">
                    <div id="myskills-card">
                    <h4 className="text-dark"><strong>SKILLS:</strong></h4>
                    <div className="card mx-2">
                <p className="text-dark">
                Comics, posters and some web design. 
                I'm always looking for freelance work or commissions.
                <br/>
                <small>(Also looking to get into 3D modeling / graphic design!)</small>
                </p>
                    </div>
                    </div>
                </div>
                <div id="myskills-col" className="col-6">
                <div id="skill" className="text-center">{this.state.skill}</div>
                <img id="goth" src="../src/media/mpOVvlu.png" />
                </div>
            </div>
        );
    }
};

class Contact extends React.Component {
    render(){
        return(
            <div id="contact" className="container d-flex justify-content-center mt-4">
                <div id="contact-container" className="card text-white text-center p-4">
                Think you could use my help?
                <br/>
                Send me a message.
                <br/>
                <a id="msgme" href="mailto:bugster111@gmail.com"><button type="button" className="btn btn-info">&#9993; MESSAGE ME</button></a>
                </div>
            </div>
        );
    };
};

class Footer extends React.Component {
    render(){
        return(
            <footer id="footer" className="footer bg-dark mt-2">
                <div className="container">
                    <div><a href="https://twitter.com/Ma2_Ereki" className="fa text-white fa-twitter">@Ma2_Ereki</a></div>
                    <div><a href="https://www.instagram.com/yomico_543/" className="fa text-white fa-instagram"> yomico_543</a></div>
                </div>

            </footer>
        );
    };
};



class Slideshow extends React.Component {
    componentDidMount(){
        $(function() {
            (function($) {
                var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            
                $.fn.attrchange = function(callback) {
                    if (MutationObserver) {
                        var options = {
                            subtree: false,
                            attributes: true
                        };
            
                        var observer = new MutationObserver(function(mutations) {
                            mutations.forEach(function(e) {
                                callback.call(e.target, e.attributeName);
                            });
                        });
            
                        return this.each(function() {
                            observer.observe(this, options);
                        });
            
                    }
                }
            })(jQuery);
            
            //Now you need to append event listener
            $('body *').attrchange(function(attrName) {
            
                if(attrName=='class' && $(this).hasClass('active')){
                    $('#what-thing').animate({
                        top:'-15px'
                    }, 250, () => {
                        $('#what-thing').text('');
                        $('#what-thing').css({top:'15px'});
                        $('#what-thing').text(thingArr[($(this).attr('data-key'))])
                        .animate({top:'0'}, 250); 
                    });
                }else if(attrName=='id'){
                    console.log('id changed');
                }else{
                    //OTHER ATTR CHANGED
                }
            });
            });
    };
    render(){
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
          </div >
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src="../src/media/myworks4.png" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src="../src/media/myworks5.png" />
          </div>
        </div>
      </Fade>
    );
};
};

export {App};