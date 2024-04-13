package site.haloshop.backend.service.product;

import site.haloshop.backend.dto.product.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto createProduct(ProductDto productDto);

    ProductDto getProductById(Long productId);
    List<ProductDto> getAllProduct();

    ProductDto updateProduct(Long productId,ProductDto updateProduct);

    void deleteProduct(Long productId);
}
