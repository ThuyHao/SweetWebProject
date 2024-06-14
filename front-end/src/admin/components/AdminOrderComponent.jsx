import React, { useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import {EyeOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import axios from 'axios';
import ReusableTableComponent from './ReusableTableComponent';
import EmlementButtonComponent from './EmlementButtonComponent';
import AppTitleComponent from './AppTitleComponent';
import { REST_API_BASE_URL } from '../service/AdminService';

const AdminOrderComponent = () => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`${REST_API_BASE_URL}/orders/admin-orders`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.data.code === 200) {
                    if (response.data.code === 200 && response.data.result.length > 0) {
                        setData(response.data.result.map(item => ({
                            key: item.id.toString(),
                            id: item.id,
                            customerName: item.customerName,
                            orderItems: item.orderItems,
                            quantity: item.orderItems.reduce((sum, orderItem) => sum + orderItem.quantity, 0),
                            totalPrice: item.totalPrice,
                            status: item.status,
                        })));
                    }
                }
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, [token]);

    const columns = [
        {
            title: 'ID đơn hàng',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            searchable: true,
            sortable: true,
        },
        {
            title: 'Khách hàng',
            dataIndex: 'customerName',
            key: 'customerName',
            searchable: true,
            sortable: true,
        },
        {
            title: 'Đơn hàng',
            dataIndex: 'orderItems',
            key: 'orderItems',
            render: orderItems => orderItems.map(item => item.productEntity.nameProduct).join(", "),
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (text === "Hoàn thành" ? <span className="badge bg-success">Hoàn thành</span> : <span className="badge bg-warning">Chưa hoàn thành</span>),
        },
        {
            title: 'Tính năng',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        type="default"
                        className='btn btn-secondary btn-sm detail'
                        icon={<EyeOutlined />}
                        onClick={() => showDetailModal(record.key)}
                    >
                        Chi tiết
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <main className="app-content">
            <AppTitleComponent name={'Quản lý đơn hàng'} />
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <EmlementButtonComponent />
                            <ReusableTableComponent columns={columns} data={data} />
                            {/* <DetailModalOrder
                                order={selectedOrder}
                                visible={isDetailVisible}
                                onCancel={handleDetailCancel}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminOrderComponent;
