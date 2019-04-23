package com.example.demo.controller;

import com.example.demo.modal.Contact;
import com.example.demo.modal.TCourse;
import com.example.demo.modal.User;
import com.example.demo.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class CourseController {
    @Autowired
    CourseService courseService;

    @CrossOrigin
    @GetMapping(path = "/users/{userName}/{passWord}", produces="application/json")
    public HttpEntity GetOneUser(@PathVariable String userName, @PathVariable String passWord){
        User guy = courseService.GetOneUser(userName, passWord);
        if(guy == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(guy, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/course/{teachId}", produces="application/json")
    public HttpEntity GetTeacherCourse(@PathVariable String teachId){
        List<TCourse> currentCourses = courseService.GetTeacherCourse(teachId);

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/course/one/{courseId}", produces="application/json")
    public HttpEntity getSingleCourse(@PathVariable String courseId){
        TCourse currentCourses = courseService.getSingleCourse(courseId);

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping(path = "/course/one/{courseId}", produces="application/json")
    public HttpEntity putCourse(@RequestBody TCourse tcourse, @PathVariable String courseId){
        TCourse currentCourses = courseService.putCourse(tcourse, courseId);

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(path = "/course/add", produces="application/json")
    public HttpEntity postCourse(@RequestBody TCourse tcourse){
        TCourse currentCourses = courseService.postCourse(tcourse);

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping(path = "/course/one/{courseId}", produces="application/json")
    public HttpEntity deleteCourse(@PathVariable String courseId){
        TCourse currentCourses = courseService.deleteCourse( courseId);

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/course", produces="application/json")
    public HttpEntity getAllCourses(){
        List<TCourse> currentCourses = courseService.getAllCourses();

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/course/look/{studentId}", produces="application/json")
    public HttpEntity GetStudentCourse(@PathVariable String studentId){

        List<TCourse> currentCourses = courseService.GetStudentCourse(studentId);

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping(path = "/course/drop/{courseId}/{studentId}", produces="application/json")
    public HttpEntity dropCourse(@PathVariable String courseId, @PathVariable String studentId){
        TCourse currentCourses = courseService.dropCourse(courseId, studentId);

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(path = "/course/register/{courseId}/{studentId}", produces="application/json")
    public HttpEntity registerCourse(@PathVariable String courseId, @PathVariable String studentId){
        TCourse currentCourses = courseService.registerCourse(courseId, studentId);

        return new ResponseEntity<>(currentCourses, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/course/hook/{courseId}", produces="application/json")
    public HttpEntity getStudentsRegiteredForThisCourse(@PathVariable String courseId){
        List<User> guy = courseService.getStudentsRegiteredForThisCourse(courseId);

        return new ResponseEntity<>(guy, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(path = "/user", produces="application/json")
    public HttpEntity RegisterUser(@RequestBody User user){
        User u = courseService.RegisterUser(user);

        return new ResponseEntity<>(u, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/user/{userName}", produces="application/json")
    public HttpEntity CheckUserExists(@PathVariable String userName){
        User guy = courseService.CheckUserExists(userName);
        if(guy == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(guy, HttpStatus.OK);
    }

}
