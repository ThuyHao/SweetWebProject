package site.sugarnest.backend.service.account;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import site.sugarnest.backend.dto.request.AccountRequest;
import site.sugarnest.backend.dto.response.AccountResponse;
import site.sugarnest.backend.entities.AccountEntity;
import site.sugarnest.backend.exception.AppException;
import site.sugarnest.backend.exception.ErrorCode;
import site.sugarnest.backend.mapper.IAccountMapper;
import site.sugarnest.backend.reponsitoties.IAccountRepository;
import site.sugarnest.backend.reponsitoties.IRoleRepository;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.UUID;


@Slf4j
@Service
@AllArgsConstructor
public class AccountService implements IAccountService {

    private IAccountRepository iAccountRepository;
    private IAccountMapper iAccountMapper;
    private EmailService emailService;
    private IRoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
    private final String verificationCode = UUID.randomUUID().toString();

    public void createAccount(AccountRequest accountDto) {
        if (iAccountRepository.findByEmail(accountDto.getEmail()).isPresent()) {
            throw new AppException(ErrorCode.ACCOUNT_EXITED);
        }
        if (iAccountRepository.findByPhone(accountDto.getPhone()).isPresent()) {
            throw new AppException(ErrorCode.PHONE_EXISTED);
        }

        AccountEntity accountEntity = iAccountMapper.mapToAccountEntity(accountDto);
        accountEntity.setPassword(passwordEncoder.encode(accountDto.getPassword()));
        accountEntity.setCurrentPassword(passwordEncoder.encode(accountDto.getPassword()));

        accountEntity.setIsDelete("false");
        accountEntity.setIsActive("true");
        accountEntity.setCreateAt();
        accountEntity.setUpdateAt();
        accountEntity.setNumber_login_fail(0);
        accountEntity.setEnabled("false");
        // Set role
        accountEntity.setRoles(new HashSet<>(Collections.singletonList(roleRepository.findById("USER").orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_EXITED)))));

        accountEntity.setVerificationCode(passwordEncoder.encode(verificationCode));
        emailService.sendMail(accountDto.getEmail(), "Xác thực email", verificationCode);

        iAccountRepository.save(accountEntity);

        iAccountMapper.mapToAccountDto(accountEntity);
    }

    //    @PreAuthorize("hasAuthority('APPROVE_POST')")
    @Override
    public List<AccountResponse> findAll() {
        List<AccountEntity> accountEntities = iAccountRepository.findAll();
        return accountEntities.stream().map(iAccountMapper::mapToAccountDto).toList();
    }

    //    @PostAuthorize("returnObject.email == authentication.name")
    @Override
    public AccountResponse findById(Long id) {
        AccountEntity accountEntity = iAccountRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));
        return iAccountMapper.mapToAccountDto(accountEntity);
    }

    @Override
    public AccountResponse getMyInfo() {
        var context = SecurityContextHolder.getContext();
        String accountName = context.getAuthentication().getName();
        System.out.println(accountName);
        AccountEntity accountEntity = iAccountRepository.findByAccountName(accountName)
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));
        return iAccountMapper.mapToAccountDto(accountEntity);
    }

    @Override
    public String forgetPasswordVerifyByEmail(String email) {
        AccountEntity accountEntity = iAccountRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));
        emailService.sendMail(email, "Your New Password", verificationCode);
        accountEntity.setVerificationCode(passwordEncoder.encode(verificationCode));
        iAccountRepository.save(accountEntity);
        return "ok";
    }

    @Override
    public boolean checkVerifyCodeForgetPass(String email, String verificationCode) {
        AccountEntity accountEntity = iAccountRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));
        boolean res = false;
        if (passwordEncoder.matches(verificationCode, accountEntity.getVerificationCode())) {
                res = true;

        }
        return res;
    }

    public void updateAccount(AccountResponse accountDto) {
        AccountEntity accountEntity = iAccountRepository.findByEmail(accountDto.getEmail())
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_EXITED));
    }
}
