import React from 'react'

const EditModal = ({ account, onCancel }) => {
  return (
    <div
      className="modal fade show"
      id="ModalUP"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
      style={{ display: 'block' }} // Hiển thị modal
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="form-group  col-md-12">
                <span className="thong-tin-thanh-toan">
                  <h5>Chỉnh sửa tài khoản</h5>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="control-label">ID nhân viên</label>
                <input
                  className="form-control"
                  type="text"
                  required=""
                  defaultValue={account.id}
                  disabled=""
                />
              </div>
              <div className="form-group col-md-6">
                <label className="control-label">Tên tài khoản</label>
                <input
                  className="form-control"
                  type="text"
                  required=""
                  defaultValue={account.accountName}
                  disabled=""
                />
              </div>
              <div className="form-group col-md-6">
                <label className="control-label">Họ và tên</label>
                <input
                  className="form-control"
                  type="text"
                  required=""
                  defaultValue={account.fullName}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="control-label">Số điện thoại</label>
                <input
                  className="form-control"
                  type="number"
                  required=""
                  defaultValue={account.phone}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="control-label">Địa chỉ email</label>
                <input
                  className="form-control"
                  type="text"
                  required=""
                  defaultValue={account.email}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="control-label">Ngày sinh</label>
                <input
                  className="form-control"
                  type="date"
                  defaultValue={account.birthday.split('T')[0]}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="control-label">Địa chỉ</label>
                <input
                  className="form-control"
                  type="text"
                  required=""
                  defaultValue={account.address}
                />
              </div>
            </div>
            <br />
            <a className="btn btn-save" type="button">
              Lưu lại
            </a>
            <a style={{marginLeft:'10px'}} className="btn btn-cancel" data-dismiss="modal" onClick={onCancel}>
              Hủy bỏ
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal