package com.example.biernotificatiebackend.converter;

import com.example.biernotificatiebackend.api.dto.NotificationDTO;
import com.example.biernotificatiebackend.data.entity.Notification;
import org.springframework.stereotype.Component;

@Component
public class NotificationConverter {

    public Notification dtoToEntity(NotificationDTO dto) {

        Notification notification = new Notification();

        notification.setLocation(dto.getLocation());
        notification.setCategory(dto.getCategory());
        notification.setDrink(dto.getDrink());
        notification.setMessage(dto.getMessage());
        notification.setTime(dto.getTime());

        return notification;
    }

    public NotificationDTO entityToDto(Notification entity) {

        NotificationDTO dto = new NotificationDTO();

        dto.setLocation(entity.getLocation());
        dto.setCategory(entity.getCategory());
        dto.setDrink(entity.getDrink());
        dto.setMessage(entity.getMessage());
        dto.setTime(entity.getTime());

        return dto;
    }
}