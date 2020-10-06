package edu.iastate.locampus.role;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue
    @Column(name = "id")
    @NotFound(action = NotFoundAction.IGNORE)
    private Integer id;

    @Column(name = "name")
    @NotFound(action = NotFoundAction.IGNORE)
    private String name;

    @Column(name = "permissions")
    @NotFound(action = NotFoundAction.IGNORE)
    private Set<Permission> permissions;

    private Set<Permission> getPermissions() {
        return permissions;
    }

    private void addPermission(Permission permission) {
        permissions.add(permission);
    }

    private void removePermission(Permission permission) {
        permissions.remove(permission);
    }
}