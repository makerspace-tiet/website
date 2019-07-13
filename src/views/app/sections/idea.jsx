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
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionIdea() {
  return (
    <>
      <Container className="tim-container" >
      
      <br />

        <div className="title" id="idea">

          <h1><i className="nc-icon nc-bulb-63" />IDEA</h1>
        </div>
        <div id="typography">
          <Row>
            <div className="typography-line">
              <h3>
                
              The idea of makerspace is to provide an ​open culture at innovation, problem solving and design​. To solve problems with innovative ideas and create new solutions andwork on them in teams to bring them to life and action. A place where ideas are celebrated.
              </h3>
            </div>
          </Row>
        </div>
        <div className="title" >
          <h1>GOALS</h1>
        </div>
        <div id="typography">
          <Row>
          <div className="typography-line">
              <h3>
                <span className="note"> #1</span>
                To create a community, free for all to join, focused on spreading awareness about various technical areas.
              </h3>
            </div>
            <div className="typography-line">
              <h3>
                <span className="note"> #2</span>
                To promote the culture of attending various technical events by spreading news and helping them to prepare for these competitions .
              </h3>
            </div>
            <div className="typography-line">
              <h3>
                <span className="note"> #3</span>
                Undertake various open source projects
              </h3>
            </div>
            <div className="typography-line">
              <h3>
                <span className="note"> #4</span>
                Have Frequent guest lectures by the leaders and experts of industry sharing their knowledge and experience
              </h3>
            </div>
          </Row>
        </div>

        <br />
        
      </Container>
    </>
  );
}

export default SectionIdea;
