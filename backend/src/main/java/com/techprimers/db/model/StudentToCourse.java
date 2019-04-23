package com.techprimers.db.model;


import javax.persistence.*;

@Entity
public class StudentToCourse {

    @Id
    @GeneratedValue
    @Column(name = "Id")
    private Integer Id;
    @ManyToOne(targetEntity = Customer.class, fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "userId", nullable = false)
    private Integer userId;
    @ManyToOne(targetEntity = TCourse.class, fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "CourseId", nullable = false)
    private Integer CourseId;

    public StudentToCourse(){

    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getCourseId() {
        return CourseId;
    }

    public void setCourseId(Integer courseId) {
        CourseId = courseId;
    }
}
