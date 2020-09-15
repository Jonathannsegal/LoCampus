package edu.iastate.locampus.location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userid}/posts")
    public Integer[] getPosts(@PathVariable("userid") Integer userId) {
        return locationRepository.getOne(userId).getPosts();
    }
}
