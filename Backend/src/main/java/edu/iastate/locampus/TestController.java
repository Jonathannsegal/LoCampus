package edu.iastate.locampus;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @RequestMapping("/ping")
    public Map<String, String> ping() {
        Map<String, String> map = new HashMap<>();
        map.put("message", "Pong");
        return map;
    }
}
