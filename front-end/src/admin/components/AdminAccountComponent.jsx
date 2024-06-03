import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Badge } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import axios from 'axios';
import ReusableTableComponent from './ReusableTableComponent';
import EmlementButtonComponent from './EmlementButtonComponent';
import AppTitleComponent from './AppTitleComponent';
import { render } from 'react-dom';
import { urlImage } from '../../client/services/ProductService';
import EditModal from '../util/EditModal';


const AdminAccountComponent = () => {
    const navigate = useNavigate()
    function getRoleManagement() {
        navigate('/admin/account-role-manager')
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/sugarnest/v0.1/account/all')
            .then(response => {
                if (response.data.code === 200 && response.data.result.length > 0) {
                    setData(response.data.result.map(item => ({
                        key: item.id,
                        id: item.id,
                        fullName: item.fullName,
                        accountName: item.accountName,
                        birthday: item.birthday,
                        address: item.address,
                        email: item.email,
                        phone: item.phone,
                        isActive: item.isActive,
                        createAt: item.createAt,
                        updateAt: item.updateAt,
                        roles: item.roles.map(role => ({
                            name: role.name,
                            description: role.description,
                            permissions: role.permissions.map(permission => ({
                                name: permission.name,
                                description: permission.description
                            }))
                        }))
                    })));
                }
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const handleDelete = (key) => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn sẽ không thể khôi phục điều này!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vâng, xóa nó đi!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Đã xóa!', 'Tài khoản đã bị xóa.', 'success');
                setData(data.filter(item => item.key !== key));
            }
        });
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [account, setAccount] = useState(null);

    const showModal = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/sugarnest/v0.1/account/${id}`);
            if (response.data.code === 200) {
                setAccount(response.data.result);
                setIsModalVisible(true);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setAccount(null);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
            searchable: true,
            sortable: true,
        },
        {
            title: 'Tên đăng nhập',
            dataIndex: 'accountName',
            key: 'accountName',
            searchable: true,
            sortable: true,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullName',
            key: 'fullName',
            searchable: true,
            sortable: true,
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'birthday',
            key: 'birthday',
            render: (text) => new Date(text).toLocaleDateString(),
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Trạng thái hoạt động',
            dataIndex: 'isActive',
            key: 'isActive',
            render: (text) => (text === 'true' ? 'Hoạt động' : 'Không hoạt động'),
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createAt',
            key: 'createAt',
            render: (text) => new Date(text).toLocaleString(),
        },
        {
            title: 'Ngày cập nhật',
            dataIndex: 'updateAt',
            key: 'updateAt',
            render: (text) => new Date(text).toLocaleString(),
        },
        {
            title: 'Quyền',
            dataIndex: 'roles',
            key: 'roles',
            render: (roles) => roles.map(role => role.name).join(', '),
        },
        {
            title: 'Chức năng',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        className='btn btn-primary btn-sm edit'
                        icon={<EditOutlined />}
                        onClick={() => showModal(record.key)}
                    >
                        Sửa
                    </Button>
                    <Button
                        type="danger"
                        className='btn btn-primary btn-sm trash'
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.key)}
                    >
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <main className="app-content">
            <AppTitleComponent />
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <EmlementButtonComponent />
                            <Button
                                type="primary"
                                onClick={getRoleManagement}
                                style={{ marginBottom: 16 }}
                            >
                                Quản lý quyền tài khoản
                            </Button>
                            <ReusableTableComponent columns={columns} data={data} />
                        </div>
                    </div>
                </div>
                {isModalVisible && account && (<EditModal account={account} onCancel={handleCancel} />)}
            </div>
        </main>
    )
}

export default AdminAccountComponent