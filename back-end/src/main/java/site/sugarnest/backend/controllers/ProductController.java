package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.ProductDto;
import site.sugarnest.backend.service.product.IProductService;

import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
@AllArgsConstructor
public class ProductController {
    private IProductService iProductService;

    @PostMapping
    public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto) {
        ProductDto saveProduct = iProductService.createProduct(productDto);
        return new ResponseEntity<>(saveProduct, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable("id") Long id) {
        ProductDto productDto = iProductService.getProductById(id);
        return ResponseEntity.ok(productDto);
    }

    @GetMapping
    public ResponseEntity<?> getAllProduct(@PageableDefault(size = 12) Pageable pageable) {
        int page = pageable.getPageNumber() <= 0 ? 0 : pageable.getPageNumber() - 1;
        Pageable customPageable = PageRequest.of(page, pageable.getPageSize(), pageable.getSort());
        Page<ProductDto> listProductDto = iProductService.getAllProduct(customPageable);
        int totalPages = listProductDto.getTotalPages();
        return ResponseEntity.ok(Map.of("content", listProductDto.getContent(), "totalPages", totalPages));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable("id") Long id, @RequestBody ProductDto updateProduct) {
        ProductDto productDto = iProductService.updateProduct(id, updateProduct);
        return ResponseEntity.ok(productDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long id){
        iProductService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully!");
    }

}
