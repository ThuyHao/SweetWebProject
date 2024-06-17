package site.sugarnest.backend.service.order;

import site.sugarnest.backend.dto.request.OrderRequest;
import site.sugarnest.backend.dto.response.OrderResponse;

import java.util.List;

public interface IOrderService {
    OrderResponse saveOrder(OrderRequest orderRequest);
    List<OrderResponse> getOrders();
    List<OrderResponse> getOrdersByAdmin();
    OrderResponse getOrderById(Integer orderId);
    void updateOrderStatus(Integer orderId, String status);
    void cancelOrder(Integer orderId);
}
