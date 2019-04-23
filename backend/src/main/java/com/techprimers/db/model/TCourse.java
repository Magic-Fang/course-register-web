package com.example.demo.modal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TCourse {
    private String courseId;
    private String courseName;
    private String courseLocation;
    private String courseSubject;
    private String teacherId;
}
