package com.manuonda.task.config;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import java.util.*;
import jakarta.servlet.http.HttpServletRequest;

@Component
public class CustomCorsConfiguration implements CorsConfigurationSource{

    @Override
    @Nullable
    public CorsConfiguration getCorsConfiguration(HttpServletRequest arg0) {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:8080", "http://127.0.0.1:8080"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(List.of("*"));
        return config;
    }

}
