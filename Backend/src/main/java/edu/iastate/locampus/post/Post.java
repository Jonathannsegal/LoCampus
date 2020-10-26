package edu.iastate.locampus.post;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.springframework.core.style.ToStringCreator;

import java.util.UUID;

@Entity
@Table(name = "post")
public class Post {

    @Id
	@Column(name = "id", updatable = false, nullable = false)
    @NotFound(action = NotFoundAction.IGNORE)
    private UUID id = UUID.randomUUID();

    @Column(name = "author")
    @NotFound(action = NotFoundAction.IGNORE)
    private String author;

    @Column(name = "timestamp")
    @NotFound(action = NotFoundAction.IGNORE)
    private String timestamp;

    @Column(name = "content")
    @NotFound(action = NotFoundAction.IGNORE)
    private String content;

    @Column(name = "location")
    @NotFound(action = NotFoundAction.IGNORE)
    private String location;

    @Column(name = "rank")
    @NotFound(action = NotFoundAction.IGNORE)
    private Integer rank;

    public Post() {
        this.rank = 0;
    }

    public UUID getId() {
        return id;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTimestamp() {
        return this.timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    @Override
    public String toString() {
        return new ToStringCreator(this).append("id", this.getId()).append("timestamp", this.getTimestamp())
                .append("author", this.getAuthor()).append("content", this.getContent())
                .append("location", this.getLocation()).toString();
    }
}
