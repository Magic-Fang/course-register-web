import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Modal from 'react-awesome-modal';
import api from './api';

class Student extends Component{
	constructor(props) {
        super(props);
        this.state = {
        	userId: "",
        	courses: [],
        	Allcourses: [],
        	isLoading : false
        };
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({
        	isLoading: true
        });
        const currentcourses = await api.getAllCourses();
        const courseRegistered = await api.getStudentCourse(this.props.match.params.id);

        this.setState({
            userId: this.props.match.params.id,
            courses: courseRegistered,
            Allcourses: currentcourses,
            isLoading: false
        });
        console.log("what?")
    }

    async handleDropClick(courseId){

    	await api.dropCourse(this.state.userId, courseId)
        .then(() => {
            let updatedcourses = [...this.state.courses].filter(i => i.courseId !== courseId);
            this.setState({courses: updatedcourses});
        });
    }

    async handleRegisterClick(courseId){

        const result = await api.getStudentsRegiteredForThisCourse(courseId);
        var flag = true;
        var resLen = result.length;
        for(var i = 0; i < resLen; i++){
            if(result[i].userId == this.state.userId){
                alert("You have already registered this class!");
                flag = false;
            }
        }
        if(flag){
            await api.registerCourse(this.state.userId, courseId)
        }

    	// this.props.history.push("/student/" + this.state.userId);
    	window.location.reload(); 
    }

	render() {
        const {userId, courses, Allcourses, isLoading} = this.state;


        if (isLoading) {
            return <p>Loading...</p>;
        }

        const courseList = courses.map(course => {
            return <tr key={course.courseId}>
                <td style={{whiteSpace: 'nowrap'}}>{course.courseName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{course.courseLocation}</td>
                <td style={{whiteSpace: 'nowrap'}}>{course.courseSubject}</td>
                <td style={{textAlign:"right"}}>
                    <ButtonGroup>
                        <Button size="sm" color="danger" name="DeleteCourse" onClick={() => this.handleDropClick(course.courseId)}>Drop</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        const AllcourseList = Allcourses.map(course => {
            return <tr key={course.courseId}>
                <td style={{whiteSpace: 'nowrap'}}>{course.courseName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{course.courseLocation}</td>
                <td style={{whiteSpace: 'nowrap'}}>{course.courseSubject}</td>
                <td style={{textAlign:"right"}}>
                    <ButtonGroup>
                        <Button size="sm" color="danger" name="DeleteCourse" onClick={() => this.handleRegisterClick(course.courseId)}>Register</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div name="User">
                <Container fluid>
                    <h3>Your Courses</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Course Name</th>
                                <th width="20%">Course Location</th>
                                <th width="20%">Course Subject</th>
                                <th style={{textAlign:"right"}} width="10%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseList}
                        </tbody>
                    </Table>
                </Container>

                <Container fluid>
                    <h3>All Available Courses</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Course Name</th>
                                <th width="20%">Course Location</th>
                                <th width="20%">Course Subject</th>
                                <th style={{textAlign:"right"}} width="10%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllcourseList}
                        </tbody>
                    </Table>
                </Container>
                
            </div>
        );
    }
}

export default Student;