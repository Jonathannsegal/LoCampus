package edu.iastate.locampus.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import edu.iastate.locampus.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private PasswordEncoder encoder;

    private final JsonParser parser = JsonParserFactory.getJsonParser();

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/user/register")
    public String createUser(@RequestBody User user) {
        if (user.getEmail() == null || user.getName() == null || user.getPassword() == null
                || user.getVerify() == null) {
            return null;
        }

        if (!user.getPassword().equals(user.getVerify())) {
            return null;
        }

        user.setPassword(encoder.encode(user.getPassword()));

        userRepository.save(user);
        return "Name " + user.getName() + " Email " + user.getEmail() + " Integer " + user.getId();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/user/auth")
    public ObjectNode authenticate(@RequestBody Map<String, String> body) {
        Authentication auth = authManager
                .authenticate(new UsernamePasswordAuthenticationToken(body.get("username"), body.get("password")));
        SecurityContextHolder.getContext().setAuthentication(auth);
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.put("jwt", Utils.getJWTToken(auth));
        return objectNode;
    }

    // @PreAuthorize("hasAuthority('USER_LIST')")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(method = RequestMethod.GET, path = "/user/list")
    public List<User> getAllUsers() {
        List<User> results = userRepository.findAll();
        return results;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/user/{userId}/delete")
    @PreAuthorize("hasAuthority('USER_DELETE')")
    public void deleteUser(@PathVariable("userId") Integer userId) {
        userRepository.delete(userRepository.getOne(userId));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userid}/exists")
    @PreAuthorize("hasAuthority('USER_EXISTS')")
    public ObjectNode exists(@PathVariable("userid") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        boolean exists = userRepository.findById(userId).orElse(null) != null;
        objectNode.put("exists", exists);
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userId}/role")
    @PreAuthorize("hasAuthority('USER_GET_ROLES')")
    public ObjectNode getRole(@PathVariable("userId") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("role", objectMapper.valueToTree(userRepository.getOne(userId).getRoles()));
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userid}/badges")
    @PreAuthorize("hasAuthority('USER_GET_BADGES')")
    public ObjectNode getBadges(@PathVariable("userId") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("badges", objectMapper.valueToTree(userRepository.getOne(userId).getBadges()));
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/user/{userId}/setbio")
    @PreAuthorize("hasAuthority('USER_SET_BIO')")
    public void setBio(@PathVariable("userId") Integer userId, @RequestBody String bio) {
        userRepository.getOne(userId).setBio((String) parser.parseMap(bio).get("bio"));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userId}/bio")
    @PreAuthorize("hasAuthority('USER_GET_BIO')")
    public ObjectNode getBio(@PathVariable("userId") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.put("bio", userRepository.getOne(userId).getBio());
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{userid}/posts")
    @PreAuthorize("hasAuthority('USER_GET_POSTS')")
    public ObjectNode getPosts(@PathVariable("userid") Integer userId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("posts", objectMapper.valueToTree(userRepository.getOne(userId).getPosts()));
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{followerid}/{followedid}")
    @PreAuthorize("hasAuthority('USER_SET_FOLLOWERS')")
    public void setFollower(@PathVariable("followerid") Integer followerId, @PathVariable("followedid") Integer followedId) {
        userRepository.getOne(followerId).addFollower(followedId);
        userRepository.getOne(followedId).addFollowedBy(followerId);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{requesteeeId}/requestfriend/{requestorId}")
    @PreAuthorize("hasAuthority('USER_REQUEST_FRIEND')")
    public void requestFriend(@PathVariable("requestorId") Integer requestorId, @PathVariable("requesteeeId") Integer requesteeeId) {
        userRepository.getOne(requesteeeId).addFriendRequest(requestorId);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{requesteeeId}/removerequestfriend/{requestorId}")
    @PreAuthorize("hasAuthority('USER_REM_REQUEST_FRIEND')")
    public void removeRequestFriend(@PathVariable("requestorId") Integer requestorId, @PathVariable("requesteeeId") Integer requesteeeId) {
        userRepository.getOne(requesteeeId).removeFriendRequest(requestorId);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{requesteeeId}/addfriend/{requestorId}")
    @PreAuthorize("hasAuthority('USER_ADD_FRIEND')")
    public void addFriend(@PathVariable("requestorId") Integer requestorId, @PathVariable("requesteeeId") Integer requesteeeId) {
        User requestee = userRepository.getOne(requesteeeId);
        requestee.removeFriendRequest(requestorId);
        requestee.addFriend(requestorId);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{requesteeeId}/removefriend/{requestorId}")
    @PreAuthorize("hasAuthority('USER_ACCEPT_FRIEND')")
    public void acceptFriend(@PathVariable("requestorId") Integer requestorId, @PathVariable("requesteeeId") Integer requesteeeId) {
        userRepository.getOne(requesteeeId).removeFriend(requestorId);
    }
}