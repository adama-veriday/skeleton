package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.SkeletonApp;
import com.mycompany.myapp.config.TestSecurityConfiguration;
import com.mycompany.myapp.domain.Project;
import com.mycompany.myapp.repository.ProjectRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link ProjectResource} REST controller.
 */
@SpringBootTest(classes = { SkeletonApp.class, TestSecurityConfiguration.class })
@AutoConfigureMockMvc
@WithMockUser
public class ProjectResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final Integer DEFAULT_PARTNER_ID = 1;
    private static final Integer UPDATED_PARTNER_ID = 2;

    private static final Integer DEFAULT_CUSTOMER_ID = 1;
    private static final Integer UPDATED_CUSTOMER_ID = 2;

    private static final String DEFAULT_PROCURMENT_OFFICER_NAME = "AAAAAAAAAA";
    private static final String UPDATED_PROCURMENT_OFFICER_NAME = "BBBBBBBBBB";

    private static final Integer DEFAULT_PROCURMENT_CONTACT_NO = 1;
    private static final Integer UPDATED_PROCURMENT_CONTACT_NO = 2;

    private static final String DEFAULT_TICKETS = "AAAAAAAAAA";
    private static final String UPDATED_TICKETS = "BBBBBBBBBB";

    private static final String DEFAULT_SUBSCRIPTIONS = "AAAAAAAAAA";
    private static final String UPDATED_SUBSCRIPTIONS = "BBBBBBBBBB";

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restProjectMockMvc;

    private Project project;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Project createEntity(EntityManager em) {
        Project project = new Project()
            .name(DEFAULT_NAME)
            .partner_id(DEFAULT_PARTNER_ID)
            .customer_id(DEFAULT_CUSTOMER_ID)
            .procurment_officer_name(DEFAULT_PROCURMENT_OFFICER_NAME)
            .procurment_contact_no(DEFAULT_PROCURMENT_CONTACT_NO)
            .tickets(DEFAULT_TICKETS)
            .subscriptions(DEFAULT_SUBSCRIPTIONS);
        return project;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Project createUpdatedEntity(EntityManager em) {
        Project project = new Project()
            .name(UPDATED_NAME)
            .partner_id(UPDATED_PARTNER_ID)
            .customer_id(UPDATED_CUSTOMER_ID)
            .procurment_officer_name(UPDATED_PROCURMENT_OFFICER_NAME)
            .procurment_contact_no(UPDATED_PROCURMENT_CONTACT_NO)
            .tickets(UPDATED_TICKETS)
            .subscriptions(UPDATED_SUBSCRIPTIONS);
        return project;
    }

    @BeforeEach
    public void initTest() {
        project = createEntity(em);
    }

    @Test
    @Transactional
    public void createProject() throws Exception {
        int databaseSizeBeforeCreate = projectRepository.findAll().size();
        // Create the Project
        restProjectMockMvc.perform(post("/api/projects").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(project)))
            .andExpect(status().isCreated());

        // Validate the Project in the database
        List<Project> projectList = projectRepository.findAll();
        assertThat(projectList).hasSize(databaseSizeBeforeCreate + 1);
        Project testProject = projectList.get(projectList.size() - 1);
        assertThat(testProject.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testProject.getPartner_id()).isEqualTo(DEFAULT_PARTNER_ID);
        assertThat(testProject.getCustomer_id()).isEqualTo(DEFAULT_CUSTOMER_ID);
        assertThat(testProject.getProcurment_officer_name()).isEqualTo(DEFAULT_PROCURMENT_OFFICER_NAME);
        assertThat(testProject.getProcurment_contact_no()).isEqualTo(DEFAULT_PROCURMENT_CONTACT_NO);
        assertThat(testProject.getTickets()).isEqualTo(DEFAULT_TICKETS);
        assertThat(testProject.getSubscriptions()).isEqualTo(DEFAULT_SUBSCRIPTIONS);
    }

    @Test
    @Transactional
    public void createProjectWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = projectRepository.findAll().size();

        // Create the Project with an existing ID
        project.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restProjectMockMvc.perform(post("/api/projects").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(project)))
            .andExpect(status().isBadRequest());

        // Validate the Project in the database
        List<Project> projectList = projectRepository.findAll();
        assertThat(projectList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllProjects() throws Exception {
        // Initialize the database
        projectRepository.saveAndFlush(project);

        // Get all the projectList
        restProjectMockMvc.perform(get("/api/projects?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(project.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)))
            .andExpect(jsonPath("$.[*].partner_id").value(hasItem(DEFAULT_PARTNER_ID)))
            .andExpect(jsonPath("$.[*].customer_id").value(hasItem(DEFAULT_CUSTOMER_ID)))
            .andExpect(jsonPath("$.[*].procurment_officer_name").value(hasItem(DEFAULT_PROCURMENT_OFFICER_NAME)))
            .andExpect(jsonPath("$.[*].procurment_contact_no").value(hasItem(DEFAULT_PROCURMENT_CONTACT_NO)))
            .andExpect(jsonPath("$.[*].tickets").value(hasItem(DEFAULT_TICKETS)))
            .andExpect(jsonPath("$.[*].subscriptions").value(hasItem(DEFAULT_SUBSCRIPTIONS)));
    }
    
    @Test
    @Transactional
    public void getProject() throws Exception {
        // Initialize the database
        projectRepository.saveAndFlush(project);

        // Get the project
        restProjectMockMvc.perform(get("/api/projects/{id}", project.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(project.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME))
            .andExpect(jsonPath("$.partner_id").value(DEFAULT_PARTNER_ID))
            .andExpect(jsonPath("$.customer_id").value(DEFAULT_CUSTOMER_ID))
            .andExpect(jsonPath("$.procurment_officer_name").value(DEFAULT_PROCURMENT_OFFICER_NAME))
            .andExpect(jsonPath("$.procurment_contact_no").value(DEFAULT_PROCURMENT_CONTACT_NO))
            .andExpect(jsonPath("$.tickets").value(DEFAULT_TICKETS))
            .andExpect(jsonPath("$.subscriptions").value(DEFAULT_SUBSCRIPTIONS));
    }
    @Test
    @Transactional
    public void getNonExistingProject() throws Exception {
        // Get the project
        restProjectMockMvc.perform(get("/api/projects/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateProject() throws Exception {
        // Initialize the database
        projectRepository.saveAndFlush(project);

        int databaseSizeBeforeUpdate = projectRepository.findAll().size();

        // Update the project
        Project updatedProject = projectRepository.findById(project.getId()).get();
        // Disconnect from session so that the updates on updatedProject are not directly saved in db
        em.detach(updatedProject);
        updatedProject
            .name(UPDATED_NAME)
            .partner_id(UPDATED_PARTNER_ID)
            .customer_id(UPDATED_CUSTOMER_ID)
            .procurment_officer_name(UPDATED_PROCURMENT_OFFICER_NAME)
            .procurment_contact_no(UPDATED_PROCURMENT_CONTACT_NO)
            .tickets(UPDATED_TICKETS)
            .subscriptions(UPDATED_SUBSCRIPTIONS);

        restProjectMockMvc.perform(put("/api/projects").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedProject)))
            .andExpect(status().isOk());

        // Validate the Project in the database
        List<Project> projectList = projectRepository.findAll();
        assertThat(projectList).hasSize(databaseSizeBeforeUpdate);
        Project testProject = projectList.get(projectList.size() - 1);
        assertThat(testProject.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testProject.getPartner_id()).isEqualTo(UPDATED_PARTNER_ID);
        assertThat(testProject.getCustomer_id()).isEqualTo(UPDATED_CUSTOMER_ID);
        assertThat(testProject.getProcurment_officer_name()).isEqualTo(UPDATED_PROCURMENT_OFFICER_NAME);
        assertThat(testProject.getProcurment_contact_no()).isEqualTo(UPDATED_PROCURMENT_CONTACT_NO);
        assertThat(testProject.getTickets()).isEqualTo(UPDATED_TICKETS);
        assertThat(testProject.getSubscriptions()).isEqualTo(UPDATED_SUBSCRIPTIONS);
    }

    @Test
    @Transactional
    public void updateNonExistingProject() throws Exception {
        int databaseSizeBeforeUpdate = projectRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restProjectMockMvc.perform(put("/api/projects").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(project)))
            .andExpect(status().isBadRequest());

        // Validate the Project in the database
        List<Project> projectList = projectRepository.findAll();
        assertThat(projectList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteProject() throws Exception {
        // Initialize the database
        projectRepository.saveAndFlush(project);

        int databaseSizeBeforeDelete = projectRepository.findAll().size();

        // Delete the project
        restProjectMockMvc.perform(delete("/api/projects/{id}", project.getId()).with(csrf())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Project> projectList = projectRepository.findAll();
        assertThat(projectList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
