package com.manuonda.task.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration
@EnableWebMvc
public class SwaggerConfiguration {


    @Bean
    public OpenAPI getOpenAPI(){
        Info info = new Info()
        .title("Rest Api")
        .description("Rest Api")
        .version("3.0.0");
        return new OpenAPI().info(info);
    }
}
