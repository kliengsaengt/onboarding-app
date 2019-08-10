import React, { Component } from 'react'
class Personal extends Component {
  // state = {

  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = ( ) => {
    console.log('submttt')
  }
  
  render() {
    return (
      <div>
        <div>Personal</div>

        <div>
          <form>
            <h2>Basic Information</h2>
            <label>Name</label>
            <input name='name'  />
            <input name='lastname' />

            <label>Birth Date</label>
            <input name='birthdate' />


            <label>SSN</label>
            <input name='ssn' />

            <h2>Address</h2>



            <h2>Contact</h2>

            <button onSubmit={this.handleSubmit}>
              Save
            </button>
          </form>
        </div>

      </div>
    )
  }
}

export default Personal