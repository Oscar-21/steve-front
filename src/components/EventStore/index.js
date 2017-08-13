import React, { Component } from 'react';

class EventStore extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      token: sessionStorage.getItem('token'),
    };
  }

  componentWillMount() {
    fetch('http://react.app/api/events'
    ).then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({	events: json });
    });
  }

  render() {
    return (
      <div>

        <h1>Events</h1>

        <table style={{border: "0px"}}>

          <tr style={{background: "#cccccc"}}>
            <td style={{width: "150px", textAlign: "center"}}>Name</td>
            <td style={{width: "150px", textAlign: "center"}}>Category</td>
            <td style={{width: "150px", textAlign: "center"}}>Date</td>
          </tr>

          { this.state.events.map((events) => (
            <tr>
                <td>Test</td>
                <td>{events.category}</td>
                <td>{events.date}</td>
            </tr>
          ))}

        </table>          
      </div>    
    ); 
  }
}
export default EventStore;
