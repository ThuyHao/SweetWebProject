package site.haloshop.backend.service.product.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import site.haloshop.backend.dto.product.ProductDto;
import site.haloshop.backend.entities.ImageProduct;
import site.haloshop.backend.entities.Product;
import site.haloshop.backend.entities.ProductPrice;
import site.haloshop.backend.entities.SizeColorProduct;
import site.haloshop.backend.exception.ResourceNotFoundException;
import site.haloshop.backend.mapper.product.ProductMapper;
import site.haloshop.backend.reponsitoties.product.ProductRepository;
import site.haloshop.backend.service.product.ProductService;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;
    private ProductMapper productMapper;

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        // Ánh xạ ProductDto sang Product
        Product product = productMapper.mapToProduct(productDto);

        // Khởi tạo ProductPrice và gán Product
        ProductPrice productPrice = new ProductPrice();
        productPrice.setProduct(product);
        productPrice.setListPrice(product.getProductPrice().getListPrice());
        productPrice.setDiscount(product.getProductPrice().getDiscount());

        // Tạo danh sách ImageProduct từ ProductDto
        List<ImageProduct> imageProducts = productDto.getImageProducts().stream()
                .map(imageDto -> {
                    ImageProduct imageProduct = productMapper.mapToImageProduct(imageDto);
                    imageProduct.setProduct(product);
                    return imageProduct;
                }).collect(Collectors.toList());

        //Tạo danh sách SizeColorProduct từ ProductDto
        List<SizeColorProduct> sizeColorProducts = productDto.getSizeColorProducts().stream()
                .map(sizeColorProductDto -> {
                    SizeColorProduct sizeColorProduct = productMapper.mapToSizeColorProduct(sizeColorProductDto);
                    sizeColorProduct.setProduct(product);
                    return sizeColorProduct;
                }).collect(Collectors.toList());
        // Gán các giá trị
        product.setProductPrice(productPrice);
        product.setImageProducts(imageProducts);
        product.setSizeColorProducts(sizeColorProducts);

        // Lưu Product vào cơ sở dữ liệu
        Product productSave = productRepository.save(product);

        // Trả về ProductDto tương ứng với Product đã lưu
        return productMapper.mapToProductDto(productSave);
    }

    @Override
    public ProductDto getProductById(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("Product is not exist with given id: " + productId));
        return productMapper.mapToProductDto(product);
    }


    @Override
    public List<ProductDto> getAllProduct() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(product -> productMapper.mapToProductDto(product)).collect(Collectors.toList());
    }

    @Override
    public ProductDto updateProduct(Long productId, ProductDto updateProductDto) {
        // Kiểm tra xem sản phẩm có tồn tại trong cơ sở dữ liệu không
        Product existingProduct = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product is not exist with given id: " + productId));

        // Ánh xạ thông tin từ updateProductDto sang existingProduct
        existingProduct.setNameProduct(updateProductDto.getNameProduct());
        existingProduct.setDescription(updateProductDto.getDescription());
        existingProduct.setSupplier(updateProductDto.getSupplier());
        existingProduct.setProducer(updateProductDto.getProducer());
        existingProduct.setCategory(updateProductDto.getCategory());
        existingProduct.setSubCategory(updateProductDto.getSubCategory());
        existingProduct.setIsActive(updateProductDto.getIsActive());
        existingProduct.setIsDelete(updateProductDto.getIsDelete());
        existingProduct.setStatus(updateProductDto.getStatus());

        // Cập nhật ProductPrice
        ProductPrice productPrice = existingProduct.getProductPrice();
        productPrice.setListPrice(updateProductDto.getProductPrice().getListPrice());
        productPrice.setDiscount(updateProductDto.getProductPrice().getDiscount());

        // Cập nhật danh sách ImageProduct
        List<ImageProduct> imageProducts = updateProductDto.getImageProducts().stream()
                .map(imageDto -> {
                    ImageProduct imageProduct = productMapper.mapToImageProduct(imageDto);
                    imageProduct.setProduct(existingProduct);
                    return imageProduct;
                }).collect(Collectors.toList());
        existingProduct.setImageProducts(imageProducts);

        // Cập nhật danh sách SizeColorProduct
        List<SizeColorProduct> sizeColorProducts = updateProductDto.getSizeColorProducts().stream()
                .map(sizeColorProductDto -> {
                    SizeColorProduct sizeColorProduct = productMapper.mapToSizeColorProduct(sizeColorProductDto);
                    sizeColorProduct.setProduct(existingProduct);
                    return sizeColorProduct;
                }).collect(Collectors.toList());
        existingProduct.setSizeColorProducts(sizeColorProducts);

        // Lưu cập nhật vào cơ sở dữ liệu
        Product updatedProduct = productRepository.save(existingProduct);

        // Trả về ProductDto tương ứng với Product đã cập nhật
        return productMapper.mapToProductDto(updatedProduct);
    }

    @Override
    public void deleteProduct(Long productId) {
        // Kiểm tra xem sản phẩm có tồn tại trong cơ sở dữ liệu không
        Product existingProduct = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product is not exist with given id: " + productId));
        existingProduct.setIsDelete("true");
        productRepository.save(existingProduct);
    }


}
