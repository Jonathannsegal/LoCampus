package edu.iastate.locampus.location;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userid}/posts")
    public ObjectNode getPosts(@PathVariable("userid") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("badges", objectMapper.valueToTree(locationRepository.getOne(userId).getPosts()));
        return objectNode;
    }
}
