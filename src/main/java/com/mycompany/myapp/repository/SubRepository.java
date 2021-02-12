package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Sub;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Sub entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SubRepository extends JpaRepository<Sub, Long> {
}
