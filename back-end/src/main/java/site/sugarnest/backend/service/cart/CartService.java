package site.sugarnest.backend.service.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.sugarnest.backend.dto.request.CartItemRequest;
import site.sugarnest.backend.dto.response.CartItemResponse;
import site.sugarnest.backend.entities.CartEntity;
import site.sugarnest.backend.entities.CartItemEntity;
import site.sugarnest.backend.entities.ProductEntity;
import site.sugarnest.backend.entities.AccountEntity;
import site.sugarnest.backend.mapper.ICartMapper;
import site.sugarnest.backend.reponsitoties.IAccountRepository;
import site.sugarnest.backend.reponsitoties.ICartItemRepository;
import site.sugarnest.backend.reponsitoties.ICartRepository;
import site.sugarnest.backend.reponsitoties.IProductRepository;

import java.util.Date;
import java.util.List;

@Service
public class CartService {
    @Autowired
    private ICartRepository cartRepository;

    @Autowired
    private IProductRepository productRepository;

    @Autowired
    private ICartItemRepository cartItemRepository;

    @Autowired
    private IAccountRepository accountRepository;

    @Autowired
    private ICartMapper cartMapper;

    @Transactional
    public CartItemResponse addItemToCart(CartItemRequest cartItemRequest) {
        AccountEntity account = accountRepository.findById(cartItemRequest.getAccountId()).orElseThrow(() -> new RuntimeException("Account not found"));
        CartEntity cart = cartRepository.findByAccountEntity(account).orElse(null);
        if (cart == null) {
            cart = new CartEntity();
            cart.setAccountEntity(account);
            cart.setCreatedAt(new Date());
            cart.setUpdatedAt(new Date());
            cart.setStatus("active");
            cartRepository.save(cart);
        }

        ProductEntity product = productRepository.findById(cartItemRequest.getProductId()).orElseThrow(() -> new RuntimeException("Product not found"));
        CartItemEntity cartItem = new CartItemEntity();
        cartItem.setCartEntity(cart);
        cartItem.setProductEntity(product);
        cartItem.setQuantity(cartItemRequest.getQuantity());
        cartItem.setProductSize(cartItemRequest.getProductSize());
        cartItem.setProductColor(cartItemRequest.getProductColor());
        cartItem.setPrice(product.getProductPriceEntity().getDiscountPrice() * cartItemRequest.getQuantity());
        cart.getCartItems().add(cartItem);
        cart.setUpdatedAt(new Date());
        if (cart.getTotalPrice() == null) {
            cart.setTotalPrice(0.0);
        }
        cart.setTotalPrice(cart.getTotalPrice() + cartItem.getPrice());
        cartRepository.save(cart);
        CartItemResponse cartItemResponse = cartMapper.mapToCartItemDto(cartItem);
        cartItemResponse.setAccountId(cartItemRequest.getAccountId());
        cartItemResponse.setProductId(cartItemRequest.getProductId());
        cartItemResponse.setCartId(cart.getId()); // Thêm dòng này để đặt giá trị cartId vào cartItemResponse
        return cartItemResponse;
    }

    @Transactional
    public void removeItemFromCart(Long accountId, Integer cartItemId) {
        AccountEntity account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        CartEntity cart = cartRepository.findByAccountEntity(account).orElseThrow(() -> new RuntimeException("Cart not found"));
        CartItemEntity cartItem = cartItemRepository.findById(cartItemId).orElseThrow(() -> new RuntimeException("CartItem not found"));

        cart.getCartItems().remove(cartItem);
        cartItemRepository.delete(cartItem);
        cart.setUpdatedAt(new Date());
        cartRepository.save(cart);
    }

    @Transactional
    public void increaseQuantity(Long accountId, Integer cartItemId, int amount) {
        AccountEntity account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        CartEntity cart = cartRepository.findByAccountEntity(account).orElseThrow(() -> new RuntimeException("Cart not found"));
        CartItemEntity cartItem = cartItemRepository.findById(cartItemId).orElseThrow(() -> new RuntimeException("CartItem not found"));

        cartItem.setQuantity(cartItem.getQuantity() + amount);
        cartItem.setPrice(cartItem.getProductEntity().getProductPriceEntity().getDiscountPrice() * cartItem.getQuantity());

        cartItemRepository.save(cartItem);
        cart.setUpdatedAt(new Date());
        cartRepository.save(cart);
    }

    @Transactional
    public void decreaseQuantity(Long accountId, Integer cartItemId, int amount) {
        AccountEntity account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        CartEntity cart = cartRepository.findByAccountEntity(account).orElseThrow(() -> new RuntimeException("Cart not found"));
        CartItemEntity cartItem = cartItemRepository.findById(cartItemId).orElseThrow(() -> new RuntimeException("CartItem not found"));

        int newQuantity = cartItem.getQuantity() - amount;
        if (newQuantity <= 0) {
            cart.getCartItems().remove(cartItem);
            cartItemRepository.delete(cartItem);
        } else {
            cartItem.setQuantity(newQuantity);
            cartItem.setPrice(cartItem.getProductEntity().getProductPriceEntity().getDiscountPrice() * cartItem.getQuantity());
            cartItemRepository.save(cartItem);
        }

        cart.setUpdatedAt(new Date());
        cartRepository.save(cart);
    }

    public CartEntity getCartByAccountId(Long accountId) {
        AccountEntity account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        return cartRepository.findByAccountEntity(account).orElseThrow(() -> new RuntimeException("Cart not found"));
    }

    public List<CartItemEntity> getCartItemsByCartId(Integer cartId) {
        return cartItemRepository.findByCartEntityId(cartId);
    }

    public Integer getTotalItemsInCart(Long accountId) {
        AccountEntity account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        CartEntity cart = cartRepository.findByAccountEntity(account).orElseThrow(() -> new RuntimeException("Cart not found"));
        List<CartItemEntity> cartItems = getCartItemsByCartId(cart.getId());
        return cartItems.stream().mapToInt(CartItemEntity::getQuantity).sum();
    }
}
