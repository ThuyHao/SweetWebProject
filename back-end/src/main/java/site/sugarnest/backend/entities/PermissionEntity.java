package site.sugarnest.backend.entities;
import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "permissions")
@Data
public class PermissionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_resource", nullable = false)
    private ResourceEntity resourceEntity;

    @ManyToOne
    @JoinColumn(name = "id_role")
    private RoleEntity roleEntity;

    private String action;
}