package site.sugarnest.backend.service.account;

import site.sugarnest.backend.dto.AccountDto;

public interface IAccountService{
    AccountDto createAccount(AccountDto accountDto);
}
