package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.sugarnest.backend.service.product.ICategoryService;

@CrossOrigin("*")
@RestController
@RequestMapping("/categories")
@AllArgsConstructor
public class CategoryController {
    private ICategoryService iCategoryService;

    @GetMapping
    public ResponseEntity<?> getAllCategory() {
        return ResponseEntity.ok(iCategoryService.getAllCategory());
    }

}
