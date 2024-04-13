package site.haloshop.backend.reponsitoties.product;

import org.springframework.data.jpa.repository.JpaRepository;
import site.haloshop.backend.entities.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
