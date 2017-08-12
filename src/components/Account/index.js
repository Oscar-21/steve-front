import React from 'react';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',	
      date: '',	
      category: '',	 
      token: sessionStorage.getItem('token'),
    };
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  }

  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  }

  handleDate = (e) => {
    this.setState({ date: e.target.value });
  }


  storeMeeting = () => {
    const data = new FormData();
    data.append('name', this.state.name);
    data.append('category', this.state.category);
    data.append('date', this.state.date);

    fetch('http://react.app/api/savemeet', {
      headers: { 'Authorization': 'Bearer ' + this.state.token },
      method: 'post',
      body: data, 
    }).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error) {
        alert(json.error);
      } else if (json.success) {
        alert(json.success);
      }
    });
  }

  render() {

    return ( 
      <div>
	
	<h1>Create Event</h1>	
	<input type="text" name="name" onChange={this.handleName} />
	<input type="text" name="category" onChange={this.handleCategory} />
	<input type="text" name="date" onChange={this.handleDate} />
	<button onClick={this.storeMeeting}>Button</button>

	<hr />

      </div>
    );
  }
}
export default Account;
