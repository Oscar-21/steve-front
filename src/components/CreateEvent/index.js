import React from 'react';

class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',	
      date: '',	
      category: '',
      image: '',
      preview: '',
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

  handleImage = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ image: file, preview: reader.result });
    };
    reader.readAsDataURL(file);
  }

  storeMeeting = () => {
    const data = new FormData();
    data.append('name', this.state.name);
    data.append('category', this.state.category);
    data.append('date', this.state.date);
    data.append('image', this.state.image);

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

        <label> Event name </label>
	<input type="text" name="name" onChange={this.handleName} />

        <label> Category </label>
	<input type="text" name="category" onChange={this.handleCategory} />

        <label> Date </label>
	<input type="text" name="date" onChange={this.handleDate} />

        <label> Upload Profile Picture </label>
        <input type="file" name="image" onChange={this.handleImage} />
        <img src={this.state.preview} alt="" /> 

	<button onClick={this.storeMeeting}>Create event</button>

	<hr />

      </div>
    );
  }
}
export default CreateEvent;
