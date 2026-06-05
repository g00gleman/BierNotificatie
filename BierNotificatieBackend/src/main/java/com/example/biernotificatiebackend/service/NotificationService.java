package com.example.biernotificatiebackend.service;

import com.example.biernotificatiebackend.api.dto.NotificationDTO;
import com.example.biernotificatiebackend.converter.NotificationConverter;
import com.example.biernotificatiebackend.data.entity.Notification;
import com.example.biernotificatiebackend.data.repository.NotificationRepository;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private final NotificationRepository repository;
    private final NotificationConverter converter;

    public NotificationService(
            NotificationRepository repository,
            NotificationConverter converter
    ) {
        this.repository = repository;
        this.converter = converter;
    }

    public NotificationDTO createNotification(NotificationDTO notificationDTO) {

        Notification notification =
                converter.dtoToEntity(notificationDTO);

        Notification savedNotification =
                repository.save(notification);

        return converter.entityToDto(savedNotification);
    }
}