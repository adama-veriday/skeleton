package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Sub;
import com.mycompany.myapp.repository.SubRepository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.Sub}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class SubResource {

    private final Logger log = LoggerFactory.getLogger(SubResource.class);

    private static final String ENTITY_NAME = "skeletonSub";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SubRepository subRepository;

    public SubResource(SubRepository subRepository) {
        this.subRepository = subRepository;
    }

    /**
     * {@code POST  /subs} : Create a new sub.
     *
     * @param sub the sub to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new sub, or with status {@code 400 (Bad Request)} if the sub has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/subs")
    public ResponseEntity<Sub> createSub(@RequestBody Sub sub) throws URISyntaxException {
        log.debug("REST request to save Sub : {}", sub);
        if (sub.getId() != null) {
            throw new BadRequestAlertException("A new sub cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Sub result = subRepository.save(sub);
        return ResponseEntity.created(new URI("/api/subs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /subs} : Updates an existing sub.
     *
     * @param sub the sub to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated sub,
     * or with status {@code 400 (Bad Request)} if the sub is not valid,
     * or with status {@code 500 (Internal Server Error)} if the sub couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/subs")
    public ResponseEntity<Sub> updateSub(@RequestBody Sub sub) throws URISyntaxException {
        log.debug("REST request to update Sub : {}", sub);
        if (sub.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Sub result = subRepository.save(sub);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, sub.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /subs} : get all the subs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of subs in body.
     */
    @GetMapping("/subs")
    public List<Sub> getAllSubs() {
        log.debug("REST request to get all Subs");
        return subRepository.findAll();
    }

    /**
     * {@code GET  /subs/:id} : get the "id" sub.
     *
     * @param id the id of the sub to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the sub, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/subs/{id}")
    public ResponseEntity<Sub> getSub(@PathVariable Long id) {
        log.debug("REST request to get Sub : {}", id);
        Optional<Sub> sub = subRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(sub);
    }

    /**
     * {@code DELETE  /subs/:id} : delete the "id" sub.
     *
     * @param id the id of the sub to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/subs/{id}")
    public ResponseEntity<Void> deleteSub(@PathVariable Long id) {
        log.debug("REST request to delete Sub : {}", id);

        subRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
