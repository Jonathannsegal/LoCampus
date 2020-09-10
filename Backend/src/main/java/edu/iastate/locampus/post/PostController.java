package edu.iastate.locampus.post;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    @Autowired
    PostRepository postRepository;

    private final Logger logger = LoggerFactory.getLogger(PostController.class);

    @RequestMapping(method = RequestMethod.POST, path = "/post/new")
    public String saveOwner(@RequestBody Post post) {
        postRepository.save(post);
        return "Author " + post.getAuthor() + " Content " + post.getContent();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/post")
    public List<Post> getAllPosts() {
        logger.info("Entered into Controller Layer");
        List<Post> results = postRepository.findAll();
        logger.info("Number of Records Fetched:" + results.size());
        return results;
    }
}
