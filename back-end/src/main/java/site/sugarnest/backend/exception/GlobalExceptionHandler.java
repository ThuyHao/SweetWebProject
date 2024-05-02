package site.sugarnest.backend.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import site.sugarnest.backend.dto.ApiDto;

import java.util.Objects;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = RuntimeException.class)
     ResponseEntity<ApiDto> handleRuntimeException(final RuntimeException e) {
        ApiDto apiDto = new ApiDto();

        apiDto.setCode(1001);
        apiDto.setMessage(e.getMessage());

        return ResponseEntity.badRequest().body(apiDto);
    }

    @ExceptionHandler(value = AppException.class)
    ResponseEntity<ApiDto> handleRuntimeException(AppException appException) {
        ErrorCode errorCode = appException.getErrorCode();
        ApiDto apiDto = new ApiDto();

        apiDto.setCode(errorCode.getCode());
        apiDto.setMessage(errorCode.getMessage());

        return ResponseEntity.badRequest().body(apiDto);
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<String> handleMethodArgumentNotValidException(final MethodArgumentNotValidException e) {
        return ResponseEntity.badRequest().body(Objects.requireNonNull(e.getFieldError()).getDefaultMessage());
    }
}
