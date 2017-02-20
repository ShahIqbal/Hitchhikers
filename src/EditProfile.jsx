
import React from 'react'
import { Link } from 'react-router'

class EditProfile extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
		    name: "",
	      email: "",
	      bio: "",
	      location: "",
	      imageFile: null,
	      imageUrl: null,
	      saving: false,
	      nameErrors: [],
	      emailErrors: []
		}

		this.changeName = this.changeName.bind(this)
		this.changeEmail = this.changeName.bind(this)
		this.changeBio = this.changeName.bind(this)
		this.updateFile = this.updateFile.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	changeName (event) {
		this.setState({name: event.target.value})
	}

	changeEmail (event) {
		this.setState({email: event.target.value})
	}

	changeBio (event) {
		this.setState({bio: event.target.value})
	}

	updateFile (event) {
    var file = event.currentTarget.files[0]
    var fileReader = new FileReader()
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this)

    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  handleSubmit () {
    this.setState({saving: true})
    this.render()
    var formData = new FormData()
    formData.append("user[name]", this.state.name)
    formData.append("user[email]", this.state.email)
    formData.append("user[bio]", this.state.bio)

    if (this.state.imageFile) {
    	formData.append("user[imageFile]", this.state.imageFile)
    }
  }

  render() {

  	var saveButtonClass = this.state.saving ? "save-profile-button-disabled" : "save-profile-button"
    var saveButtonText = this.state.saving ? "Saving..." : "Save"

    return(
      <div className="edit-profile">
        <header className="edit-profile-header">Required</header>
        <form>
   
          <label>
            First Name<input type="text" onChange={this.changeName} value={this.state.name} />
          </label><br />
          <label>
            Last Name<input type="text" onChange={this.changeName} value={this.state.name} />
          </label><br />

          <label>
            Email Address<input type="text" onChange={this.changeEmail} value={this.state.email} />
          </label><br />

          <label>
            Phone<input type="text" onChange={this.changeName} value={this.state.name} />
          </label><br />

          <label>
            City<input type="text" onChange={this.changeName} value={this.state.name} />
          </label><br />

    
        </form>

        <header className="edit-profile-header">Optional</header>
        <form>
          <label>
            Describe Yourself<textarea rows="5" cols="20" onChange={this.changeBio} value={this.state.bio} />
          </label><br />
          <p>HichHikers is built on relationships. Help other people get to know you.</p>
          <p>Tell them about the things you like: What are 5 things you can’t live without? Share your favorite travel destinations, books, movies, shows, music, food.</p>
          <p>Tell them about you: Do you have a life motto?</p>
        </form>

         <header className="edit-profile-header">Profile Photo</header>
        <form>
          <img className="profile-pic" src={this.state.imageUrl} />
          <div className="edit-profile-pic-text">
            Upload a photo
            <div id="upload-button-container"><input type="file" onChange={this.updateFile} /><div id="upload-button">Upload a file from<br />your computer</div></div>
          </div>
        </form>

        <button onClick={this.handleSubmit} id={saveButtonClass}>{saveButtonText}</button>
        <button onClick={this.handleViewProfileClick} className="white-button" id="view-profile-button">
          <Link to='/show-profile' className='view-profile-button'>View Profile</Link>
        </button>

        <button onClick={this.handleViewProfileClick} className="white-button" id="driver-profile-button">
          <Link to='/driver-profile' className='driver-profile-button'>Driver Profile</Link>
        </button>
  
  
      </div>
    );
  }


}

module.exports = EditProfile;