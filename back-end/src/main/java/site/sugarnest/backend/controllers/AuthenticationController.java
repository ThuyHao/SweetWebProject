package site.sugarnest.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.ApiDto;
import site.sugarnest.backend.dto.AuthRequestDto;
import site.sugarnest.backend.dto.AuthResponseDto;
import site.sugarnest.backend.service.account.AuthenticationService;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public ApiDto<AuthResponseDto> login(@RequestBody AuthRequestDto authRequestDto) {
        var authResult = authenticationService.authenticate(authRequestDto);
        return ApiDto.<AuthResponseDto>builder()
                .message("Login successful!")
                .result(authResult)
                .build();
    }

}
