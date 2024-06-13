package site.sugarnest.backend.dto.response;

import lombok.Data;
import site.sugarnest.backend.entities.OrderDetailEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class OrderResponse {
    private Integer id;

    private Date createAt;

    private Date deliveryAt;

    private String statusPay;

    private String sale;

    private Double free_ship;

    private Double totalPrice;

    private String status;

    private String address;

    private List<OrderDetailEntity> orderItems  = new ArrayList<>();

    private String note;

    private Date updateAt;
}
