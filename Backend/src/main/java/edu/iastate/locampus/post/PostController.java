package edu.iastate.locampus.post;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    private final JsonParser parser = JsonParserFactory.getJsonParser();
    private final Logger logger = LoggerFactory.getLogger(PostController.class);

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(method = RequestMethod.POST, path = "/post/new")
    public String createPost(@RequestBody Post post) {
        postRepository.save(post);
        return post.toString();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/post/{postId}/setcontent")
    public void setContent(@PathVariable("postId") Integer postId, @RequestBody String content) {
        postRepository.getOne(postId).setContent((String) parser.parseMap(content).get("content"));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(method = RequestMethod.GET, path = "/post")
    public List<Post> getAllPosts() {
        logger.info("Entered into Controller Layer");
        List<Post> results = postRepository.findAll();
        logger.info("Number of Records Fetched:" + results.size());
        return results;
    }
}
