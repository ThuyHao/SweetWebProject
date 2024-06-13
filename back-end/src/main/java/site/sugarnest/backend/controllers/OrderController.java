package site.sugarnest.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.request.OrderRequest;
import site.sugarnest.backend.dto.response.ApiResponse;
import site.sugarnest.backend.dto.response.OrderResponse;
import site.sugarnest.backend.service.order.IOrderService;
import java.util.List;
import java.util.ListIterator;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private IOrderService iorderService;

    @PostMapping
    public ApiResponse<OrderResponse> createOrder(@RequestBody OrderRequest orderRequest) {
        OrderResponse orderResponse = iorderService.saveOrder(orderRequest);
        return ApiResponse.<OrderResponse>builder()
                .code(200)
                .result(orderResponse)
                .build();
    }

    @GetMapping
    public ApiResponse<List<OrderResponse>> getAllOrders() {
        List<OrderResponse> orderResponseList = iorderService.getOrders();
        return ApiResponse.<List<OrderResponse>>builder()
                .code(200)
                .result(orderResponseList)
                .build();
    }
}
