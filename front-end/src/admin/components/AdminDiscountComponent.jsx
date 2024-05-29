import React from 'react'
import AppTitleComponent from './AppTitleComponent'
import EmlementButtonComponent from './EmlementButtonComponent'


const AdminDiscountComponent = () => {
    function getAddDiscount() {
        console.log('add discount')
    }
    return (
        <main className="app-content">
            <AppTitleComponent />
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                        <EmlementButtonComponent/>
                            <table className="table table-hover table-bordered responsive-table" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>ID mã giảm giá</th>
                                        <th>Tên</th>
                                        <th>Mô tả</th>
                                        <th>Mã</th>
                                        <th>Phần trăm giảm</th>
                                        <th>Số lượng</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc</th>
                                        <th>Trạng thái</th>
                                        <th>Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#1</td>
                                        <td>Black Friday</td>
                                        <td>Black Friday giảm sặp sàn</td>
                                        <td>BF2024</td>
                                        <td>20%</td>
                                        <td>100</td>
                                        <td>10-1-2024</td>
                                        <td>10-2-2024</td>
                                        <td style={{ color: "green" }}>Có thể sử dụng</td>
                                        <td>
                                            <div className="button-container">
                                                <button className="btn btn-primary btn-sm trash" type="button" title="Xóa" >
                                                    <i className="fas fa-trash-alt" />
                                                </button>
                                                <button className="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp-discount-${o.id}" >
                                                    <i className="fas fa-edit" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminDiscountComponent