package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Project.
 */
@Entity
@Table(name = "project")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Project implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "partner_id")
    private Integer partner_id;

    @Column(name = "customer_id")
    private Integer customer_id;

    @Column(name = "procurment_officer_name")
    private String procurment_officer_name;

    @Column(name = "procurment_contact_no")
    private Integer procurment_contact_no;

    @Column(name = "tickets")
    private String tickets;

    @Column(name = "subscriptions")
    private String subscriptions;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Project name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPartner_id() {
        return partner_id;
    }

    public Project partner_id(Integer partner_id) {
        this.partner_id = partner_id;
        return this;
    }

    public void setPartner_id(Integer partner_id) {
        this.partner_id = partner_id;
    }

    public Integer getCustomer_id() {
        return customer_id;
    }

    public Project customer_id(Integer customer_id) {
        this.customer_id = customer_id;
        return this;
    }

    public void setCustomer_id(Integer customer_id) {
        this.customer_id = customer_id;
    }

    public String getProcurment_officer_name() {
        return procurment_officer_name;
    }

    public Project procurment_officer_name(String procurment_officer_name) {
        this.procurment_officer_name = procurment_officer_name;
        return this;
    }

    public void setProcurment_officer_name(String procurment_officer_name) {
        this.procurment_officer_name = procurment_officer_name;
    }

    public Integer getProcurment_contact_no() {
        return procurment_contact_no;
    }

    public Project procurment_contact_no(Integer procurment_contact_no) {
        this.procurment_contact_no = procurment_contact_no;
        return this;
    }

    public void setProcurment_contact_no(Integer procurment_contact_no) {
        this.procurment_contact_no = procurment_contact_no;
    }

    public String getTickets() {
        return tickets;
    }

    public Project tickets(String tickets) {
        this.tickets = tickets;
        return this;
    }

    public void setTickets(String tickets) {
        this.tickets = tickets;
    }

    public String getSubscriptions() {
        return subscriptions;
    }

    public Project subscriptions(String subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }

    public void setSubscriptions(String subscriptions) {
        this.subscriptions = subscriptions;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Project)) {
            return false;
        }
        return id != null && id.equals(((Project) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Project{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", partner_id=" + getPartner_id() +
            ", customer_id=" + getCustomer_id() +
            ", procurment_officer_name='" + getProcurment_officer_name() + "'" +
            ", procurment_contact_no=" + getProcurment_contact_no() +
            ", tickets='" + getTickets() + "'" +
            ", subscriptions='" + getSubscriptions() + "'" +
            "}";
    }
}
