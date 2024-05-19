package site.sugarnest.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import site.sugarnest.backend.dto.dto.ApiResponse;
import site.sugarnest.backend.dto.request.CartItemRequest;
import site.sugarnest.backend.dto.response.CartItemResponse;
import site.sugarnest.backend.entities.CartEntity;
import site.sugarnest.backend.entities.CartItemEntity;
import site.sugarnest.backend.service.cart.CartService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/carts")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/add-item")
    public ApiResponse<CartItemResponse> addItemToCart(@RequestBody CartItemRequest cartItemDto) {
        return ApiResponse.<CartItemResponse>builder()
                .code(200)
                .result(cartService.addItemToCart(cartItemDto))
                .build();
    }

    @DeleteMapping("/remove-item")
    public ApiResponse<Void> removeItemFromCart(@RequestParam Long accountId, @RequestParam Integer cartItemId) {
        cartService.removeItemFromCart(accountId, cartItemId);
        return ApiResponse.<Void>builder()
                .code(200)
                .message("Item removed from cart!")
                .build();
    }

    @PutMapping("/increase-quantity")
    public ApiResponse<Void> increaseQuantity(@RequestParam Long accountId, @RequestParam Integer cartItemId, @RequestParam int amount) {
        cartService.increaseQuantity(accountId, cartItemId, amount);
        return ApiResponse.<Void>builder()
                .code(200)
                .message("Quantity increased!")
                .build();
    }

    @PutMapping("/decrease-quantity")
    public ApiResponse<Void> decreaseQuantity(@RequestParam Long accountId, @RequestParam Integer cartItemId, @RequestParam int amount) {
        cartService.decreaseQuantity(accountId, cartItemId, amount);
        return ApiResponse.<Void>builder()
                .code(200)
                .message("Quantity decreased!")
                .build();
    }

    @GetMapping("/{accountId}")
    public ApiResponse<CartEntity> getCart(@PathVariable Long accountId) {
        return ApiResponse.<CartEntity>builder()
                .code(200)
                .result(cartService.getCartByAccountId(accountId))
                .build();
    }
    @GetMapping("/cart-items/{cartId}")
    public ApiResponse<List<CartItemEntity>> getCartItemsByCartId(@PathVariable Integer cartId) {
        return ApiResponse.<List<CartItemEntity>>builder()
                .code(200)
                .result(cartService.getCartItemsByCartId(cartId))
                .build();
    }
    @GetMapping("/total-items/{accountId}")
    public Double getTotalItemsInCart(@PathVariable Long accountId) {
        return ApiResponse.<Double>builder()
                .code(200)
                .result(Double.valueOf(cartService.getTotalItemsInCart(accountId)))
                .build().getResult();
    }
}
