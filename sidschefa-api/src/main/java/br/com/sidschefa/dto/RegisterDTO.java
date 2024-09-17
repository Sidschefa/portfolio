package br.com.sidschefa.dto;

import br.com.sidschefa.model.UserRole;

public record RegisterDTO(String login, String password, UserRole role) {
}
