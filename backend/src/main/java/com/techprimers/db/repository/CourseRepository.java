package com.techprimers.db.repository;

import com.techprimers.db.model.TCourse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<TCourse, String> {
}
