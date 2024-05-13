package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.sugarnest.backend.dto.AccountDto;
import site.sugarnest.backend.service.account.IAccountService;

@RestController
@RequestMapping("/account")
@AllArgsConstructor
public class AccountController {

    private IAccountService iAccountService;

    @PostMapping("register")
    public ResponseEntity<String> createAccount(@RequestBody AccountDto accountDto) {
        iAccountService.createAccount(accountDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Please enter your verification code");
    }
}
