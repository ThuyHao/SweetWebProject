package site.sugarnest.backend.controllers;

import com.nimbusds.jose.JOSEException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.*;
import site.sugarnest.backend.dto.request.IntrospectRequest;
import site.sugarnest.backend.dto.response.IntrospectResponse;
import site.sugarnest.backend.service.account.AuthenticationService;

import java.text.ParseException;

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
    @PostMapping("/introspect")
    public ApiDto<IntrospectResponse> introspect(@RequestBody IntrospectRequest request)
            throws JOSEException, ParseException {
        var result = authenticationService.introspect(request);
        return ApiDto.<IntrospectResponse>builder()
                .message("Introspect successful!")
                .result(result)
                .build();

    }

}
