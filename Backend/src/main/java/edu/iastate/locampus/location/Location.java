package edu.iastate.locampus.location;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @NotFound(action = NotFoundAction.IGNORE)
    private Integer id;

    @Column(name = "bio")
    @NotFound(action = NotFoundAction.IGNORE)
    private String bio;

    @Column(name = "posts")
    @NotFound(action = NotFoundAction.IGNORE)
    private Integer[] posts;

    public int getId() {
        return id;
    }

    public String getBio() {
        return bio;
    }

    public Integer[] getPosts() {
        return posts;
    }
}
