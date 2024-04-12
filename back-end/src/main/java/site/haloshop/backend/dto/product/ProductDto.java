package site.haloshop.backend.dto.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import site.haloshop.backend.entities.*;

import java.util.List;
@Data
public class ProductDto {
    private Long id;
    private String nameProduct;
    private String description;
    private Supplier supplier;
    private Producer producer;
    private Category category;
    private SubCategory subCategory;
    private String isActive;
    private String isDelete;
    private String status;
    private ProductPrice productPrice;
    private List<ImageProduct> imageProducts;
    private List<SizeColorProduct> sizeColorProducts;
    private List<Rate> rates;
    private List<ImportCouponDetail> importCouponDetails;
    private List<OrderDetail> orderDetails;
}
