package site.sugarnest.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Embeddable
@Data
class AccountRoleIdEntity implements Serializable {

    @Column(name = "id_account")
    private Long idAccount;

    @Column(name = "id_role")
    private Long idRole;
}
