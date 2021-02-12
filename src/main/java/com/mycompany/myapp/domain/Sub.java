package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Sub.
 */
@Entity
@Table(name = "sub")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Sub implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "level")
    private String level;

    @Column(name = "length")
    private String length;

    @Column(name = "status")
    private String status;

    @Column(name = "project_id")
    private Integer project_id;

    @Column(name = "start_date")
    private LocalDate start_date;

    @Column(name = "customer_id")
    private Integer customer_id;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLevel() {
        return level;
    }

    public Sub level(String level) {
        this.level = level;
        return this;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getLength() {
        return length;
    }

    public Sub length(String length) {
        this.length = length;
        return this;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getStatus() {
        return status;
    }

    public Sub status(String status) {
        this.status = status;
        return this;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getProject_id() {
        return project_id;
    }

    public Sub project_id(Integer project_id) {
        this.project_id = project_id;
        return this;
    }

    public void setProject_id(Integer project_id) {
        this.project_id = project_id;
    }

    public LocalDate getStart_date() {
        return start_date;
    }

    public Sub start_date(LocalDate start_date) {
        this.start_date = start_date;
        return this;
    }

    public void setStart_date(LocalDate start_date) {
        this.start_date = start_date;
    }

    public Integer getCustomer_id() {
        return customer_id;
    }

    public Sub customer_id(Integer customer_id) {
        this.customer_id = customer_id;
        return this;
    }

    public void setCustomer_id(Integer customer_id) {
        this.customer_id = customer_id;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Sub)) {
            return false;
        }
        return id != null && id.equals(((Sub) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Sub{" +
            "id=" + getId() +
            ", level='" + getLevel() + "'" +
            ", length='" + getLength() + "'" +
            ", status='" + getStatus() + "'" +
            ", project_id=" + getProject_id() +
            ", start_date='" + getStart_date() + "'" +
            ", customer_id=" + getCustomer_id() +
            "}";
    }
}
