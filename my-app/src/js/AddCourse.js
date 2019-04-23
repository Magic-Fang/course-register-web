import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import api from './api';

class AddCourse extends Component {
    constructor(props) {  
        var courseItem = {
            courseId: '',
            courseName: '',
            courseLocation: '',
            courseSubject: '',
            teacherId: ''
        };
        super(props);  
        this.state = {
            userID : this.props.match.params.id,
            course: courseItem
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount() {
        if (this.props.match.params.courseId !== 'new') {
            const data = await api.getSingleCourse(this.props.match.params.courseId);
            this.setState({course: data});
        }
    }
    // not understand handleChange, autoComplete?
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let course = {...this.state.course};
        course[name] = value;
        course["teacherId"] = this.props.match.params.id;
        this.setState({course});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {userID, course} = this.state;
        if (course.courseId) {
            const result2 = await api.putCourse(course.courseId, course);
            // console.log("update project name");
            // console.log(result2.status);
            // this.props.history.push("/user/" + userID);
            if (result2.status == 409) {
                alert("The project name has been used. Please use a new one.");
            } else {
                this.props.history.push("/teacher/" + userID);
            }
        } else {
            const result = await api.postCourse(course);
            //console.log(result.status)
            if (result.status == 409) {
                alert("The project name has been used. Please use a new one.");
            } else {
                this.props.history.push("/teacher/" + userID);
            }
        }
    }

    render() {
        const {userID, course} = this.state;
        const title = <h2>{course.courseId ? 'Edit Course' : 'Add Course'}</h2>;

        return <div name="testAddCourse">
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>

                        <Label for="courseName">Course Name</Label>
                        <Input type="text" name="courseName" id="courseName" value={course.courseName || ''}
                            onChange={this.handleChange} autoComplete="address-level1"/>
                        <Label for="courseLocation">Course Location</Label>
                        <Input type="text" name="courseLocation" id="courseLocation" value={course.courseLocation || ''}
                            onChange={this.handleChange} autoComplete="address-level1"/>
                        <Label for="projectname">Course Subject</Label>
                        <Input type="text" name="courseSubject" id="courseSubject" value={course.courseSubject || ''}
                            onChange={this.handleChange} autoComplete="address-level1"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" name="q" type="submit">Save</Button>{' '}
                        <Button color="secondary" name="Cancel" tag={Link} to={"/teacher/" + userID}>Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(AddCourse);
