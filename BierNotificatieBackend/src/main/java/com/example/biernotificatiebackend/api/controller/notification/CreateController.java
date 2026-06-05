package com.example.biernotificatiebackend.api.controller.notification;

import com.example.biernotificatiebackend.api.dto.NotificationDTO;
import com.example.biernotificatiebackend.service.NotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notification")
@CrossOrigin(origins = "http://localhost:4200")
public class CreateController {

    private final NotificationService service;

    public CreateController(NotificationService service) {
        this.service = service;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createNotification(
            @RequestBody NotificationDTO notification
    ) {

        if (notification.getLocation() == null || notification.getLocation().isEmpty()) {
            return ResponseEntity.badRequest().body("Locatie is verplicht");
        }

        if (notification.getDrink() == null || notification.getDrink().isEmpty()) {
            return ResponseEntity.badRequest().body("Drank is verplicht");
        }

        try {

            NotificationDTO result = service.createNotification(notification);

            return ResponseEntity.ok(result);

        } catch (Exception e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }
}