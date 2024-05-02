package site.sugarnest.backend.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "account_roles")
@Data
public class AccountRoleEntity {
    @EmbeddedId
    private AccountRoleIdEntity id;

    @ManyToOne
    @JoinColumn(name = "id_account", insertable = false, updatable = false)
    private AccountEntity accountEntity;

    @ManyToOne
    @JoinColumn(name = "id_role", insertable = false, updatable = false)
    private RoleEntity roleEntity;

    private String name;
}
