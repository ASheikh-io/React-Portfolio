import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.images.letsenhance.io/thumbnails/s3/18238136/json?response-content-disposition=attachment%3B+filename%2A%3Dutf-8%27%27ahmed_sheikh_auto_x1.jpg&response-content-type=image%2Fjpeg&signature=NikOm1IyQhgqtFzcFonJaq9JzyU%3D"
              alt="profile picture"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React |  NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ahmed-sheikh-04240/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/ASheikh-io" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Email */}
          <a href="ahsheikh.a@gmail.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;