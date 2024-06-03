package site.sugarnest.backend.dto.dto;

import lombok.Data;

@Data
public class ProductFilterDto {
    private String type;        // Loại bánh
    private Double minPrice;    // Giá tối thiểu
    private Double maxPrice;    // Giá tối đa
    private String size;        // Size
    private String producer; // Nhà sản xuất
    private String color;       // Màu
    private String sortBy;      // Thuộc tính sắp xếp
    private String sortDirection; // Hướng sắp xếp (ASC/DESC)
}
