package site.sugarnest.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
