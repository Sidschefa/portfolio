package br.com.sidschefa.controller;

import br.com.sidschefa.configuration.security.TokenService;
import br.com.sidschefa.dto.AuthenticationDTO;
import br.com.sidschefa.dto.LoginResponseDTO;
import br.com.sidschefa.dto.RegisterDTO;
import br.com.sidschefa.model.User;
import br.com.sidschefa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

   @Autowired
    private AuthenticationManager authenticationManager;

   @Autowired
   private UserRepository repository;

   @Autowired
   private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate((usernamePassword));

        var token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data) {
        if (this.repository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();

        String encriptPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.login(), encriptPassword, data.role());

        this.repository.save(newUser);

        return ResponseEntity.ok().build();
    }

}
