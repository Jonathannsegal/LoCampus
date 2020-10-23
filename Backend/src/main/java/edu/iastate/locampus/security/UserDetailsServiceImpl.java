package edu.iastate.locampus.security;

import edu.iastate.locampus.role.Permission;
import edu.iastate.locampus.role.RoleRepository;
import edu.iastate.locampus.user.User;
import edu.iastate.locampus.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByName(username).orElseThrow(() -> new UsernameNotFoundException("User does not exist."));
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        for (String role : user.getRoles()) {
            for (Permission permission : roleRepository.findByName(role).get().getPermissions()) {
                authorities.add(new SimpleGrantedAuthority(permission.toString()));
            }
        }
        return new UserDetailsImpl(user.getId(), user.getName(), user.getEmail(), user.getPassword(), authorities);
    }
}