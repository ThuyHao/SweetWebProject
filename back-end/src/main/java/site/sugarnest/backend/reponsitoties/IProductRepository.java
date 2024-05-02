package site.sugarnest.backend.reponsitoties;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import site.sugarnest.backend.entities.ProductEntity;


@Repository
public interface IProductRepository extends JpaRepository<ProductEntity, Long> {
    Page<ProductEntity> findAll(Pageable pageable);
}