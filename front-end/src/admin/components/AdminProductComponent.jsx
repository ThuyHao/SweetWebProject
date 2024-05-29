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

const AdminProductComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/sugarnest/v0.1/products/admin')
      .then(response => {
        if (response.data.code === 0) {
          console.log(response.data.result);
          setData(response.data.result.map(item => ({
            key: item.id,
            productCode: item.id,
            productName: item.nameProduct,
            description: item.description,
            supplier: item.supplierEntity.nameSupplier,
            producer: item.producerEntity.nameProducer,
            category: item.categoryEntity.nameCategory,
            status: item.status,
            price: item.sizeColorProductsEntity[0]?.discountPrice || '',
            discount: item.sizeColorProductsEntity[0]?.discount || '',
            image: item.imageProductEntity[0]?.image || '',
          })));
        }
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const getAddProduct = () => {
    navigate('/admin/add-product');
  };
  const handleDetail = (key) => {
    navigate(`/admin/product-detail/${key}`);
  }
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
        Swal.fire('Đã xóa!', 'Tệp của bạn đã bị xóa.', 'success');
        setData(data.filter(item => item.key !== key));
      }
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'productCode',
      key: 'productCode',
      width: '5%',
      searchable: true,
      sortable: true,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'productName',
      key: 'productName',
      searchable: true,
      sortable: true,
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img className="img-card-person" src={text} alt="" />,
    },
    {
      title: 'Tình trạng',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <Badge status={text === 'Còn hàng' ? 'success' : 'error'} text={text} />
      ),
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <p>{text.toLocaleString('it-IT')}đ</p>
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discount',
      key: 'discount',
      render: (text) => <p>{text}%</p>
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      searchable: true,
      sortable: true,
    },
    {
      title: 'Chức năng',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="susscess"
            className='btn btn-primary btn-sm active'
            icon={<EyeOutlined />}
            onClick={() => handleDetail(record.key)}
          >
            Chi tiết
          </Button>
          <Button
            type="primary"
            className='btn btn-primary btn-sm edit'
            icon={<EditOutlined />}
            onClick={() => console.log('Edit', record.key)}
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
              <EmlementButtonComponent addButton={{ onClick: getAddProduct, title: 'Thêm', text: 'Thêm sản phẩm mới', visible: true }} />
              <Button
                type="primary"
                onClick={getAddProduct}
                icon={<PlusOutlined />}
                style={{ marginBottom: 16 }}
              >
                Thêm sản phẩm mới
              </Button>
              <ReusableTableComponent columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminProductComponent;
