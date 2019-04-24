import React, { Component } from 'react';

class api{

	static domain() {
		var domain = 'http://localhost:8080';
		return domain;
	}

	static getOneUser(userName, passWord) {
		var endpoint = '/users/' + userName + '/' + passWord;
		var url = api.domain() + endpoint;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
	}

	static SuccessgetOneUser(userName, passWord) {
		var endpoint = '/users/' + userName + '/' + passWord;
		var url = api.domain() + endpoint;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(response => response.json());
	}

	static getTeacherCourse(techId){
		var endpoint = '/course/';
		var url = api.domain() + endpoint + techId;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json());
	}

	static getSingleCourse(courseId) {
		var endpoint = '/course/one/' + courseId;
		var url = api.domain() + endpoint;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json());

	}

	static putCourse(courseId, course) {
		var endpoint = '/course/one/' + courseId;
		var url = api.domain() + endpoint;
		return fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course),
        });
	}

	static postCourse(course) {
		var endpoint = '/course/add'
		var url = api.domain() + endpoint;
		return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course),
        });
	}

	static deleteCourse(courseId) {
		var endpoint = '/course/one/' + courseId;
		var url = api.domain() + endpoint;
		return fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
	}

	static getAllCourses(){
		var endpoint = '/course';
		var url = api.domain() + endpoint;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json());
	}

	static getStudentCourse(studentId){
		var endpoint = '/course/look/';
		var url = api.domain() + endpoint + studentId;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json());
	}

	static dropCourse(studentId, courseId) {
		var endpoint = '/course/drop/' + courseId +'/'+ studentId;
		var url = api.domain() + endpoint;
		return fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
	}

	static registerCourse(studentId, courseId) {
		var endpoint = '/course/register/' + studentId + '/' + courseId;
		var url = api.domain() + endpoint;
		return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
	}

	static getStudentsRegiteredForThisCourse(courseId){
		var endpoint = '/course/hook/';
		var url = api.domain() + endpoint + courseId;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json());
	}

	static RegisterUser(user) {
		var endpoint = '/user'
		var url = api.domain() + endpoint;
		return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });
	}

	static CheckUserExists(userName) {
		var endpoint = '/user/' + userName;
		var url = api.domain() + endpoint;
		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
	}

}

export default api;