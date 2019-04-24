import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Modal from 'react-awesome-modal';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import api from './api';

class RegisterAccount extends Component{

	constructor(props) {  
        var userItem = {
            userId: '',
            userName: '',
            passWord: '',
            identity: 'Teacher'

        };
        super(props);  
        this.state = {
            user: userItem
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

	handleChange(event){
		const target = event.target;
        const value = target.value;
        const name = target.name;
        let user = {...this.state.user};
        //user["identity"] = "Teacher";
        user[name] = value;
        this.setState({user});
        console.log(user);
	}

	async handleSubmit(event){

		event.preventDefault();
        const {user} = this.state;
        
        const result = await api.CheckUserExists(user.userName);
        if (result.status == 200) {
            alert("userName has already registered, Please change another userName");
            window.location.reload(); 
        } else {
            console.log("no duplicate");
            console.log(user);
        	await api.RegisterUser(user);
        	this.props.history.push("/");
        }

	}

  
	render() {
		const options = ['Student', 'Teacher'];
		const defaultOption = options[0];

		const {user} = this.state;
    return (
		
		<div>
			<Container>
                <center>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>

                        <Label for="register">Register an Account</Label>
                        <br/>
                        UserName:<Input type="text" name="userName" id="userName" value={user.userName || ''}
                            onChange={this.handleChange} autoComplete="address-level1"/>
                        <br/>
                        password:<Input type="password" name="passWord" id="UserPass" value={user.passWord || ''}
                            onChange={this.handleChange} autoComplete="address-level1"/>
                         <br/>
                        Identity: 	<select name="identity" onChange={this.handleChange}>
									  <option name="identity" value="Teachear" >Teachear</option>
									  <option name="identity" value="Student" >Student</option>
				
									</select>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" name="q" type="submit">Register</Button>{' '}
                        <Button color="secondary" name="Cancel" tag={Link} to={"/"}>Cancel</Button>
                    </FormGroup>
                </Form>
      
                </center>
            </Container>
		</div>
    );
  }
}


export default RegisterAccount;