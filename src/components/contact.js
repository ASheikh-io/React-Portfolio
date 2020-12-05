import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ahmed Sheikh</h2>
            <img
              src="https://cdn.images.letsenhance.io/thumbnails/s3/18238136/json?response-content-disposition=attachment%3B+filename%2A%3Dutf-8%27%27ahmed_sheikh_auto_x1.jpg&response-content-type=image%2Fjpeg&signature=NikOm1IyQhgqtFzcFonJaq9JzyU%3D"
              alt="avatar"
              style={{height: '350px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>  
                A current masters candidate for Policy, Planning and Management at the USM Muskie School of Public Service 
                interested in furthering and expanding my skillset in a tech driven world. Coming from a background in social services and policy work, 
                I aim to become a full stack software developer and create bridges between social services and the world of tech. With UNH's Coding Bootcamp, 
                I envision this dream becoming more and more a reality.  
              </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (207) 344-5405
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    https://www.linkedin.com/in/ahmed-sheikh-04240/
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ahsheikh.a@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    ASheikh-io
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;