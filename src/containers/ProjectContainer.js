// ProjectContainer.js
import React, { Component } from 'react';
import Project from '../components/Project';
import { Card, Container, Divider, Header, Icon } from 'semantic-ui-react';

class ProjectContainer extends Component{
  constructor(){
    super();
    this.state={
      projects:[
        {
          title: 'Polarity',
          image: 'https://i.imgur.com/6rpuqxW.jpg',
          link: 'http://www.polarity3d.com',
          description: 'A website created for a startup company that allows them to update their team members, faqs, and blog posts.',
          technologies: 'JWT, Ruby, Rails API, React, React Router, Semantic-UI',
          primaryTech: ['Rails API', 'React']
        },
        {
          title: 'Lister',
          image: 'https://i.imgur.com/MumfUNw.jpg',
          link: 'https://radiant-thicket-85951.herokuapp.com/',
          description: 'A Rails application that uses Hotwire for quick page loading. This web application allows a user to keep track of various lists and list items for each list. List items can have varying quantity, and both lists and list items can be deleted or marked complete.',
          technologies: 'Ruby, Rails , Hotwire, Bootstrap',
          codeLink: 'https://github.com/GabrielValle91/lister',
          primaryTech: ['Rails', 'Hotwire']
        },
        {
          title: 'PAWS',
          image: 'https://i.imgur.com/UMz13fkm.jpg',
          link: 'https://young-beyond-21632.herokuapp.com/',
          description: 'A React single page application that uses Redux for state management and React Router for navaigation. This web application allows a community to keep track of lost and found pets in an attempt to reunite them with their families. A Rails API is utilized for data storage and Devise provides user authentication.',
          technologies: 'Ruby, Rails API, Devise, React, Redux, React Router, Semantic-UI',
          codeLink: 'https://github.com/GabrielValle91/people-assisting-wandering-strays',
          primaryTech: ['Rails API', 'React']
        },
        {
          title: 'Speed',
          image: 'https://i.imgur.com/jLtCSya.jpg',
          link: 'https://speed-tms.herokuapp.com/',
          description: 'A Ruby on Rails application that implements OAuth for user authentication. This web application provides basic functions of a Transportation Management System. Users can track clients, drivers, locations for pickup or delivery, and shipments. Users have the ability to assign items and drivers to shipments, providing a dispatcher the ability to track work for their drivers. Javascript and JQuery were added to provide additional user functionality. Bootstrap framework provided the CSS for this project.',
          technologies: 'Ruby, Rails, Javascript, JQuery, Bootstrap, OAuth',
          codeLink: 'https://github.com/GabrielValle91/rails-project',
          primaryTech: ['Rails', 'JQuery']
        },
        {
          title: 'Wildcard',
          image: 'https://i.imgur.com/UPuHZZl.png',
          link: 'https://wildcard-sinatra.herokuapp.com/',
          description: 'A Ruby application that utilizes the Sinatra framework. This web application provides basic functions of a Warehouse Management System. Users can track clients, unique items on a per client basis, inventory levels per item and inbound and outbound transactions, and items on each transaction, for clients. Custom CSS and HTML was used for page formatting.',
          technologies: 'Ruby, Sinatra, CSS, HTML',
          codeLink: 'https://github.com/GabrielValle91/sinatra-project',
          primaryTech: ['Sinatra']
        }
      ]
    }
  }
  render(){
    const projectList = this.state.projects.map((project, idx) => {
      return (
        <Project
          key={idx}
          project={project}
        />
      )
    })
    return(
      <div className="project-page">
        <Container className="down-shifted">
          <Header as='h2' icon textAlign='center' color='yellow'>
            <Icon name='code' circular />
            <Header.Content>Projects and Technical Work</Header.Content>
          </Header>
          <Divider hidden section />
          <Card.Group>{projectList}</Card.Group>
        </Container>
      </div>
    )
  }
}

export default ProjectContainer;