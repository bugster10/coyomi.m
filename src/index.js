import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import $ from './vendor/js/jquery-3.4.1.min.js'
import jQuery from './vendor/js/jquery-3.4.1.min.js';
import './vendor/css/bootstrap.min.css';
import './css/styles.css';

import goth from './media/mpOVvlu.png';

import mw1 from './media/myworks1.png';
import mw2 from './media/myworks2.png';
import mw3 from './media/myworks3.png';
import mw4 from './media/myworks4.png';
import mw5 from './media/myworks5.png';

const fadeImages = [
    mw1,
    mw2,
    mw3,
    mw4,
    mw5,
];
  
const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
};

const enThings = [
    'SPOOKY','COOL','WEIRD',
    'COMFY', 'BLOODY'
];

const jpThings = [
    '怖い','オシャレ','不気味',
    '心地いい', '血塗れ'
];

const enDict = {
    a1:"I'm COYOMI (暦)",
    a2:"An Illustrator from Japan.",
    a3:"Currently living in Tokyo and finishing up College. I taught myself English by playing games and watching movies.",
    a4: "(especially Tarantino and Marvel)",
    a5: "...And I just really like to draw... things...",
    mw1: "I can draw ",
    mw2: enThings,
    mw3: " things",
    ms1: "SKILLS",
    ms2: "Comics, posters and some web design. I'm always looking for freelance work or commissions.",
    ms3: "(Also looking to get into 3D modeling / graphic design!)",
    c1: "Think you could use my help?",
    c2: "Send me a message.",
    c3: "MESSAGE ME",
};

const jpDict = {
    a1:"I'm COYOMI (暦)",
    a2:"東京住み作者です。",
    a3:"尚、美大学をやっている. ゲームや海外映画のお陰で英語を独学しました。",
    a4: "(特にタランティーノとマーベル)",
    a5: "...それと、絵を描くが好き",
    mw1: "例えば、",
    mw2: jpThings,
    mw3: " 物も作れる",
    ms1: "得意分野",
    ms2: "コミック、ポスターと少しウェブデザイン。何時でもフリーランス仕事と依頼絵に頼んでいいです。",
    ms3: "(グラフィックデザインもCGIも興味があります！)",
    c1: "頼みがあると思いますか？",
    c2: "メッセージ送ってね",
    c3: "メッセージ送る",
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: localStorage['LANG'] == 'EN' ? enDict : jpDict
        };
        this.changeLang = this.changeLang.bind(this);
    }

    changeLang(e){
        localStorage['LANG'] = e;
        this.setState(localStorage['LANG'] == 'EN' ? {data:enDict} : {data:jpDict})
    }
    componentWillMount(){

    }
    render() {
        return(
            <React.Fragment>
            {/* <Intro/> */}
            <div id="change-language" className="bg-light">
            <a className="btn-lang" onClick={() => this.changeLang('EN')}>EN</a>
            <span>|</span>
            <a className="btn-lang" onClick={() => this.changeLang('JP')}>JP</a>
            </div>
            <AboutMe a1={this.state.data.a1} a2={this.state.data.a2} a3={this.state.data.a3} a4={this.state.data.a4} a5={this.state.data.a5}/>
            <MyWorks mw1={this.state.data.mw1} mw2={this.state.data.mw2} mw3={this.state.data.mw3}/>
            <MySkills ms1={this.state.data.ms1} ms2={this.state.data.ms2} ms3={this.state.data.ms3}/>
            <Contact c1={this.state.data.c1} c2={this.state.data.c2} c3={this.state.data.c3}/>
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
                    <h1 className="card-header"><strong>{this.props.a1}</strong></h1>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.a2}</h4>
                        <p className="thick-font">
                        {this.props.a3}<small>{this.props.a4}</small>
                        <br></br>
                        {this.props.a5}
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
                        <h6 className="text-nowrap bg-light border border-light rounded p-2">{this.props.mw1}<span id="what-thing-container" className="border rounded border-secondary text-center bg-dark text-white"><span id="what-thing">{this.props.mw2[0]}</span></span>{this.props.mw3}</h6>
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
    };
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
                    <h4 className="text-dark"><strong>{this.props.ms1}</strong></h4>
                    <div className="card mx-2">
                <p className="text-dark">
                {this.props.ms2}
                <br/>
                <small>{this.props.ms3}</small>
                </p>
                    </div>
                    </div>
                </div>
                <div id="myskills-col" className="col-6">
                <div id="skill" className="text-center">{this.state.skill}</div>
                <img id="goth" src={goth}/>
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
                {this.props.c1}
                <br/>
                {this.props.c2}
                <br/>
                <a id="msgme" href="mailto:koyo3.yomiko54@gmail.com"><button type="button" className="btn btn-info">&#9993; {this.props.c3}</button></a>
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
                        $('#what-thing').text(localStorage['LANG']=='EN'?enThings[($(this).attr('data-key'))]:jpThings[($(this).attr('data-key'))])
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
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div >
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} />
          </div>
        </div>
      </Fade>
    );
};
};
export {App};