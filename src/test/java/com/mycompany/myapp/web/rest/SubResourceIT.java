package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.SkeletonApp;
import com.mycompany.myapp.config.TestSecurityConfiguration;
import com.mycompany.myapp.domain.Sub;
import com.mycompany.myapp.repository.SubRepository;

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
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link SubResource} REST controller.
 */
@SpringBootTest(classes = { SkeletonApp.class, TestSecurityConfiguration.class })
@AutoConfigureMockMvc
@WithMockUser
public class SubResourceIT {

    private static final String DEFAULT_LEVEL = "AAAAAAAAAA";
    private static final String UPDATED_LEVEL = "BBBBBBBBBB";

    private static final String DEFAULT_LENGTH = "AAAAAAAAAA";
    private static final String UPDATED_LENGTH = "BBBBBBBBBB";

    private static final String DEFAULT_STATUS = "AAAAAAAAAA";
    private static final String UPDATED_STATUS = "BBBBBBBBBB";

    private static final Integer DEFAULT_PROJECT_ID = 1;
    private static final Integer UPDATED_PROJECT_ID = 2;

    private static final LocalDate DEFAULT_START_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_START_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Integer DEFAULT_CUSTOMER_ID = 1;
    private static final Integer UPDATED_CUSTOMER_ID = 2;

    @Autowired
    private SubRepository subRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restSubMockMvc;

    private Sub sub;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Sub createEntity(EntityManager em) {
        Sub sub = new Sub()
            .level(DEFAULT_LEVEL)
            .length(DEFAULT_LENGTH)
            .status(DEFAULT_STATUS)
            .project_id(DEFAULT_PROJECT_ID)
            .start_date(DEFAULT_START_DATE)
            .customer_id(DEFAULT_CUSTOMER_ID);
        return sub;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Sub createUpdatedEntity(EntityManager em) {
        Sub sub = new Sub()
            .level(UPDATED_LEVEL)
            .length(UPDATED_LENGTH)
            .status(UPDATED_STATUS)
            .project_id(UPDATED_PROJECT_ID)
            .start_date(UPDATED_START_DATE)
            .customer_id(UPDATED_CUSTOMER_ID);
        return sub;
    }

    @BeforeEach
    public void initTest() {
        sub = createEntity(em);
    }

    @Test
    @Transactional
    public void createSub() throws Exception {
        int databaseSizeBeforeCreate = subRepository.findAll().size();
        // Create the Sub
        restSubMockMvc.perform(post("/api/subs").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(sub)))
            .andExpect(status().isCreated());

        // Validate the Sub in the database
        List<Sub> subList = subRepository.findAll();
        assertThat(subList).hasSize(databaseSizeBeforeCreate + 1);
        Sub testSub = subList.get(subList.size() - 1);
        assertThat(testSub.getLevel()).isEqualTo(DEFAULT_LEVEL);
        assertThat(testSub.getLength()).isEqualTo(DEFAULT_LENGTH);
        assertThat(testSub.getStatus()).isEqualTo(DEFAULT_STATUS);
        assertThat(testSub.getProject_id()).isEqualTo(DEFAULT_PROJECT_ID);
        assertThat(testSub.getStart_date()).isEqualTo(DEFAULT_START_DATE);
        assertThat(testSub.getCustomer_id()).isEqualTo(DEFAULT_CUSTOMER_ID);
    }

    @Test
    @Transactional
    public void createSubWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = subRepository.findAll().size();

        // Create the Sub with an existing ID
        sub.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSubMockMvc.perform(post("/api/subs").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(sub)))
            .andExpect(status().isBadRequest());

        // Validate the Sub in the database
        List<Sub> subList = subRepository.findAll();
        assertThat(subList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllSubs() throws Exception {
        // Initialize the database
        subRepository.saveAndFlush(sub);

        // Get all the subList
        restSubMockMvc.perform(get("/api/subs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(sub.getId().intValue())))
            .andExpect(jsonPath("$.[*].level").value(hasItem(DEFAULT_LEVEL)))
            .andExpect(jsonPath("$.[*].length").value(hasItem(DEFAULT_LENGTH)))
            .andExpect(jsonPath("$.[*].status").value(hasItem(DEFAULT_STATUS)))
            .andExpect(jsonPath("$.[*].project_id").value(hasItem(DEFAULT_PROJECT_ID)))
            .andExpect(jsonPath("$.[*].start_date").value(hasItem(DEFAULT_START_DATE.toString())))
            .andExpect(jsonPath("$.[*].customer_id").value(hasItem(DEFAULT_CUSTOMER_ID)));
    }
    
    @Test
    @Transactional
    public void getSub() throws Exception {
        // Initialize the database
        subRepository.saveAndFlush(sub);

        // Get the sub
        restSubMockMvc.perform(get("/api/subs/{id}", sub.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(sub.getId().intValue()))
            .andExpect(jsonPath("$.level").value(DEFAULT_LEVEL))
            .andExpect(jsonPath("$.length").value(DEFAULT_LENGTH))
            .andExpect(jsonPath("$.status").value(DEFAULT_STATUS))
            .andExpect(jsonPath("$.project_id").value(DEFAULT_PROJECT_ID))
            .andExpect(jsonPath("$.start_date").value(DEFAULT_START_DATE.toString()))
            .andExpect(jsonPath("$.customer_id").value(DEFAULT_CUSTOMER_ID));
    }
    @Test
    @Transactional
    public void getNonExistingSub() throws Exception {
        // Get the sub
        restSubMockMvc.perform(get("/api/subs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateSub() throws Exception {
        // Initialize the database
        subRepository.saveAndFlush(sub);

        int databaseSizeBeforeUpdate = subRepository.findAll().size();

        // Update the sub
        Sub updatedSub = subRepository.findById(sub.getId()).get();
        // Disconnect from session so that the updates on updatedSub are not directly saved in db
        em.detach(updatedSub);
        updatedSub
            .level(UPDATED_LEVEL)
            .length(UPDATED_LENGTH)
            .status(UPDATED_STATUS)
            .project_id(UPDATED_PROJECT_ID)
            .start_date(UPDATED_START_DATE)
            .customer_id(UPDATED_CUSTOMER_ID);

        restSubMockMvc.perform(put("/api/subs").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedSub)))
            .andExpect(status().isOk());

        // Validate the Sub in the database
        List<Sub> subList = subRepository.findAll();
        assertThat(subList).hasSize(databaseSizeBeforeUpdate);
        Sub testSub = subList.get(subList.size() - 1);
        assertThat(testSub.getLevel()).isEqualTo(UPDATED_LEVEL);
        assertThat(testSub.getLength()).isEqualTo(UPDATED_LENGTH);
        assertThat(testSub.getStatus()).isEqualTo(UPDATED_STATUS);
        assertThat(testSub.getProject_id()).isEqualTo(UPDATED_PROJECT_ID);
        assertThat(testSub.getStart_date()).isEqualTo(UPDATED_START_DATE);
        assertThat(testSub.getCustomer_id()).isEqualTo(UPDATED_CUSTOMER_ID);
    }

    @Test
    @Transactional
    public void updateNonExistingSub() throws Exception {
        int databaseSizeBeforeUpdate = subRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSubMockMvc.perform(put("/api/subs").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(sub)))
            .andExpect(status().isBadRequest());

        // Validate the Sub in the database
        List<Sub> subList = subRepository.findAll();
        assertThat(subList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteSub() throws Exception {
        // Initialize the database
        subRepository.saveAndFlush(sub);

        int databaseSizeBeforeDelete = subRepository.findAll().size();

        // Delete the sub
        restSubMockMvc.perform(delete("/api/subs/{id}", sub.getId()).with(csrf())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Sub> subList = subRepository.findAll();
        assertThat(subList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
