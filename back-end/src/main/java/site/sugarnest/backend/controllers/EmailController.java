package site.sugarnest.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import site.sugarnest.backend.dto.EmailRequestDto;
import site.sugarnest.backend.service.account.EmailService;

@Controller
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequestDto emailRequest) {
        emailService.sendMail(emailRequest.getAccountEmail(), emailRequest.getSubject(), emailRequest.getBody());
        return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
    }
}
