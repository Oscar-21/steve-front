import React, { Component } from 'react';
import styles from '../../assets/styles';

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
      this.setState({ events: json });
    });
  }

  render() {
    return (
      <div>

        <h1>Events</h1>

        <table style={styles.EventStore.tableStyle}>

          <tr style={styles.EventStore.tableRow}>
            <td style={styles.EventStore.tableDataCell}>Name</td>
            <td style={styles.EventStore.tableDataCell}>Category</td>
            <td style={styles.EventStore.tableDataCell}>Date</td>
          </tr>

          { this.state.events.map((events, index) => (
            <tr>
                <td>{events.name}</td>
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
