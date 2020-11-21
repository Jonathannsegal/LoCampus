package edu.iastate.locampus.post;

import java.util.List;
import java.util.Map;

import edu.iastate.locampus.Utils;
import edu.iastate.locampus.role.Permission;
import edu.iastate.locampus.security.UserDetailsImpl;
import edu.iastate.locampus.user.User;
import edu.iastate.locampus.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    private final JsonParser parser = JsonParserFactory.getJsonParser();
    private final Logger logger = LoggerFactory.getLogger(PostController.class);

    @PreAuthorize("hasAuthority('POST_CREATE')")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(method = RequestMethod.POST, path = "/post/new")
    public String createPost(@RequestBody Post post) {
        postRepository.save(post);
        return post.toString();
    }

    @PreAuthorize("hasAuthority('POST_DELETE')")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/post/{postId}/delete")
    public void deletePost(@PathVariable("postId") Integer postId) {
        Post post = postRepository.getOne(postId);
        UserDetailsImpl userDetails = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal());

        if (post.getAuthor() != userDetails.getId() && !Utils.hasPermission(userDetails, Permission.POST_DELETE_ANY)) {
            return;
        }

        postRepository.delete(post);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/post/{postId}/setcontent")
    @PreAuthorize("hasAuthority('POST_SET_CONTENT')")
    public void setContent(@PathVariable("postId") Integer postId, @RequestBody String content) {
        Post post = postRepository.getOne(postId);
        UserDetailsImpl userDetails = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal());

        if (post.getAuthor() != userDetails.getId() && !Utils.hasPermission(userDetails, Permission.POST_SET_CONTENT_ANY)) {
            return;
        }

        post.setContent((String) parser.parseMap(content).get("content"));
    }

    @PreAuthorize("hasAuthority('POST_RANK')")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/post/{postId}/rank")
    public void rank(@PathVariable("postId") Integer postId, @RequestBody String content) {
        Map<String, Object> body = parser.parseMap(content);
        User user = userRepository.getOne((int) body.get("user"));

        if (user.getRankedPosts().contains(postId)) {
            return; // user has already ranked a post
        }

        Post post = postRepository.getOne(postId);

        String direction = (String) body.get("direction");
        if (direction.equals("up")) {
            post.setRank(post.getRank() + 1);
        } else if (direction.equals("down")) {
            post.setRank(post.getRank() - 1);
        }

        user.getRankedPosts().add(postId);
    }

    @PreAuthorize("hasAuthority('POST_LIST')")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(method = RequestMethod.GET, path = "/post")
    public List<Post> getAllPosts() {
        List<Post> results = postRepository.findAll();
        return results;
    }
}
