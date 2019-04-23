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

//
//    public Customer GetOneCustomer(String customerName, String passWord){
//        return "";
//
//    }
//
//    public List<TCourse>GetTeacherCourse(String teacherId){
//
//    }
//
//    public TCourse getSingleCourse(String courseId){
//
//    }
//
//    public TCourse putCourse(TCourse tcourse, String courseId){
//
//    }
//
//    public TCourse postCourse(TCourse tcourse){
//
//    }
//
//    public TCourse deleteCourse(String courseId){
//
//    }
//
//    public List<TCourse> getAllCourses(){
//
//    }


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
//    public TCourse registerCourse(String courseId, String studentId){
//
//    }
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
//
//    public Customer CheckCustomerExists(String customerName){
//
//    }
//
}
