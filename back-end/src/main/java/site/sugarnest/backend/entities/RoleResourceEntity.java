package site.sugarnest.backend.entities;
import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "role_resource")
@Data
public class RoleResourceEntity {
    @EmbeddedId
    private RoleResourceIdEntity id;

    @ManyToOne
    @JoinColumn(name = "id_role", insertable = false, updatable = false)
    private RoleEntity roleEntity;

    @ManyToOne
    @JoinColumn(name = "id_resource", insertable = false, updatable = false)
    private ResourceEntity resourceEntity;
}