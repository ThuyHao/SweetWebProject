package site.sugarnest.backend.service.product;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import site.sugarnest.backend.dto.ProductDto;

import java.util.List;

public interface IProductService {
    ProductDto createProduct(ProductDto productDto);

    ProductDto getProductById(Long productId);
    List<ProductDto> getAllProduct();

    ProductDto updateProduct(Long productId,ProductDto updateProduct);

    void deleteProduct(Long productId);

    Page<ProductDto> getAllProduct(Pageable pageable);
}

