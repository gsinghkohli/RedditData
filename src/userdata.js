import React from "react";

export default class UserData extends React.Component {
  constructor(props) {
    super(props)
    this.callRedditApi = this.callRedditApi.bind(this)
    this.state = {
      data: [],
      value: 1
    };
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  callRedditApi = function(val) {
    //get users data
    let url = "https://reqres.in/api/users/?page="+val;
    fetch(url)
      .then(result => {
       // console.log("result");
        return result.json();
      })
      .then(jsonResult => {
        let users = jsonResult.data.map(user => {
          return (
            <div key={user.id}>
              <li>{user.first_name} {user.last_name}</li>
              <img src={user.avatar} />
            </div>
          );
        });
        this.setState({ data: users });
      })
  };
  render() {
    return (
      <div>Select Page :  
        <select value={this.state.value} onChange={this.onChange.bind(this)} name="users">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select><br/>
        <button onClick={() => this.callRedditApi(this.state.value)}>Get Data</button>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}
