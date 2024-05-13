package site.sugarnest.backend.service.account;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import lombok.extern.apachecommons.CommonsLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import site.sugarnest.backend.dto.AuthRequestDto;
import site.sugarnest.backend.dto.AuthResponseDto;
import site.sugarnest.backend.exception.AppException;
import site.sugarnest.backend.exception.ErrorCode;
import site.sugarnest.backend.reponsitoties.IAccountRepository;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@CommonsLog
@Service
public class AuthenticationService {

    @Autowired
    private IAccountRepository iAccountRepository;

    @Value("${SIGNER_KEY}")
    protected String SIGNER_KEY;

    public AuthResponseDto authenticate(AuthRequestDto authRequestDto) {
        var user =iAccountRepository.findByEmail(authRequestDto.getEmail())
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        boolean matchesPass = passwordEncoder.matches(authRequestDto.getPassword(), user.getPassword());

        if (!matchesPass) {
            throw new AppException(ErrorCode.PASSWORD_NOT_MATCHED);
        }

        var token = generateToken(user.getEmail(), user.getId());

        return AuthResponseDto.builder()
                .token(token)
                .authenticated(true)
                .build();

    }

    private String generateToken(String email, Long idAccount) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(email)
                .claim("id", idAccount)
                .issuer("SugarNest.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.MINUTES).toEpochMilli()
                ))
                .claim("Role", "ROLE_USER")
                .jwtID(passwordEncoder.encode(email))
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Cannot sign JWT object", e);
            throw new RuntimeException(e);
        }
    }



}