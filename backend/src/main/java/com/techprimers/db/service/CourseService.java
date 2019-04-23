package com.example.demo.service;


import com.example.demo.modal.Contact;
import com.example.demo.modal.TCourse;
import com.example.demo.modal.User;
import com.example.demo.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Component
public class CourseService {

    @Autowired
    CourseRepository courseRepository;


    public User GetOneUser(String userName, String passWord){
        return new User("1", userName, passWord, "Student");
    }

    public List<TCourse>GetTeacherCourse(String teacherId){
        List<TCourse> curList = new ArrayList<>();
        TCourse c1 = new TCourse("1", "JavaBasic", "Clough", "CS", "1");
        TCourse c2 = new TCourse("2", "C++Advance", "Kalus", "CS", "1");
        curList.add(c1);
        curList.add(c2);
        System.out.println("success Get Teacher Course");
        return curList;
    }

    public TCourse getSingleCourse(String courseId){
        System.out.println("success Get single Course");
        return new TCourse("1", "JavaBasic", "Clough", "CS", "1");
    }

    public TCourse putCourse(TCourse tcourse, String courseId){
        System.out.println("success Put single Course");
        return new TCourse("1", "JavaBasic", "Clough", "CS", "1");
    }

    public TCourse postCourse(TCourse tcourse){
        System.out.println("success Post single Course");
        return new TCourse("1", "JavaBasic", "Clough", "CS", "1");
    }

    public TCourse deleteCourse(String courseId){
        System.out.println("success delete single Course");
        return new TCourse("1", "JavaBasic", "Clough", "CS", "1");
    }

    public List<TCourse> getAllCourses(){
        List<TCourse> curList = new ArrayList<>();
        TCourse c1 = new TCourse("1", "JavaBasic", "Clough", "CS", "1");
        TCourse c2 = new TCourse("2", "C++Advance", "Kalus", "CS", "1");
        TCourse c3 = new TCourse("3", "Python", "Kalus", "CS", "1");
        curList.add(c1);
        curList.add(c2);
        curList.add(c3);
        System.out.println("success get all Courses");
        return curList;
    }

    public List<TCourse> GetStudentCourse(String studentId){
        System.out.println("success get current student Courses");
        TCourse c1 = new TCourse("1", "JavaBasic", "Clough", "CS", "1");
        List<TCourse> res = new ArrayList<>();
        res.add(c1);
        return res;
    }

    public TCourse dropCourse(String courseId, String studentId){
        System.out.println("success drop a Course");
        return new TCourse("1", "JavaBasic", "Clough", "CS", "1");
    }

    public TCourse registerCourse(String courseId, String studentId){
        System.out.println("success registered a Course");
        return new TCourse("1", "JavaBasic", "Clough", "CS", "1");
    }


    public List<User> getStudentsRegiteredForThisCourse(String CourseId){
        List<User> res = new ArrayList<>();
        User u1 = new User("1", "Alex", "123", "Student");
        User u2 = new User("2", "Fiona", "123", "Student");
        res.add(u1);
        res.add(u2);
        return res;
    }

    public User RegisterUser(User user){
        User u = new User(user.getUserId(), user.getUserName(), user.getPassWord(), user.getIdentity());
        System.out.println("succeess registered a user");
        return u;
    }

    public User CheckUserExists(String userName){
        System.out.println("User not found");
        return null;
    }








    public List<Contact> findAllContacts(){

        return courseRepository.findAllContacts();
    }

    public Contact findAllContactsById(String Id){
        return courseRepository.findAllContactsById(Id);
    }

    public Contact addContact(String id, String firstname, String familyname, String phonenumber, String email){
        return courseRepository.addContact(id, firstname, familyname, phonenumber, email);
    }

    public Contact updateContactById(String id, String firstname, String familyname, String phonenumber, String email, String indexId){
        return courseRepository.updateContactById(id, firstname, familyname, phonenumber, email, indexId);
    }

//    public Contact updateContactById(String id, String firstname, String familyname, String phonenumber, String email){
//        return courseRepository.updateContactById(id, firstname, familyname, phonenumber, email);
//    }

    public List<Contact> deleteall(){
        return courseRepository.deleteall();
    }

    public Contact deleteById(String id){
        return courseRepository.deleteById(id);
    }

}
