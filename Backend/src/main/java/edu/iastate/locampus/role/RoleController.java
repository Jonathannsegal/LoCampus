package edu.iastate.locampus.role;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/role/create")
    public ObjectNode createRole(@RequestBody Role role) {
        roleRepository.save(role);

        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.put("name", role.getName());
        objectNode.set("permissions", objectMapper.valueToTree(role.getPermissions()));
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/role/{roleId}/delete")
    public void deleteRole(@PathVariable("roleId") String roleId) {
        roleRepository.delete(roleRepository.getOne(roleId));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/role/{roleId}/permissions")
    public ObjectNode getPermissions(@PathVariable("roleId") String roleId) {
        ObjectNode objectNode = objectMapper.createObjectNode();
        objectNode.set("permissions", objectMapper.valueToTree(roleRepository.getOne(roleId).getPermissions()));
        return objectNode;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{roleId}/addperm/{permission}")
    public void addPermission(@PathVariable("roleId") String roleId, @PathVariable("permission") String permission) {
        roleRepository.getOne(roleId).addPermission(Permission.valueOf(permission));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/user/{roleId}/remperm/{permission}")
    public void removePermission(@PathVariable("roleId") String roleId, @PathVariable("permission") String permission) {
        roleRepository.getOne(roleId).removePermission(Permission.valueOf(permission));
    }
}