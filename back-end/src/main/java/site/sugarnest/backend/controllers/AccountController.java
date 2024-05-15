package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.request.AccountRequest;
import site.sugarnest.backend.dto.response.AccountResponse;
import site.sugarnest.backend.service.account.IAccountService;

@RestController
@RequestMapping("/account")
@AllArgsConstructor
public class AccountController {

    private IAccountService iAccountService;

    @PostMapping("register")
    public ResponseEntity<String> createAccount(@RequestBody AccountRequest accountDto) {
        iAccountService.createAccount(accountDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Please enter your verification code");
    }
    @GetMapping("/all")
    public ResponseEntity<?> getAllAccount(){
        return ResponseEntity.ok(iAccountService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountResponse> getAccountById(@PathVariable Long id){
        return ResponseEntity.ok(iAccountService.findById(id));
    }
    @GetMapping("/myInfo")
    public ResponseEntity<AccountResponse> getMyInfo(){
        return ResponseEntity.ok(iAccountService.getMyInfo());
    }

}
