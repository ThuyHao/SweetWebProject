import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AppTitleComponent from './AppTitleComponent'
import Swal from 'sweetalert2';
import axios from 'axios';

const AdminAddProductComponent = () => {
    const navigate = useNavigate()
    function getProductManager() {
        navigate('/admin/product-manager')
    }

    const [categories, setCategories] = useState([]);
    const fetchCategories = () => {
        axios.get('http://localhost:8080/sugarnest/v0.1/categories/all')
            .then(response => {
                if (response.status === 200) {
                    setCategories(response.data.result);
                } else {
                    console.error('Lỗi khi lấy danh sách danh mục:', error);
                }
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách danh mục:', error);
            });
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const [producers, setProducers] = useState([]);
    const fetchProducers = () => {
        axios.get('http://localhost:8080/sugarnest/v0.1/producers/all')
            .then(response => {
                if (response.status === 200) {
                    setProducers(response.data.result);
                } else {
                    console.error('Lỗi khi lấy danh sách nhà sản xuất:', error);
                }
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách nhà sản xuất:', error);
            });
    };

    useEffect(() => {
        fetchProducers();
    }, []);

    const [suppliers, setSuppliers] = useState([]);

    const fetchSuppliers = () => {
        axios.get('http://localhost:8080/sugarnest/v0.1/suppliers/all')
            .then(response => {
                if (response.status === 200) {
                    setSuppliers(response.data.result);
                } else {
                    console.error('Lỗi khi lấy danh sách nhà cung cấp:', error);
                }
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách nhà cung cấp:', error);
            });
    };

    useEffect(() => {
        fetchSuppliers();
    }, []);


    const handleAddCategory = () => {
        Swal.fire({
            title: 'Nhập tên danh mục',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Lưu',
            showLoaderOnConfirm: true,
            preConfirm: (categoryName) => {
                if (!categoryName) {
                    Swal.showValidationMessage('Tên danh mục không được để trống');
                } else {
                    return axios.post('http://localhost:8080/sugarnest/v0.1/categories/create', {
                        nameCategory: categoryName,
                        isActive: "true"
                    })
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error(response.statusText);
                            }
                            return response.data;
                        })
                        .catch(error => {
                            Swal.showValidationMessage(`Yêu cầu thất bại: ${error}`);
                        });
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                fetchCategories();
                Swal.fire({
                    title: 'Thành công!',
                    text: 'Danh mục đã được thêm thành công',
                    icon: 'success'
                });
            }
        });
    };

    const handleAddProducer = () => {
        Swal.fire({
            title: 'Nhập tên nhà sản xuất',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Lưu',
            showLoaderOnConfirm: true,
            preConfirm: (producerName) => {
                if (!producerName) {
                    Swal.showValidationMessage('Tên nhà sản xuất không được để trống');
                } else {
                    return axios.post('http://localhost:8080/sugarnest/v0.1/producers/create', {
                        nameProducer: producerName,
                        isActive: "true"
                    })
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error(response.statusText);
                            }
                            return response.data;
                        })
                        .catch(error => {
                            Swal.showValidationMessage(`Yêu cầu thất bại: ${error}`);
                        });
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                fetchProducers();
                Swal.fire({
                    title: 'Thành công!',
                    text: 'Nhà sản xuất đã được thêm thành công',
                    icon: 'success'
                });
            }
        });
    };
    const handleAddSupplier = () => {
        Swal.fire({
            title: 'Nhập tên nhà cung cấp',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Lưu',
            showLoaderOnConfirm: true,
            preConfirm: (supplierName) => {
                if (!supplierName) {
                    Swal.showValidationMessage('Tên nhà cung cấp không được để trống');
                } else {
                    return axios.post('http://localhost:8080/sugarnest/v0.1/suppliers/create', {
                        nameSupplier: supplierName,
                        isActive: "true"
                    })
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error(response.statusText);
                            }
                            return response.data;
                        })
                        .catch(error => {
                            Swal.showValidationMessage(`Yêu cầu thất bại: ${error}`);
                        });
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                fetchSuppliers();
                Swal.fire({
                    title: 'Thành công!',
                    text: 'Nhà cung cấp đã được thêm thành công',
                    icon: 'success'
                });
            }
        });
    };
    return (
        <main className="app-content">
            <AppTitleComponent />
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <h3 className="tile-title">Tạo mới sản phẩm</h3>
                        <div className="tile-body">
                            <div className="row element-button">
                                <div className="col-sm-2">
                                    <a className="btn btn-add btn-sm" onClick={handleAddProducer} >
                                        <i className="fas fa-folder-plus" /> Thêm nhà sản xuất
                                    </a>
                                </div>
                                <div className="col-sm-2">
                                    <a className="btn btn-add btn-sm" onClick={handleAddSupplier}>
                                        <i className="fas fa-folder-plus" /> Thêm nhà cung cấp
                                    </a>
                                </div>
                                <div className="col-sm-2">
                                    <a className="btn btn-add btn-sm" onClick={handleAddCategory}  >
                                        <i className="fas fa-folder-plus" /> Thêm danh mục
                                    </a>
                                </div>
                            </div>
                            <form className="row">
                                <div className="form-group col-md-3">
                                    <label className="control-label">Tên sản phẩm</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleSelect2" className="control-label">
                                        Danh mục
                                    </label>
                                    <select className="form-control" id="exampleSelect2">
                                        <option>-- Chọn danh mục --</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.nameCategory}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleSelect1" className="control-label">
                                        Nhà sản xuất
                                    </label>
                                    <select className="form-control" id="exampleSelect1">
                                        <option>--  Nhà sản xuất --</option>
                                        {producers.map(producer => (
                                            <option key={producer.id} value={producer.id}>
                                                {producer.nameProducer}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleSelect3" className="control-label">
                                        Nhà cung cấp
                                    </label>
                                    <select className="form-control" id="exampleSelect3">
                                        <option>-- Chọn nhà cung cấp --</option>
                                        {suppliers.map(supplier => (
                                            <option key={supplier.id} value={supplier.id}>
                                                {supplier.nameSupplier}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <table style={{ margin: 10 }} id="product-table" className='responsive-table'>
                                    <tbody>
                                        <tr>
                                            <th>Kích thước</th>
                                            <th>Màu sắc</th>
                                            <th>Số lượng</th>
                                            <th>Giá tiền</th>
                                            <th>Giảm giá</th>
                                            <th>Xóa</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input style={{ width: '100%' }} required="" type="text" name="size-1" />
                                            </td>
                                            <td>
                                                <input style={{ width: '100%' }} required="" type="text" name="color-1" />
                                            </td>
                                            <td>
                                                <input style={{ width: '100%' }} required="" type="text" name="quantity-1" />
                                            </td>
                                            <td>
                                                <input style={{ width: '100%' }} required="" type="text" name="discount-1" />
                                            </td>
                                            <td>
                                                <input style={{ width: '100%' }} required="" type="text" name="price-1" />
                                            </td>
                                            
                                            <td>
                                                <button className="btn btn-delete">
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button style={{ margin: '0 0 30px 10px' }} className="btn btn-add" type="button" >Thêm hàng</button>

                                <div className="form-group col-md-12">
                                    <label className="control-label">Ảnh đại diện sản phẩm</label>
                                    <div id="myfileupload">
                                        <input
                                            type="file"
                                            id="uploadfile"
                                            name="ImageUpload"
                                        />
                                    </div>
                                    <div id="thumbbox">
                                        <img
                                            height={450}
                                            width={400}
                                            alt="Thumb image"
                                            id="thumbimage"
                                            style={{ display: "none" }}
                                        />
                                        <a className="removeimg" />
                                    </div>
                                    <div id="boxchoice">
                                        <a className="Choicefile" style={{ color: 'white' }}>
                                            <i className="fas fa-cloud-upload-alt" /> Chọn ảnh
                                        </a>
                                        <p style={{ clear: "both" }} />
                                    </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="control-label">Ảnh mô tả sản phẩm</label>
                                    <div id="myfileupload">
                                        <input
                                            type="file"
                                            id="uploadfile"
                                            name="ImageUpload"
                                            multiple
                                        />
                                    </div>
                                    <div id="thumbbox">
                                        <img
                                            height={450}
                                            width={400}
                                            alt="Thumb image"
                                            id="thumbimage"
                                            style={{ display: "none" }}
                                        />
                                        <a className="removeimg" />
                                    </div>
                                    <div id="boxchoice" style={{ color: 'white' }}>
                                        <a className="Choicefile">
                                            <i className="fas fa-cloud-upload-alt" /> Chọn ảnh
                                        </a>
                                        <p style={{ clear: "both" }} />
                                    </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="control-label">Mô tả sản phẩm</label>
                                    <textarea
                                        className="form-control"
                                        name="mota"
                                        id="mota"
                                        defaultValue={""}
                                    />
                                </div>
                            </form>
                        </div>
                        <button className="btn btn-save" type="button">
                            Lưu lại
                        </button>
                        <a style={{ marginLeft: 5 }} className="btn btn-cancel" onClick={getProductManager}>
                            Hủy bỏ
                        </a>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default AdminAddProductComponent