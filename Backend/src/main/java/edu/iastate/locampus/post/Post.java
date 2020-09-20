package edu.iastate.locampus.post;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
    @GeneratedValue
    @Column(name = "id")
    @NotFound(action = NotFoundAction.IGNORE)
    private UUID id;

    @Column(name = "author")
    @NotFound(action = NotFoundAction.IGNORE)
    private String author;

    @Column(name = "content")
    @NotFound(action = NotFoundAction.IGNORE)
    private String content;

    public UUID getId() {
        return id;
    }

    public boolean isNew() {
        return this.id == null;
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

    @Override
    public String toString() {
        return new ToStringCreator(this)
                .append("id", this.getId())
                .append("new", this.isNew())
                .append("author", this.getAuthor())
                .append("content", this.getContent()).toString();
    }
}
