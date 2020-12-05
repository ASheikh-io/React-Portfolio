import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn.images.letsenhance.io/thumbnails/s3/18238136/json?response-content-disposition=attachment%3B+filename%2A%3Dutf-8%27%27ahmed_sheikh_auto_x1.jpg&response-content-type=image%2Fjpeg&signature=NikOm1IyQhgqtFzcFonJaq9JzyU%3D"
                alt="profile picture"
                style={{ height: "350px" }}
              />
            </div>

            <h2 style={{ textAlign: "center", paddingTop: "0em" }}>Ahmed A Sheikh</h2>
            <h4 style={{ textAlign: "center", color: "grey" }}>Full Stack Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              {" "}
              A current masters candidate for Policy, Planning and Management at
              the USM Muskie School of Public Service interested in furthering
              and expanding my skillset in a tech driven world. Coming from a
              background in social services and policy work, I aim to become a
              full stack software developer and create bridges between social
              services and the world of tech. With UNH's Coding Bootcamp, I
              envision this dream becoming more and more a reality.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>(207) 344-5405</p>
            <h5>Email</h5>
            <p>ahsheikh.a@gmail.com</p>
            <h5>GitHub</h5>
            <p>https://github.com/ASheikh-io</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="UNH Coding Bootcamp"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2018}
              endYear={2021}
              schoolName="USM Muskie School of Public Service"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2012}
              endYear={2017}
              schoolName="Bates College"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
