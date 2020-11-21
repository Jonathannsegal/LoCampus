package edu.iastate.locampus.location;

import edu.iastate.locampus.util.IntegerSetConverter;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "location")
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
    @Convert(converter = IntegerSetConverter.class)
    private Set<Integer> posts;

    @Column(name = "staff")
    @NotFound(action = NotFoundAction.IGNORE)
    @Convert(converter = IntegerSetConverter.class)
    private Set<Integer> staff;

    public UUID getId() {
        return id;
    }

    public String getBio() {
        return bio;
    }

    public Set<Integer> getPosts() {
        return posts;
    }

    public Set<Integer> getStaff() {
        return staff;
    }
}
