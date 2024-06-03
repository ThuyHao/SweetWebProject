package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.dto.ProductFilterDto;
import site.sugarnest.backend.dto.response.ApiResponse;
import site.sugarnest.backend.dto.dto.ProductDto;
import site.sugarnest.backend.service.product.IProductService;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
@AllArgsConstructor
public class ProductController {
    private IProductService iProductService;

    @PostMapping
    public ApiResponse<ProductDto> createProduct(@RequestBody ProductDto productDto) {
        ProductDto saveProduct = iProductService.createProduct(productDto);
        return ApiResponse.<ProductDto>builder()
                .message("Product created!")
                .result(saveProduct)
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<ProductDto> getProductById(@PathVariable("id") Long id) {
        ProductDto productDto = iProductService.getProductById(id);
        return ApiResponse.<ProductDto>builder()
                .message("Success")
                .result(productDto)
                .build();
    }

    @GetMapping
    public Page<ProductDto> getAllProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String productSize,
            @RequestParam(required = false) String producer,
            @RequestParam(required = false) String color,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "ASC") String sortDirection) {

        ProductFilterDto filter = new ProductFilterDto();
        filter.setType(type);
        filter.setMinPrice(minPrice);
        filter.setMaxPrice(maxPrice);
        filter.setSize(productSize);
        filter.setProducer(producer);
        filter.setColor(color);
        filter.setSortBy(sortBy);
        filter.setSortDirection(sortDirection);

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(sortDirection), sortBy));
        return iProductService.getAllProduct(pageable, filter);
    }

    @GetMapping("/admin")
    public ApiResponse<List<ProductDto>> getProductByAdmin() {
        List<ProductDto> productDtos = iProductService.getProductByAdmin();
        return ApiResponse.<List<ProductDto>>builder()
                .message("Success")
                .result(productDtos)
                .build();
    }
    @GetMapping("/category/{id}/limit/{limit}")
    public ApiResponse<List<ProductDto>> findProductByCategoryId(@PathVariable("id") Long categoryId, @PathVariable("limit") int limit) {
        List<ProductDto> productDtos = iProductService.findProductByCategoryId(categoryId, limit);
        return ApiResponse.<List<ProductDto>>builder()
                .message("Success")
                .result(productDtos)
                .build();
    }
    @PutMapping("/{id}")
    public ApiResponse<ProductDto> updateProduct(@PathVariable("id") Long id, @RequestBody ProductDto updateProduct) {
        ProductDto productDto = iProductService.updateProduct(id, updateProduct);
        return ApiResponse.<ProductDto>builder()
                .message("Product updated!")
                .result(productDto)
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteProduct(@PathVariable("id") Long id) {
        iProductService.deleteProduct(id);
        return ApiResponse.<String>builder()
                .message("Product deleted!")
                .build();
    }

}
