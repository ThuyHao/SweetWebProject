import React from 'react'
import EmlementButtonComponent from './EmlementButtonComponent'
import AppTitleComponent from './AppTitleComponent'

const AdminOrderComponent = () => {

    return (
        <main className="app-content">
            <AppTitleComponent name={'Quản lý sản phẩm'}/>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <EmlementButtonComponent />
                            <table className="table table-hover table-bordered responsive-table" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>ID đơn hàng</th>
                                        <th>Khách hàng</th>
                                        <th>Đơn hàng</th>
                                        <th>Số lượng</th>
                                        <th>Tổng tiền</th>
                                        <th>Tình trạng</th>
                                        <th>Tính năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>MD0837</td>
                                        <td>Triệu Thanh Phú</td>
                                        <td>Ghế làm việc Zuno, Bàn ăn gỗ Theresa</td>
                                        <td>2</td>
                                        <td>9.400.000 đ</td>
                                        <td><span className="badge bg-success">Hoàn thành</span></td>
                                        <td><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt"></i> </button>
                                            <button className="btn btn-primary btn-sm edit" type="button" title="Sửa"><i className="fa fa-edit"></i></button></td>
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

export default AdminOrderComponent