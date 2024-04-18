package site.haloshop.backend.service.product;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import site.haloshop.backend.dto.product.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto createProduct(ProductDto productDto);

    ProductDto getProductById(Long productId);
    List<ProductDto> getAllProduct();

    ProductDto updateProduct(Long productId,ProductDto updateProduct);

    void deleteProduct(Long productId);

    Page<ProductDto> getAllProduct(Pageable pageable);
}
