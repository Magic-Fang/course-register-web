package com.techprimers.db.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Customer {
    @Id
    @GeneratedValue
    @Column(name="userId")
    private String userId;

    @Column(name="userName")
    private String userName;
    @Column(name="passWord")
    private String passWord;
    @Column(name="identity")
    private String identity;//Teacher or Student

    public Customer(){

    }

    public String getUserId() {
        return userId;
    }
    public  String getUserName(){
        return userName;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public void setIdentity(String identity) {
        this.identity = identity;
    }

    public String getPassWord(){
        return passWord;
    }
    public String getIdentity(){
        return identity;
    }

}
