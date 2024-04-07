package site.haloshop.backend.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nameProduct")
    private String nameProduct;

    @Column(name = "description")
    private String description;

    @Column(name = "idView")
    private Integer idView;

    @Column(name = "idStar")
    private Integer idStar;

    @Column(name = "idComment")
    private Integer idComment;

    @Column(name = "idSupplier")
    private int idSupplier;

    @Column(name = "idProducer")
    private int idProducer;

    @Column(name = "idCategorie")
    private int idCategorie;

    @Column(name = "idSubCategorie")
    private Integer idSubCategorie;

    @Column(name = "isActive")
    private String isActive;

    @Column(name = "isDelete")
    private String isDelete;

    @Column(name = "status")
    private String status;
}

