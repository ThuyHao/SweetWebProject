import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from 'react-rating-stars-component';
import { REST_API_BASE_URL } from '../services/ProductService';

const ProductRating = ({ productId, accountId }) => {
    const [rating, setRating] = useState(0);
    const [isRated, setIsRated] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);

    useEffect(() => {
        if (accountId && productId) {
            // Kiểm tra xem người dùng đã mua sản phẩm này hay chưa
            // axios.get(`${REST_API_BASE_URL}/purchases/check?accountId=${accountId}&productId=${productId}`)
            //     .then(response => {
            //         setIsPurchased(response.data.isPurchased);
            //     })
            //     .catch(error => {
            //         console.error('Error checking purchase status:', error);
            //     });

            // Lấy đánh giá hiện tại của người dùng (nếu có)
            axios.get(`${REST_API_BASE_URL}/ratings?accountId=${accountId}&productId=${productId}`)
                .then(response => {
                    if (response.data) {
                        setRating(response.data.numberStar);
                        setIsRated(true);
                    }
                })
                .catch(error => {
                    console.error('Error fetching rating:', error);
                });
        }
    }, [productId, accountId]);

    const handleRatingChange = (newRating) => {
        if (accountId && productId) {
            if (!isPurchased) {
                alert('Bạn phải mua sản phẩm này trước khi đánh giá.');
                return;
            }

            const ratingData = {
                accountId,
                productId,
                numberStar: newRating
            };

            if (isRated) {
                // Sửa đánh giá
                axios.put(`${REST_API_BASE_URL}/ratings`, ratingData)
                    .then(response => {
                        setRating(newRating);
                    })
                    .catch(error => {
                        console.error('Error updating rating:', error);
                    });
            } else {
                // Tạo mới đánh giá
                axios.post(`${REST_API_BASE_URL}/ratings`, ratingData)
                    .then(response => {
                        setRating(newRating);
                        setIsRated(true);
                    })
                    .catch(error => {
                        console.error('Error creating rating:', error);
                    });
            }
        }
    };

    return (
        <div>
            <Rating
                count={5}
                value={rating}
                onChange={handleRatingChange}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    );
};

export default ProductRating;
