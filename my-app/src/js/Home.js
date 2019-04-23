import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import api from './api';

class Home extends Component {

	constructor(props) {  
        var userItem = {
            UserName: '',
            UserPass: ''
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
        user[name] = value;
        this.setState({user});
	}


	async handleSubmit(event){

		event.preventDefault();
        const {user} = this.state;
        
        const result = await api.getOneUser(user.UserName, user.UserPass);
        console.log("getOneUser request sent")
        // console.log("update project name");
        // console.log(result2.status);
        // this.props.history.push("/user/" + userID);
        if (result.status == 404) {
            alert("Invalid UserName or Password");
        } else if(result.identity == 'Student'){
            this.props.history.push("/student/" + result.userId);
        } else{
        	console.log("techer found")
        	this.props.history.push("/teacher/" + result.userId);
        }

	}

  render() {

  	const {user} = this.state;

    return (
		
		<div>
			<Container>
                <center>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>

                        <Label for="projectname">Please Login</Label>
                        <br/>
                        UserName:<Input type="text" name="UserName" id="UserName" value={user.UserName || ''}
                            onChange={this.handleChange} autoComplete="address-level1"/>
                        <br/>
                        password:<Input type="password" name="UserPass" id="UserPass" value={user.UserPass || ''}
                            onChange={this.handleChange} autoComplete="address-level1"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" name="q" type="submit">Login</Button>{' '}
                        <Button color="secondary" name="Cancel" >Cancel</Button>
                    </FormGroup>

                <span>Not registered? <Link to='/register' >Create an account</Link></span>
                </Form>

                </center>
            </Container>
		</div>
    );
  }
}

export default Home;
