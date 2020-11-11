package edu.iastate.locampus;

import edu.iastate.locampus.role.Permission;
import edu.iastate.locampus.security.UserDetailsImpl;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;

import java.util.Date;

public class Utils {

    private static String secret = "temptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemptemp";

    public static String getJWTToken(Authentication auth) {
        UserDetailsImpl principal = (UserDetailsImpl) auth.getPrincipal();

        return Jwts.builder()
                .setSubject((principal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + 604800000)) // expiration in MS
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public static boolean isValidJWT(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public static boolean hasPermission(UserDetailsImpl userDetails, Permission permission) {
        return userDetails.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(permission.toString()));
    }
}