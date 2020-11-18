package edu.iastate.locampus.post;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    private final JsonParser parser = JsonParserFactory.getJsonParser();

    // @PreAuthorize("hasAuthority('POST_CREATE')")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(method = RequestMethod.POST, path = "/post/new")
    public String createPost(@RequestBody Post post) {
        postRepository.save(post);
        return post.toString();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/post/{postId}/delete")
    @PreAuthorize("hasAuthority('POST_DELETE')")
    public void deletePost(@PathVariable("postId") Integer postId) {
        postRepository.delete(postRepository.getOne(postId));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/post/{postId}/setcontent")
    @PreAuthorize("hasAuthority('POST_SET_CONTENT')")
    public void setContent(@PathVariable("postId") Integer postId, @RequestBody String content) {
        postRepository.getOne(postId).setContent((String) parser.parseMap(content).get("content"));
    }

    // @PreAuthorize("hasAuthority('POST_RANK')")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/post/{postId}/rank")
    public void rank(@PathVariable("postId") Integer postId, @RequestBody String content) {
        Map<String, Object> body = parser.parseMap(content);
        Post post = postRepository.getOne(postId);

        String direction = (String) body.get("direction");
        if (direction.equals("up")) {
            post.setRank(post.getRank() + 1);
        } else if (direction.equals("down")) {
            post.setRank(post.getRank() - 1);
        }
    }

    // @PreAuthorize("hasAuthority('POST_LIST')")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(method = RequestMethod.GET, path = "/post")
    public List<Post> getAllPosts() {
        List<Post> results = postRepository.findAll();
        return results;
    }
}
