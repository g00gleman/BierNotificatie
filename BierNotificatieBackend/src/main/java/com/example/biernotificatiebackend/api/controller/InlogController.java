package com.example.biernotificatiebackend.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InlogController {
    @GetMapping("/login")
    public String GetLogin() {
        return "Login";
    }
}
