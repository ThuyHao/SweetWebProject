package site.sugarnest.backend.service.account;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import site.sugarnest.backend.constant.PredefinedRole;
import site.sugarnest.backend.dto.request.AccountRequest;
import site.sugarnest.backend.dto.response.AccountResponse;
import site.sugarnest.backend.entities.AccountEntity;
import site.sugarnest.backend.entities.RoleEntity;
import site.sugarnest.backend.exception.AppException;
import site.sugarnest.backend.exception.ErrorCode;
import site.sugarnest.backend.mapper.IAccountMapper;
import site.sugarnest.backend.reponsitoties.IAccountRepository;
import site.sugarnest.backend.reponsitoties.IRoleRepository;

import java.util.*;
import java.util.stream.Collectors;


@Slf4j
@Service
@AllArgsConstructor
public class AccountService implements IAccountService {

    private IAccountRepository iAccountRepository;
    private IAccountMapper iAccountMapper;
    private EmailService emailService;
    IRoleRepository roleRepository;

    public void createAccount(AccountRequest accountDto) {
        if (iAccountRepository.findByEmail(accountDto.getEmail()).isPresent()) {
            throw new AppException(ErrorCode.ACCOUNT_EXITED);
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
        accountEntity.setEnabled("false");
        // Set role
        accountEntity.setRoles(new HashSet<>(Collections.singletonList(roleRepository.findById(PredefinedRole.USER_ROLE)
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_EXITED)))));

        String verificationCode = UUID.randomUUID().toString();
        accountEntity.setVerificationCode(passwordEncoder.encode(verificationCode));
        emailService.sendMail(accountDto.getEmail(), "Xác thực email", verificationCode);

        iAccountRepository.save(accountEntity);

        iAccountMapper.mapToAccountDto(accountEntity);
    }


//    @PreAuthorize("hasAuthority('ACCOUNTS_PUT')")
    @Override
    public void editAccount(Long id, AccountRequest accountDto) {
        AccountEntity accountEntity = iAccountRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));

        accountEntity.setFullName(accountDto.getFullName());
        accountEntity.setPhone(accountDto.getPhone());
        accountEntity.setAddress(accountDto.getAddress());
        accountEntity.setBirthday(accountDto.getBirthday());
        accountEntity.setAddress(accountDto.getAddress());

        if (accountDto.getPassword() != null && !accountDto.getPassword().isEmpty()) {
            PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            accountEntity.setPassword(passwordEncoder.encode(accountDto.getPassword()));
            accountEntity.setCurrentPassword(passwordEncoder.encode(accountDto.getPassword()));
        }

        if (accountDto.getRoles() != null && !accountDto.getRoles().isEmpty()) {
            Set<RoleEntity> newRoles = accountDto.getRoles().stream()
                    .map(roleName -> roleRepository.findById(roleName)
                            .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_EXITED)))
                    .collect(Collectors.toSet());
            accountEntity.setRoles(newRoles);
        }
        accountEntity.setIsActive(accountDto.getIsActive());
        accountEntity.setUpdateAt();

        iAccountRepository.save(accountEntity);
    }


//    @PreAuthorize("hasAuthority('ACCOUNTS_GET')")
    @Override
    public List<AccountResponse> findAll() {
        List<AccountEntity> accountEntities = iAccountRepository.findAll();
        List<AccountResponse> accountDtos = accountEntities.stream().map(iAccountMapper::mapToAccountDto).toList();
        return accountDtos;
    }

//    @PreAuthorize("hasAuthority('ACCOUNTS_GET')")
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
        AccountEntity accountEntity = iAccountRepository.findByAccountName(accountName)
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));
        return iAccountMapper.mapToAccountDto(accountEntity);
    }

    @Override
    public boolean checkExistedEmail(String email) {
        return iAccountRepository.findByEmail(email).isPresent();
    }
}
