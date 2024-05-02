package site.sugarnest.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "accounts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String accountName;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false, columnDefinition = "DATE")
    private LocalDate birthday;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(columnDefinition = "varchar(99) default 'false'")
    private String isDelete;

    @Column(columnDefinition = "varchar(99) default 'true'")
    private String isActive;

    @Column(columnDefinition = "datetime default current_timestamp")
    private LocalDateTime createAt;

    private String image;

    @Column(columnDefinition = "datetime default current_timestamp")
    private LocalDateTime updateAt;

    private Date deleteAt;

    private String typeName;

    private String idOther;

    private String currentPassword;

    @Column(columnDefinition = "int default '0'")
    private Integer number_login_fail;

    @OneToMany(mappedBy = "accountEntity")
    private Collection<AccountRoleEntity> accountRoleEntity;

    public void setCreateAt() {
        this.createAt = LocalDateTime.now();
    }

    public void setUpdateAt() {
        this.updateAt = LocalDateTime.now();
    }

    /**
     * Verified email
     */
    private boolean enabled;
}