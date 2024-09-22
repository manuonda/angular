package com.manuonda.task.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.security.Key;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;


@Service
public class JwtService {

    private static final String SECRET_KEY = "MjU2Yml0c2tleWVuY29kZWQxMjM0NTY3ODkwMjAyMzI0MjU2";  // Ejemplo de clave segura

    
    public String getToken(UserDetails user){
        return this.getToken(new HashMap<>(),user);
    }

    /**
     * @param extraClaims
     * @param user
     * @return
     */
    String getToken(Map<String, Object> extraClaims, UserDetails user){
  
       return  Jwts
        .builder()
        .setClaims(extraClaims)
        .setSubject(user.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis()+1000*60*24))
        .signWith(getKey(),SignatureAlgorithm.HS256)
        .compact();
    }

    private Key getKey(){
       byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
       return Keys.hmacShaKeyFor(keyBytes);
    }

    public String getUsernameFromToken(String token) {
        return getClaim(token, Claims::getSubject);
    }

    public boolean isValidateToken(String token, UserDetails userDetails) {
       final String username =  getUsernameFromToken(token); 
       return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }


    /*
     * Function utilities 
     */
    private Claims getAllClaims(String token){
        return Jwts
        .parserBuilder()
        .setSigningKey(getKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
    }

    public <T> T getClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = getAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Date getExpiration(String token){
        return getClaim(token, Claims::getExpiration);
    }
    
    private Boolean isTokenExpired(String token){
        return getExpiration(token).before(new Date());
    }
}
