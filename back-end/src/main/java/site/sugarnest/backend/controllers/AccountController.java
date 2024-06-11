package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.dto.PasswordChangeRequest;
import site.sugarnest.backend.dto.request.EmailExistResquest;
import site.sugarnest.backend.dto.response.ApiResponse;
import site.sugarnest.backend.dto.request.AccountRequest;
import site.sugarnest.backend.dto.response.AccountResponse;
import site.sugarnest.backend.service.account.IAccountService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/account")
@AllArgsConstructor
public class AccountController {

    private IAccountService iAccountService;

    @PostMapping("register")
    public ApiResponse<String> createAccount(@RequestBody AccountRequest accountDto) {
        iAccountService.createAccount(accountDto);
        return ApiResponse.<String>builder()
                .code(200)
                .message("Please enter your verification code")
                .build();
    }

    @PutMapping("edit/{id}")
    public ApiResponse<String> editAccount(@PathVariable Long id, @RequestBody AccountRequest accountDto) {
        iAccountService.editAccount(id, accountDto);
        return ApiResponse.<String>builder()
                .code(200)
                .message("Success")
                .build();
    }
    @PutMapping("edit")
    public ApiResponse<String> editMyAccount(@RequestBody AccountRequest accountDto) {
        iAccountService.editMyAccount(accountDto);
        return ApiResponse.<String>builder()
                .code(200)
                .message("Success")
                .build();
    }

    @PutMapping("edit/password")
    public ApiResponse<String> editMyPassword(@RequestBody PasswordChangeRequest passwordChangeRequest) {
        iAccountService.editMyPassword(passwordChangeRequest);
        return ApiResponse.<String>builder()
                .code(200)
                .message("Success")
                .build();
    }

    @GetMapping("/all")
    public ApiResponse<List<AccountResponse>> getAllAccount() {
        return ApiResponse.<List<AccountResponse>>builder()
                .code(200)
                .message("Success")
                .result(iAccountService.findAll())
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<AccountResponse> getAccountById(@PathVariable Long id) {
        return ApiResponse.<AccountResponse>builder()
                .code(200)
                .message("Success")
                .result(iAccountService.findById(id))
                .build();
    }

    @GetMapping("/myInfo")
    public ApiResponse<AccountResponse> getMyInfo() {
        return ApiResponse.<AccountResponse>builder()
                .code(200)
                .message("Success")
                .result(iAccountService.getMyInfo())
                .build();
    }

    @PostMapping("/checkEmail")
    public ApiResponse<String> checkExistedEmail(@RequestBody EmailExistResquest emailExistRequest) {
        if (iAccountService.checkExistedEmail(emailExistRequest.getEmail())) {
            return ApiResponse.<String>builder()
                    .code(200)
                    .result("true")
                    .build();
        } else {
            return ApiResponse.<String>builder()
                    .code(404)
                    .result("false")
                    .build();
        }

    }

}
