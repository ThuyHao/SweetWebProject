package site.sugarnest.backend.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
public enum ErrorCode {

    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized Error", HttpStatus.INTERNAL_SERVER_ERROR),
    ACCOUNT_EXITED(1001, "User Exited", HttpStatus.BAD_REQUEST),
    ACCOUNT_NOT_EXITED(1002, "User Not Found", HttpStatus.NOT_FOUND),
    PHONE_EXISTED(1003, "Phone Already Exists", HttpStatus.BAD_REQUEST),
    PASSWORD_NOT_MATCHED(1004, "Incorrect Password", HttpStatus.BAD_REQUEST),
    SIGNER_NOT_MATCHED(1005, "Signer Not Found", HttpStatus.NOT_FOUND),
    SEND_MAIL_FAILED(1006, "Failed to Send Email", HttpStatus.INTERNAL_SERVER_ERROR),
    EMAIL_NOT_EXITED(1007, "Email Not Found", HttpStatus.NOT_FOUND),
    ROLE_NOT_EXITED(1008, "Role Not Found", HttpStatus.NOT_FOUND),
    INVALID_KEY(1009, "Invalid Key", HttpStatus.BAD_REQUEST),
    VERIFICATION_ACCOUNT_INCORRECT_CODE(1010, "Incorrect Verification Code", HttpStatus.BAD_REQUEST),
    ;

    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }

    private int code;
    private String message;
    private final HttpStatusCode statusCode;

}
