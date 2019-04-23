import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Modal from 'react-awesome-modal';
import api from './api';

class Teacher extends Component{

	constructor(props) {
        super(props);
        this.state = {
        	userId: "",
        	courses: [],
        	isLoading : false
        };
    }

    async loadData() {
        this.setState({
        	isLoading: true
        });
        const courses = await api.getTeacherCourse(this.props.match.params.id);


        this.setState({
            userId: this.props.match.params.id,
            courses: courses,
            isLoading: false
        });
    }

    async handleDeleteClick(id){
    	 await api.deleteCourse(id)
        .then(() => {
            let updatedcourses = [...this.state.courses].filter(i => i.courseId !== id);
            this.setState({courses: updatedcourses});
        });
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id != prevProps.match.params.id) {
            this.loadData();
        }
    }

    render() {
        const {userId, courses, isLoading} = this.state;


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
                        <Button size="sm" color="primary" name="EditCourse" tag={Link} to={"/users/" + userId + "/course/" + course.courseId}>Edit</Button>
                        <Button size="sm" color="danger" name="DeleteCourse" onClick={() => this.handleDeleteClick(course.courseId)}>Delete</Button>
                        <Button size="sm" color="success" name="SeeStudent" tag={Link} to={"/course/" +course.courseId}>Students</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div name="User">
                <Container fluid>

                    <div className="float-right">
                        <Button color="success" name="AddProject" tag={Link} to={"/users/" + userId + "/course/new"}>Add a Course</Button>{' '}
                        
                    </div>

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
                
            </div>
        );
    }

}
export default Teacher;
