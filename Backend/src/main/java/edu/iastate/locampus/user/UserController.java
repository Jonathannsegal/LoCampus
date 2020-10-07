package edu.iastate.locampus.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectMapper objectMapper;

    private JsonParser parser = JsonParserFactory.getJsonParser();

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/user/register")
    public String createUser(@RequestBody User user) {
        if (user.getEmail() == null || user.getName() == null || user.getPassword() == null || user.getVerify() == null) {
            return null;
        }

        if (!user.getPassword().equals(user.getVerify())) {
            return null;
        }

        userRepository.save(user);
        return "Name " + user.getName() + " Email " + user.getEmail() + " UUID " + user.getId();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/user/{userId}/delete")
    public void deleteUser(@PathVariable("userId") UUID userId) {
        userRepository.delete(userRepository.getOne(userId));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userid}/exists")
    public ObjectNode exists(@PathVariable("userid") UUID userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        boolean exists = (userRepository.findById(userId).orElse(null) != null) ? true : false;
        objectNode.put("exists", exists);
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userId}/role")
    public ObjectNode getRole(@PathVariable("userId") UUID userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.put("role", userRepository.getOne(userId).getRole());
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userid}/badges")
    public ObjectNode getBadges(@PathVariable("userId") UUID userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("badges", objectMapper.valueToTree(userRepository.getOne(userId).getBadges()));
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/user/{userId}/setbio")
    public void setBio(@PathVariable("userId") UUID userId, @RequestBody String bio) {
        userRepository.getOne(userId).setBio((String) parser.parseMap(bio).get("bio"));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userId}/bio")
    public ObjectNode getBio(@PathVariable("userId") UUID userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.put("bio", userRepository.getOne(userId).getBio());
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userid}/posts")
    public ObjectNode getPosts(@PathVariable("userid") UUID userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("posts", objectMapper.valueToTree(userRepository.getOne(userId).getPosts()));
        return objectNode;
    }
}