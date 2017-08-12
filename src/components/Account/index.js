import React from 'react';
/* var React = require('react'); */

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

  showToken = () => {
    console.log(this.state.token);
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

  	

 /*componentWillMount() {
    fetch('http:/localhost:8000/api/userName'
    ).then( response => {
      return response.json();
    }).then( user => {
      this.setState({ userName: user })    
    });
    console.log('userName set and component mounted');
  } 


  componentWillMount() {
    fetch('http://localhost:8000/api/userName'
    ).then(function(response) {
      return response.json();
    }).then(function(user) {
      this.setState({ userName: user }) 
    }.bind(this));
   

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
      this.setState({ markup: 
        <div>
          <h1>{this.state.userName} Account Information</h1> 
          <input style={{width: '40%'}} type="text" onChange={this.changeUserName} />
          <button style={{width: '40%'}} onClick={this.bob}>Button</button>
        </div>
      });
      console.log('userName updated and component rerendered');
    } else if (prevState.userName === this.state.userName) {
      console.log('userName not updated');
    }
  }

  
  changeUserName = function(e) {
    this.setState({userName: e.target.value}); 
  }.bind(this);

  changeUserName = e => {
    this.setState({userName: e.target.value}); 
  } 

  bob = () => {
    this.setState({userName: 'Bob'});
  }


foo = () => {
  let names = [];
  for (const name of Object.getOwnPropertyNames(Account)) {
    names.push(name);
  }
  console.log(names);
}

  CheckIfUserSet = () => {
    const markup =

      React.createElement(
        'div',
        null,

          React.createElement(
            'h1',
            null,
            this.state.userName,
            ' Account Information'
          ),

          React.createElement(
            'input', 
            { 
              style: { width: '40%' }, 
              type: 'text', 
              onChange: this.changeUserName 
            }
          ),

          React.createElement(
            'button',
            { 
              style: { width: '40%' }, 
              onClick: this.bob 
            },
            'Button'
          ),
      );

    if (this.state.userName !== '') {
      console.log(' return markup');
      return (
        markup
      );
    } else {
      console.log( 'this.state.userName = \'\'');
    }
  } 

  CheckIfUserSet = () => {
    const markup =
        <div>
          {<h1 key={0}>{this.state.userName} Account Information</h1>} 
          {<input key={1} style={{width: '40%'}} type="text" onChange={this.changeUserName} />}
          {<button key={2} style={{width: '40%'}} onClick={this.bob}>Button</button>}
        </div>

    if (this.state.userName !== '') {
      console.log(' return markup');
      return (
        markup
      );
    } else {
      console.log( 'this.state.userName = \'\'');
    }
  } */
  render() {
    /*const style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };*/

    return ( 
      <div>
        {/*<div style={style}>
          this.CheckIfUserSet()
        </div>*/}
        {/*<button onClick={this.foo}  >button</button>*/}
	{/*<a href="http://localhost:8000/api/test">button</a>*/}

	<input type="text" name="name" onChange={this.handleName} />
	<input type="text" name="category" onChange={this.handleCategory} />
	<input type="text" name="date" onChange={this.handleDate} />
	<button onClick={this.storeMeeting}>Button</button>
        <button onClick={this.showToken}>Token</button>

      </div>
    );
  }
}
export default Account;
