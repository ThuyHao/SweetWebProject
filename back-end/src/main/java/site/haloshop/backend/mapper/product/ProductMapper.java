package site.haloshop.backend.mapper.product;

import org.mapstruct.Mapper;
import site.haloshop.backend.dto.product.ImageProductDto;
import site.haloshop.backend.dto.product.ProductDto;
import site.haloshop.backend.dto.product.SizeColorProductDto;
import site.haloshop.backend.entities.ImageProduct;
import site.haloshop.backend.entities.Product;
import site.haloshop.backend.entities.SizeColorProduct;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductDto mapToProductDto(Product product);
    Product mapToProduct(ProductDto product);
    ImageProduct mapToImageProduct(ImageProduct imageProductDto);
    ImageProductDto maptoImageProductDto(ImageProduct imageProduct);
    SizeColorProduct mapToSizeColorProduct(SizeColorProduct SizeColorProductDto);
    SizeColorProductDto maptoSizeColorProductDto(SizeColorProduct sizeColorProduct);
}
