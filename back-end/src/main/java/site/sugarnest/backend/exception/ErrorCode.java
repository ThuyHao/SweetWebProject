package site.sugarnest.backend.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public enum ErrorCode {

    ACCOUNT_EXITED(1001, "User Exited"),
    ACCOUNT_NOT_EXITED(1002, "User Not Exited"),
    PHONE_EXISTED(1003, "Phone Existed"),
    PASSWORD_NOT_MATCHED(1004, "Password Not Matched"),
    SIGNER_NOT_MATCHED(1005, "Signer Not Matched"),
    SEND_MAIL_FAILED(1006, "Send Mail Failed"),
    ;

    private int code;
    private String message;

}
