package site.sugarnest.backend.entities;
import lombok.Data;

import jakarta.persistence.*;

import java.io.Serializable;

@Embeddable
@Data
class RoleResourceIdEntity implements Serializable {
    @Column(name = "id_role")
    private Long idRole;

    @Column(name = "id_resource")
    private Long idResource;
}