import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';
import Teacher from './Teacher';
import Student from './Student';
import AddCourse from'./AddCourse';
import CourseHookStudent from './CourseHookStudent';
import RegisterAccount from './RegisterAccount';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/'  component={Home}/>
                    
                    <Route exact path='/teacher/:id' component={Teacher}/>
                    <Route exact path='/student/:id' component={Student}/>
                    <Route exact path='/users/:id/course/:courseId' component={AddCourse}/>
                    <Route exact path='/course/:id' component={CourseHookStudent}/>
                    <Route exact path='/register' component={RegisterAccount}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
