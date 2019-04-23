package com.techprimers.db.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class StudentToCourse {

    @Id
    @GeneratedValue
    @Column(name = "Id")
    private Integer Id;

    @Column(name = "userId")
    private Integer userId;

    @Column(name = "CourseId")
    private Integer CourseId;


}
