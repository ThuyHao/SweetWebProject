package site.sugarnest.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.dto.RateDto;
import site.sugarnest.backend.dto.response.ApiResponse;
import site.sugarnest.backend.entities.RateEntity;
import site.sugarnest.backend.reponsitoties.IOrderDetailRepository;
import site.sugarnest.backend.reponsitoties.IRateRepository;
import site.sugarnest.backend.service.product.RatingService;

import java.util.Collections;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/ratings")
public class RatingController {

    @Autowired
    private IRateRepository rateRepository;

    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Autowired
    private RatingService ratingService;

    //    @GetMapping("/purchases/check")
    //    public ApiResponse<?> checkPurchase(@RequestParam Long accountId, @RequestParam Long productId) {
    //        return new ApiResponse<>(HttpStatus.OK.value(), "Check purchase successfully.", Collections.singletonMap("isPurchased", ratingService.checkPurchase(accountId, productId)));
    //    }

    @GetMapping
    public ApiResponse<RateDto> getRating(@RequestParam Long accountId, @RequestParam Long productId) {
        return ApiResponse.<RateDto>builder()
                .code(200)
                .message("Success")
                .result(ratingService.getRating(accountId, productId))
                .build();
    }

    @PostMapping
    public ApiResponse<RateDto> createRating(@RequestBody RateDto rate) {
        return ApiResponse.<RateDto>builder()
                .code(200)
                .message("Success")
                .result(ratingService.createRating(rate))
                .build();
    }

    @PutMapping
    public ApiResponse<RateDto> updateRating(@RequestBody RateDto rate) {
        return ApiResponse.<RateDto>builder()
                .code(200)
                .message("Success")
                .result(ratingService.updateRating(rate))
                .build();
    }
}

