import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from 'react-rating-stars-component';

const ProductRating = ({ productId, accountId }) => {
    const [rating, setRating] = useState(0);
    const [isRated, setIsRated] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);

    useEffect(() => {
        if (accountId && productId) {
            // Kiểm tra xem người dùng đã mua sản phẩm này hay chưa
            // axios.get(`http://localhost:8080/sugarnest/v0.1/purchases/check?accountId=${accountId}&productId=${productId}`)
            //     .then(response => {
            //         setIsPurchased(response.data.isPurchased);
            //     })
            //     .catch(error => {
            //         console.error('Error checking purchase status:', error);
            //     });

            // Lấy đánh giá hiện tại của người dùng (nếu có)
            axios.get(`http://localhost:8080/sugarnest/v0.1/ratings?accountId=${accountId}&productId=${productId}`)
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
                axios.put('http://localhost:8080/sugarnest/v0.1/ratings', ratingData)
                    .then(response => {
                        setRating(newRating);
                    })
                    .catch(error => {
                        console.error('Error updating rating:', error);
                    });
            } else {
                // Tạo mới đánh giá
                axios.post('http://localhost:8080/sugarnest/v0.1/ratings', ratingData)
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
