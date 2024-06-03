package site.sugarnest.backend.Utils;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import site.sugarnest.backend.dto.dto.ProductFilterDto;
import site.sugarnest.backend.entities.CategoryEntity;
import site.sugarnest.backend.entities.ProducerEntity;
import site.sugarnest.backend.entities.ProductEntity;
import site.sugarnest.backend.entities.SizeColorProductEntity;

import java.util.*;

public class ProductSpecification {

    public static Specification<ProductEntity> getSpecifications(ProductFilterDto filter) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Lọc theo loại sản phẩm
            if (filter.getType() != null) {
                Join<ProductEntity, CategoryEntity> categoryJoin = root.join("categoryEntity");
                predicates.add(cb.equal(categoryJoin.get("nameCategory"), filter.getType()));
            }

            // Lọc theo giá (giá tối thiểu và tối đa)
            if (filter.getMinPrice() != null && filter.getMaxPrice() != null) {
                Join<ProductEntity, SizeColorProductEntity> sizeColorJoin = root.join("sizeColorProductsEntity");
                predicates.add(cb.between(sizeColorJoin.get("listPrice"), filter.getMinPrice(), filter.getMaxPrice()));
            } else if (filter.getMinPrice() != null) {
                Join<ProductEntity, SizeColorProductEntity> sizeColorJoin = root.join("sizeColorProductsEntity");
                predicates.add(cb.greaterThanOrEqualTo(sizeColorJoin.get("listPrice"), filter.getMinPrice()));
            } else if (filter.getMaxPrice() != null) {
                Join<ProductEntity, SizeColorProductEntity> sizeColorJoin = root.join("sizeColorProductsEntity");
                predicates.add(cb.lessThanOrEqualTo(sizeColorJoin.get("listPrice"), filter.getMaxPrice()));
            }

            // Lọc theo kích thước sản phẩm
            if (filter.getSize() != null) {
                Join<ProductEntity, SizeColorProductEntity> sizeColorJoin = root.join("sizeColorProductsEntity");
                predicates.add(cb.equal(sizeColorJoin.get("size"), filter.getSize()));
            }

            // Lọc theo màu sắc sản phẩm
            if (filter.getColor() != null) {
                Join<ProductEntity, SizeColorProductEntity> sizeColorJoin = root.join("sizeColorProductsEntity");
                predicates.add(cb.equal(sizeColorJoin.get("color"), filter.getColor()));
            }

            // Lọc theo nhà sản xuất
            if (filter.getProducer() != null) {
                Join<ProductEntity, ProducerEntity> producerJoin = root.join("producerEntity");
                predicates.add(cb.equal(producerJoin.get("nameProducer"), filter.getProducer()));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
