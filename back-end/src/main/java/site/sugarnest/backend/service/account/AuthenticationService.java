package site.sugarnest.backend.service.account;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.extern.apachecommons.CommonsLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import site.sugarnest.backend.dto.AuthRequestDto;
import site.sugarnest.backend.dto.AuthResponseDto;
import site.sugarnest.backend.dto.request.IntrospectRequest;
import site.sugarnest.backend.dto.response.IntrospectResponse;
import site.sugarnest.backend.entities.AccountEntity;
import site.sugarnest.backend.exception.AppException;
import site.sugarnest.backend.exception.ErrorCode;
import site.sugarnest.backend.reponsitoties.IAccountRepository;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.StringJoiner;

@CommonsLog
@Service
public class AuthenticationService {

    @Autowired
    private IAccountRepository iAccountRepository;

    @Value("${SIGNER_KEY}")
    protected String SIGNER_KEY;

    public IntrospectResponse introspect(IntrospectRequest request) throws JOSEException, ParseException {
        var token = request.getToken();
        JWSVerifier jwsVerifier = new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT = SignedJWT.parse(token);

        Date expiryTime = signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified = signedJWT.verify(jwsVerifier);

        return IntrospectResponse.builder()
                .valid(verified && expiryTime.after(new Date()))
                .build();
    }

    public AuthResponseDto authenticate(AuthRequestDto authRequestDto) {
        var user = iAccountRepository.findByEmail(authRequestDto.getEmail())
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        boolean matchesPass = passwordEncoder.matches(authRequestDto.getPassword(), user.getPassword());

        if (!matchesPass) {
            throw new AppException(ErrorCode.PASSWORD_NOT_MATCHED);
        }

        var token = generateToken(user);

        return AuthResponseDto.builder()
                .token(token)
                .authenticated(true)
                .build();

    }

    private String generateToken(AccountEntity account) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(account.getEmail())
                .issuer("SugarNest.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.MINUTES).toEpochMilli()
                ))
                .claim("id", account.getId())
                .claim("scope", buildScope(account))
                .jwtID(passwordEncoder.encode(account.getEmail()))
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

    private String buildScope(AccountEntity account) {
    StringJoiner stringJoiner = new StringJoiner(" ");
    if (!CollectionUtils.isEmpty(account.getRoles())) {
        account.getRoles().forEach(role -> {
            stringJoiner.add("ROLE_" + role.getName());
            if (!CollectionUtils.isEmpty(role.getPermissions())) {
                role.getPermissions().forEach(permission -> stringJoiner.add(permission.getName()));
            }
        });
    }
    return stringJoiner.toString();
}

}