import React, { Component } from "react";
import { Cell, Grid } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div>
        <Grid className="about-grid">
        <Cell col={6}>
          <h1>Ahmed Sheikh</h1>
          <img
            src="https://cdn.images.letsenhance.io/thumbnails/s3/18238136/json?response-content-disposition=attachment%3B+filename%2A%3Dutf-8%27%27ahmed_sheikh_auto_x1.jpg&response-content-type=image%2Fjpeg&signature=NikOm1IyQhgqtFzcFonJaq9JzyU%3D"
            alt="avatar"
            style={{ height: "350px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            A current masters candidate for Policy, Planning and Management at
            the USM Muskie School of Public Service interested in furthering and
            expanding my skillset in a tech driven world. Coming from a
            background in social services and policy work, I aim to become a
            full stack software developer and create bridges between social
            services and the world of tech. With UNH's Coding Bootcamp, I
            envision this dream becoming more and more a reality.
          </p>
        </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
