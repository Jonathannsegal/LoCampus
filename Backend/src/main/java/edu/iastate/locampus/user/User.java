package edu.iastate.locampus.user;

import edu.iastate.locampus.util.IntegerSetConverter;
import edu.iastate.locampus.util.StringSetConverter;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "id")
    @NotFound(action = NotFoundAction.IGNORE)
    private Integer id;

    @Column(name = "email")
    @NotFound(action = NotFoundAction.IGNORE)
    private String email;

    @Column(name = "name")
    @NotFound(action = NotFoundAction.IGNORE)
    private String name;

    @Column(name = "password")
    @NotFound(action = NotFoundAction.IGNORE)
    private String password;

    @Column(name = "verify")
    @NotFound(action = NotFoundAction.IGNORE)
    private String verify;

    @Column(name = "badges")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = StringSetConverter.class)
    private Set<String> badges;

    @Column(name = "roles")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = StringSetConverter.class)
    private Set<String> roles;

    @Column(name = "bio")
    @NotFound(action = NotFoundAction.IGNORE)
    private String bio;

    @Column(name = "posts")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = IntegerSetConverter.class)
    private Set<Integer> posts;

    @Column(name = "rankedPosts")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = IntegerSetConverter.class)
    private Set<Integer> rankedPosts;

    @Column(name = "followers")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = IntegerSetConverter.class)
    private Set<Integer> followers;

    @Column(name = "followedBy")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = IntegerSetConverter.class)
    private Set<Integer> followedBy;

    @Column(name = "friendRequests")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = IntegerSetConverter.class)
    private Set<Integer> friendRequests;

    @Column(name = "friends")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = IntegerSetConverter.class)
    private Set<Integer> friends;

    public User() {
    }

    public User(String name, String email, String password, String verify) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.verify = verify;
    }

    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVerify() {
        return verify;
    }

    public void setVerify(String verify) {
        this.verify = verify;
    }

    public Set<String> getBadges() {
        return badges;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public boolean addRole(String role) {
        return roles.add(role);
    }

    public boolean removeRole(String role) {
        return roles.remove(role);
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Set<Integer> getPosts() {
        return posts;
    }

    public Set<Integer> getRankedPosts() {
        return rankedPosts;
    }

    public boolean addFollower(Integer followerId) {
        return followers.add(followerId);
    }

    public boolean addFollowedBy(Integer followedId) {
        return followedBy.add(followedId);
    }

    public Set<Integer> getFollowers() {
        return followers;
    }

    public Set<Integer> getFollowedBy() {
        return followedBy;
    }

    public boolean addFriendRequest(Integer requestorId) {
        return friendRequests.add(requestorId);
    }

    public boolean removeFriendRequest(Integer requestorId) {
        return friendRequests.remove(requestorId);
    }

    public Set<Integer> getFriendRequests() {
        return friendRequests;
    }

    public boolean addFriend(Integer friendId) {
        return friendRequests.add(friendId);
    }

    public boolean removeFriend(Integer friendId) {
        return friendRequests.remove(friendId);
    }

    public Set<Integer> getFriends() {
        return friendRequests;
    }

    public String toString() {
        return name + " " + bio;
    }
}