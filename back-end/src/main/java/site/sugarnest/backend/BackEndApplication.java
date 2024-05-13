package site.sugarnest.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import site.sugarnest.backend.service.account.EmailService;

@SpringBootApplication
public class BackEndApplication {

//	@Autowired
//	private EmailService emailService;

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}

//	@EventListener(ApplicationReadyEvent.class)
//	public void sendMail(){
//		emailService.sendMail("thuyhao.it.2002@gmail.com",
//				"Hello mấy con gà",
//				"Bị đặt xem thường người khác nha mấy con gà");
//	}
}
