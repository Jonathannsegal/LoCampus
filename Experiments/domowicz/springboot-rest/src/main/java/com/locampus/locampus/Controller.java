package com.locampus.locampus;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/ping")
    public String live() {
        return "pong";
    }

    @GetMapping("/users")
    public String[] users() {
        String[] users = {"Alex", "Andrew", "Jonathan", "Andrew"};
        return users;
    }

    @GetMapping("/test1")
    public String test1() {
        return "calling api succesfully";
    }
}
