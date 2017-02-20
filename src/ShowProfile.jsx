import React from 'react'
import { Link } from 'react-router'
/*var ClientActions = require('../actions/ClientActions.js');
var UsersStore = require('../stores/UsersStore.js');
var UserStore = require('../stores/UserStore.js');

*/

var ShowProfile = React.createClass({

  contextTypes: {router: React.PropTypes.object.isRequired},

  getInitialState: function () {
    return({
      name: "Chris Paul",
      bio: "Hi I'm Chris Paul bro",
      location: "Toronto",
      currentUser: null,
      imageUrl: "http://clearviewseattle.com/wp-content/uploads/chris-paul_416x416.jpg",
      properties: []
    });
  },

  render: function () {
    return(
      <div className="show-profile">
         <img id='show-profile-image'className="profile-pic" src={this.state.imageUrl} />
        <article>
          <h1>{"Hey, I'm "}{this.state.name}!</h1>
          <div className="location">{this.state.location}</div>
         
          {this.state.bio}
        </article>
        <p><Link to="/"> Edit Profile</Link></p>
      </div>
    );
  }
});

module.exports = ShowProfile