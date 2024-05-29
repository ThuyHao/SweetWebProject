import React from 'react'
import AppTitleComponent from './AppTitleComponent'

const AdminAddAccountComponent = () => {
    return (
        <main className="app-content">
            <AppTitleComponent />
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <h3 className="tile-title">Tạo mới nhân viên</h3>
                        <div className="tile-body">
                            <div className="row element-button">
                                <div className="col-sm-2">
                                    <a
                                        className="btn btn-add btn-sm"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                    >
                                        <b>
                                            <i className="fas fa-folder-plus" /> Tạo chức vụ mới
                                        </b>
                                    </a>
                                </div>
                            </div>
                            <form className="row">
                                <div className="form-group col-md-4">
                                    <label className="control-label">ID nhân viên</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Họ và tên</label>
                                    <input className="form-control" type="text" required="" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Địa chỉ email</label>
                                    <input className="form-control" type="text" required="" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Địa chỉ thường trú</label>
                                    <input className="form-control" type="text" required="" />
                                </div>
                                <div className="form-group  col-md-4">
                                    <label className="control-label">Số điện thoại</label>
                                    <input className="form-control" type="number" required="" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Ngày sinh</label>
                                    <input className="form-control" type="date" />
                                </div>
                                <div className="form-group  col-md-3">
                                    <label className="control-label">Nơi sinh</label>
                                    <input className="form-control" type="text" required="" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Số CMND</label>
                                    <input className="form-control" type="number" required="" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Ngày cấp</label>
                                    <input className="form-control" type="date" required="" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Nơi cấp</label>
                                    <input className="form-control" type="text" required="" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Giới tính</label>
                                    <select className="form-control" id="exampleSelect4" required="">
                                        <option>-- Chọn giới tính --</option>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                                <div className="form-group  col-md-3">
                                    <label htmlFor="exampleSelect1" className="control-label">
                                        Chức vụ
                                    </label>
                                    <select className="form-control" id="exampleSelect1">
                                        <option>-- Chọn chức vụ --</option>
                                        <option>Bán hàng</option>
                                        <option>Tư vấn</option>
                                        <option>Dịch vụ</option>
                                        <option>Thu Ngân</option>
                                        <option>Quản kho</option>
                                        <option>Bảo trì</option>
                                        <option>Kiểm hàng</option>
                                        <option>Bảo vệ</option>
                                        <option>Tạp vụ</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Bằng cấp</label>
                                    <select className="form-control" id="exampleSelect3">
                                        <option>-- Chọn bằng cấp --</option>
                                        <option>Tốt nghiệp Đại Học</option>
                                        <option>Tốt nghiệp Cao Đẳng</option>
                                        <option>Tốt nghiệp Phổ Thông</option>
                                        <option>Chưa tốt nghiệp</option>
                                        <option>Không bằng cấp</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Tình trạng hôn nhân</label>
                                    <select className="form-control" id="exampleSelect2">
                                        <option>-- Chọn tình trạng hôn nhân --</option>
                                        <option>Độc thân</option>
                                        <option>Đã kết hôn</option>
                                        <option>Góa</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="control-label">Ảnh 3x4 nhân viên</label>
                                    <div id="myfileupload">
                                        <input
                                            type="file"
                                            id="uploadfile"
                                            name="ImageUpload"

                                        />
                                    </div>
                                    <div id="thumbbox">
                                        <img
                                            height={300}
                                            width={300}
                                            alt="Thumb image"
                                            id="thumbimage"
                                            style={{ display: "none" }}
                                        />
                                        <a className="removeimg" />
                                    </div>
                                    <div id="boxchoice" style={{color :'white'}}>
                                        <a className="Choicefile">
                                            <i className="bx bx-upload" />
                                        </a>
                                        <p style={{ clear: "both" }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button className="btn btn-save" type="button" style={{marginRight :'5px'}}>
                            Lưu lại
                        </button>
                        <a className="btn btn-cancel" href="/doc/table-data-table.html">
                            Hủy bỏ
                        </a>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default AdminAddAccountComponent