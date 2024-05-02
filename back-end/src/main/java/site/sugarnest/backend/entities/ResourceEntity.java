package site.sugarnest.backend.entities;
import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "resources")
@Data
public class ResourceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String url;

    private String description;
}