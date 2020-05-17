import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {isMobileOnly} from 'react-device-detect';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    let name;
    if(isMobileOnly){
      name = <h2 className="mb-0">{this.landingData.firstName}
        <span className="text-primary">{this.landingData.lastName}</span>
      </h2>;
    } else {
      name = <h1 className="mb-0">{this.landingData.firstName}
        <span className="text-primary">{this.landingData.lastName}</span>
      </h1>;
    }
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          {name}
          <div className="subheading mb-5">{this.landingData.phoneNumber} ·
            <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
