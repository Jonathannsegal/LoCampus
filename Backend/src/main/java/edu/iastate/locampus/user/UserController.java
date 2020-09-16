package edu.iastate.locampus.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/user/register")
    public String createUser(@RequestBody User user) {
        userRepository.save(user);
        return "Name " + user.getName() + " Email " + user.getEmail();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userId}/role")
    public String getRole(@PathVariable("userId") Integer userId) {
        return userRepository.getOne(userId).getRole();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userid}/badges")
    public String[] getBadges(@PathVariable("userId") Integer userId) {
        return userRepository.getOne(userId).getBadges();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userId}/bio")
    public String getBio(@PathVariable("userId") Integer userId) {
        return userRepository.getOne(userId).getBio();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{userid}/posts")
    public Integer[] getPosts(@PathVariable("userid") Integer userId) {
        return userRepository.getOne(userId).getPosts();
    }
}