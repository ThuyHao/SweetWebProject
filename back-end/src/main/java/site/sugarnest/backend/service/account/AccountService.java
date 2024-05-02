package site.sugarnest.backend.service.account;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import site.sugarnest.backend.dto.AccountDto;
import site.sugarnest.backend.entities.AccountEntity;
import site.sugarnest.backend.exception.AppException;
import site.sugarnest.backend.exception.ErrorCode;
import site.sugarnest.backend.mapper.IAccountMapper;
import site.sugarnest.backend.reponsitoties.IAccountRepository;


@Service
@AllArgsConstructor
public class AccountService implements IAccountService {

    private IAccountRepository iAccountRepository;
    private IAccountMapper iAccountMapper;

    public AccountDto createAccount(AccountDto accountDto) {
         if(iAccountRepository.findByEmail(accountDto.getEmail()).isPresent()){
             throw new AppException(ErrorCode.ACCOUNT_EXITED);
         }if(iAccountRepository.findByPhone(accountDto.getPhone()).isPresent()){
             throw new AppException(ErrorCode.PHONE_EXISTED);
        }

        AccountEntity accountEntity = iAccountMapper.mapToAccountEntity(accountDto);

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        accountEntity.setPassword(passwordEncoder.encode(accountDto.getPassword()));
        accountEntity.setCurrentPassword(passwordEncoder.encode(accountDto.getPassword()));

        accountEntity.setIsDelete("false");
        accountEntity.setIsActive("true");
        accountEntity.setCreateAt();
        accountEntity.setUpdateAt();
        accountEntity.setNumber_login_fail(0);

        iAccountRepository.save(accountEntity);

        return iAccountMapper.mapToAccountDto(accountEntity);
    }

}