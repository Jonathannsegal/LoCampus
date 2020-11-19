package edu.iastate.locampus;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

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

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public String greeting(String message) throws Exception {
      Thread.sleep(1000); // simulated delay
      return "Hello, " + HtmlUtils.htmlEscape(message + "!");
    }
  
}
