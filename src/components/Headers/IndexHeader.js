/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import Particles from 'react-particles-js';

// reactstrap components
import { Container,Button } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
    
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/earth.jpg") + ")",
            "overflow": "hidden"
            
        }}
      >
        
        <div className="filter" />
        
        <div className="content-center">
        
        <Particles 
        style={{
            "z-index":"-1",
            "width": "100%",
            "height": "100%",
            left: "0px",
  top: "0px",
            "position": "absolute"
          }}
          params={{
            
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
                }}
          />

          <Container style={{
            "z-index":"9999",
            "font-family": "'Raleway', sans-serif"
            
          }}>
          
            <div className="title-brand">
              <h1 className="presentation-title">Maker Space TIET </h1>
              <div className="fog-low">
                {/* <img alt="..." src={require("assets/img/fog-low.png")} /> */}
              </div>
              <div className="fog-low right">
                {/* <img alt="..." src={require("assets/img/fog-low.png")} /> */}
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
               Open Commuity for Technology at Thapar Institute, Patiala with an Aim to make a Difference.
            </h2>
            <br />

            <div className="motto text-center">
            <Button
              href="#"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
              
            >
              <i className="fa fa-play" />
              Watch Launch Teaser
            </Button>
            
            <Button
              href="/launch"
              className="btn-round mr-1"
              color="neutral"
            
              outline
              
            >
              Launch Event Page
            </Button>
            </div>
          </Container>
          
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
