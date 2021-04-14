import React, { Component } from 'react';
import axios from 'axios';
import './reportForm.css';
import ButtonPetHealthBook from './buttonPetHealthBook';

class ReportForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: "",
        title: "",
        report: ""
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
    handleSubmit = (event) => {
      alert('A form was submitted: ' + this.state);
      var postData = this.state;
      
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      
      axios.post('/api/v1/addReport', postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  
      event.preventDefault();
  }
  
  
    render() {
       console.log(this.state)
      return (          
        <form onSubmit={this.handleSubmit} >
          <fieldset className='formReport'>
            <label>
              Date :
              <input
                name="date"
                type="date"
                checked={this.state.date}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Motif de consultation :
              <input
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange} />
            </label>
            <label className="report">
              <p>
                Compte rendu :
              </p>
              <textarea
                name="report"
                type="text"
                value={this.state.report}
                onChange={this.handleInputChange} />
              </label>
            <ButtonPetHealthBook onClick={this.handleSubmit} value="Ajouter"/>
          </fieldset>
        </form>
              
      );
    }
  }
export default ReportForm;