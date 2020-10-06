package edu.iastate.locampus.role;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "role")
public class Role {

    @Id
    @Column(name = "name")
    @NotFound(action = NotFoundAction.IGNORE)
    private String name;

    @Column(name = "permissions")
    @NotFound(action = NotFoundAction.IGNORE)
    private Set<Permission> permissions;

    public String getName() {
        return name;
    }

    public Set<Permission> getPermissions() {
        return permissions;
    }

    public void addPermission(Permission permission) {
        permissions.add(permission);
    }

    public void removePermission(Permission permission) {
        permissions.remove(permission);
    }
}