package site.haloshop.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Embeddable
@Data
class AccountRoleId implements Serializable {
    @Column(name = "idAccount")
    private Long accountId;

    @Column(name = "idRole")
    private Long roleId;
}
