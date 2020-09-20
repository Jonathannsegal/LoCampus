package edu.iastate.locampus.location;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "user")
public class Location {

    @Id
    @GeneratedValue
    @Column(name = "id")
    @NotFound(action = NotFoundAction.IGNORE)
    private UUID id;

    @Column(name = "bio")
    @NotFound(action = NotFoundAction.IGNORE)
    private String bio;

    @Column(name = "posts")
    @NotFound(action = NotFoundAction.IGNORE)
    private Integer[] posts;

    public UUID getId() {
        return id;
    }

    public String getBio() {
        return bio;
    }

    public Integer[] getPosts() {
        return posts;
    }
}
