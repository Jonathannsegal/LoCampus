package edu.iastate.locampus.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/user/register")
    public String createUser(@RequestBody User user) {
        userRepository.save(user);
        return "Name " + user.getName() + " Email " + user.getEmail();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userId}/role")
    public ObjectNode getRole(@PathVariable("userId") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.put("role", userRepository.getOne(userId).getRole());
        return objectNode;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userid}/badges")
    public ObjectNode getBadges(@PathVariable("userId") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("badges", objectMapper.valueToTree(userRepository.getOne(userId).getBadges()));
        return objectNode;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userId}/bio")
    public ObjectNode getBio(@PathVariable("userId") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.put("bio", userRepository.getOne(userId).getBio());
        return objectNode;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userid}/posts")
    public ObjectNode getPosts(@PathVariable("userid") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("posts", objectMapper.valueToTree(userRepository.getOne(userId).getPosts()));
        return objectNode;
    }
}