import React from 'react';
import { render } from 'react-dom';
import UserData from './userdata'
import { BrowserRouter as Router , Route ,Link} from 'react-router-dom'



class Result extends React.Component{
  render(){
    return (
      <div>
        <h1>Users Directory</h1>
        < UserData />
      </div>
      )
  }
}

//Stateless components
const About = ()=> (
  <h1>Demo About Page</h1>
)

const Links = ()=> (
  <div className="list-group">
    <Link className="list-group-item" exact activeclassname="active" to="/users">Users</Link>
    <Link className="list-group-item" activeclassname="active" to="/about">About</Link>
  </div>
  
)



render(<Router> 
        <div className="row">

        <section className="col-sm-4">
          <Links/>
        </section>

        <section className="col-sm-8">
          <Route exact path="/users" component={Result} />         
          <Route path="/about" component={About} />
        </section>
        </div>
      </Router>,
      document.getElementById('root'))

