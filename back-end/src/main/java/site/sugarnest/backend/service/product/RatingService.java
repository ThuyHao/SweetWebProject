package site.sugarnest.backend.service.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import site.sugarnest.backend.dto.dto.RateDto;
import site.sugarnest.backend.entities.PromotionEntity;
import site.sugarnest.backend.entities.RateEntity;
import site.sugarnest.backend.exception.AppException;
import site.sugarnest.backend.exception.ErrorCode;
import site.sugarnest.backend.reponsitoties.*;

@Service
public class RatingService {
    @Autowired
    private IRateRepository rateRepository;

    @Autowired
    private IAccountRepository iAccountRepository;

    @Autowired
    private IProductRepository iProductRepository;

    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    public boolean checkPurchase(Long accountId, Long productId) {
        return orderDetailRepository.existsByOrderEntity_AccountEntity_IdAndProductEntity_Id(accountId, productId);
    }

    public RateDto getRating(Long accountId, Long productId) {
        return rateRepository.findByAccountEntity_IdAndProductEntity_Id(accountId, productId).map(rate -> new RateDto(rate.getId(), rate.getAccountEntity().getId(), rate.getProductEntity().getId(), rate.getNumberStar())).orElse(null);
    }

    public RateDto createRating(RateDto rate) {
        var account = iAccountRepository.findById(rate.getAccountId())
                .orElseThrow(() -> new AppException(ErrorCode.ACCOUNT_NOT_EXITED));
        var product = iProductRepository.findById(rate.getProductId()).orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_EXITED));
        if (orderDetailRepository.existsByOrderEntity_AccountEntity_IdAndProductEntity_Id(rate.getAccountId(), rate.getProductId())) {
            RateEntity rateEntity = new RateEntity();
            rateEntity.setProductEntity(product);
            rateEntity.setAccountEntity(account);
            rateEntity.setNumberStar(rate.getRating());
            return new RateDto(rateRepository.save(rateEntity).getId(), rateEntity.getAccountEntity().getId(), rateEntity.getProductEntity().getId(), rateEntity.getNumberStar());
        } else {
            return null;
        }
    }
    public RateDto updateRating(RateDto rate) {
        return rateRepository.findByAccountEntity_IdAndProductEntity_Id(rate.getAccountId(), rate.getProductId())
                .map(existingRate -> {
                    existingRate.setNumberStar(rate.getRating());
                    return new RateDto(rateRepository.save(existingRate).getId(), existingRate.getAccountEntity().getId(), existingRate.getProductEntity().getId(), existingRate.getNumberStar());
                })
                .orElse(null);
    }
}
