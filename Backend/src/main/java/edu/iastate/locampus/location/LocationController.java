package edu.iastate.locampus.location;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/location/{locationid}/posts")
    @PreAuthorize("hasAuthority('POST_LIST')")
    public ObjectNode getPosts(@PathVariable("locationid") Integer postId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("posts", objectMapper.valueToTree(locationRepository.getOne(postId).getPosts()));
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/location/create")
    @PreAuthorize("hasAuthority('ADD_LOCATION')")
    public void createLocation(@RequestBody Location location) {
        if (location.getBio() == null || location.getPosts() == null || location.getStaff() == null) {
            return;
        }

        locationRepository.save(location);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/location/{id}/delete")
    @PreAuthorize("hasAuthority('DELETE_LOCATION')")
    public void deleteLocation(@PathVariable("id") Integer id) {
        locationRepository.delete(locationRepository.getOne(id));
    }
}
