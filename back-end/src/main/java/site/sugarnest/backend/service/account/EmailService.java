package site.sugarnest.backend.service.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMail(String accountEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(accountEmail);
        message.setSubject(subject);
        message.setText(body);
        javaMailSender.send(message);
    }
}









