package com.techprimers.db.service;


import com.techprimers.db.model.TCourse;
import com.techprimers.db.model.Customer;
import com.techprimers.db.repository.CourseRepository;
import com.techprimers.db.repository.CustomerRepository;
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
    @Autowired
    CustomerRepository customerRepository;

//    public TCourse registerCourse(String courseId, String studentId){
//
//    }

//
    public List<TCourse>GetTeacherCourse(String teacherId){
        List<TCourse> res = courseRepository.findByTeacherId(teacherId);
        return  res;
    }
//
//    public TCourse getSingleCourse(String courseId){
//
//    }
//
    public TCourse putCourse(TCourse tcourse, String courseId){
        return courseRepository.saveAndFlush(tcourse);
    }
//
    public TCourse postCourse(TCourse tcourse){
        TCourse tc = courseRepository.save(tcourse);
        return tc;
    }
//
    public TCourse deleteCourse(Integer courseId){
        TCourse tc = courseRepository.findOne(courseId);
        courseRepository.delete(tc);
        return tc;
    }
//
    public List<TCourse> getAllCourses(){
        List<TCourse> tc = courseRepository.findAll();
        return tc;
    }


// -------------------------------------------------------


//
//    public List<TCourse> GetStudentCourse(String studentId){
//
//    }
//
//    public TCourse dropCourse(String courseId, String studentId){
//
//    }
//
//
//
//    public List<Customer> getStudentsRegiteredForThisCourse(String CourseId){
//
//    }
//
    public Customer RegisterCustomer(Customer customer){
        Customer newCustomer = customerRepository.save(customer);
        return newCustomer;
    }
//    public Customer GetOneCustomer(String customerName, String passWord){
//        return "";
//
//    }
//
//    public Customer CheckCustomerExists(String customerName){
//
//    }
//
}
