package site.sugarnest.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.response.ApiResponse;
import site.sugarnest.backend.dto.dto.SupplierDto;
import site.sugarnest.backend.service.product.SupplierService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/suppliers")
@AllArgsConstructor
public class SupplierController {

    SupplierService supplierService;

    @PostMapping("/create")
    public ApiResponse<SupplierDto> createSupplier(@RequestBody SupplierDto supplierDto) {
        if (supplierService.checkSupplierExistByName(supplierDto.getNameSupplier())) {
            return ApiResponse.<SupplierDto>builder()
                    .message("Supplier already exists!")
                    .result(null)
                    .build();
        }
        return ApiResponse.<SupplierDto>builder()
                .message("Supplier created!")
                .result(supplierService.createSupplier(supplierDto))
                .build();
    }

    @GetMapping("/all")
    public ApiResponse<List<SupplierDto>> getAllSuppliers() {
        return ApiResponse.<List<SupplierDto>>builder()
                .message("Success")
                .result(supplierService.getAllSuppliers())
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<SupplierDto> getSupplierById(@PathVariable("id") Long id) {
        return ApiResponse.<SupplierDto>builder()
                .message("Success")
                .result(supplierService.getSupplierById(id))
                .build();
    }

    @PutMapping("/update")
    public ApiResponse<SupplierDto> updateSupplier(@RequestBody SupplierDto supplierDto) {
        if (supplierService.checkSupplierExistByName(supplierDto.getNameSupplier())) {
            return ApiResponse.<SupplierDto>builder()
                    .message("Supplier already exists!")
                    .result(null)
                    .build();
        }
        return ApiResponse.<SupplierDto>builder()
                .message("Supplier updated!")
                .result(supplierService.updateSupplier(supplierDto))
                .build();
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse<String> deleteSupplier(@PathVariable("id") Long id) {
        supplierService.deleteSupplier(id);
        return ApiResponse.<String>builder()
                .message("Supplier deleted!")
                .result("Success")
                .build();
    }

}
