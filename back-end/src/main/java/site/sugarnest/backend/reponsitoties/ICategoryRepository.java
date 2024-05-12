package site.sugarnest.backend.reponsitoties;

import org.springframework.data.jpa.repository.JpaRepository;
import site.sugarnest.backend.entities.CategoryEntity;

public interface ICategoryRepository extends JpaRepository<CategoryEntity, Long>{
}
