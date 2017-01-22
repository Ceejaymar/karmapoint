import ReactDOM from 'react-dom';
import React from 'react';
import {Link} from 'react-router'


const Userform = React.createClass({
  getInitilState(){
    return {
      name: '',
      zip: null,
      interest: '',
      education: null,
      health: null,
      transit: null,
      housing: null,
      food: null
    }
  },

  handleChange( key, event){
    let data = event.target.value
    this.setState({
      [key]: data
    })
    console.log(this.state)
  },

  handleClick(key, event){
    let final = event.target.value

    this.setState({
      [key]: final
    })

    console.log(this.state)
  },


  render(){
    return(

        <div className="userForm">


          <div>
            <form>
              <div className="insideForm">
                <div className="inputDiv">
                  <div>
                    <input onChange = {this.handleChange.bind(this, "name")}placeholder = "name" type = 'text' />
                  </div>
                  <div>
                    <input onChange = {this.handleChange.bind(this, "zip")}placeholder = "zip"type = 'text' />
                  </div>
                </div>
                <p>Interests</p>
                <div className="checkBoxes">
                  <div>
                    <input onClick = {this.handleClick.bind(this,"education")} type="checkbox" name="vehicle" value=" Education "/>Education
                  </div>
                  <div>
                    <input onClick = {this.handleClick.bind(this,"health")} type="checkbox" name="vehicle" value=" Health "/> Health
                  </div>

                  <div>
                    <input onClick = {this.handleClick.bind(this,"transit")} type="checkbox" name="vehicle" value=" Transit "/> Transit
                  </div>
                  <div>
                    <input onClick = {this.handleClick.bind(this,"housing")} type="checkbox" name="vehicle" value="  Housing"/> Housing
                  </div>
                  <div>
                    <input onClick = {this.handleClick.bind(this, "food")} type="checkbox" name="vehicle" value=" Food "/> Food
                  </div>
                </div>
               <Link to = '/result' ><input placeholder = ""type = "submit" /> </Link>
              </div>
            </form>

            
          </div>

        </div>

    )
  }
})

export default Userform
