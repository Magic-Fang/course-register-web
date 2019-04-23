import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Modal from 'react-awesome-modal';
import api from './api';

class CourseHookStudent extends Component{

	constructor(props) {
        super(props);
        this.state = {
        	courseId: '',
        	students: [],
        	isLoading : false
        };
    }

    async loadData() {
        this.setState({
        	isLoading: true
        });
        const curStudent = await api.getStudentsRegiteredForThisCourse(this.props.match.params.id);


        this.setState({
            courseId: this.props.match.params.id,
            students: curStudent,
            isLoading: false
        });
    }

    componentDidMount() {
        this.loadData();
    }

	render() {
        const {courseId, students, isLoading} = this.state;


        if (isLoading) {
            return <p>Loading...</p>;
        }

        const studentList = students.map(student => {
            return <tr key={student.userId}>
                <td style={{whiteSpace: 'nowrap'}}>{student.userName}</td>
       
                <td style={{textAlign:"right"}}>
                    
                </td>
            </tr>
        });

        return (
            <div name="User">
                <Container fluid>

                    

                    <h3>Students registered this Courses</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Student Name</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {studentList}
                        </tbody>
                    </Table>
                </Container>
                
            </div>
        );
    }
}

export default CourseHookStudent;