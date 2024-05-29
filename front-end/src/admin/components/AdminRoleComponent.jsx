import React from "react";
import AppTitleComponent from "./AppTitleComponent";

const AdminRoleComponent = () => {
    return (
        <main className="app-content">
            <AppTitleComponent />
            <button style={{ marginBottom: 10 }} className="btn btn-add btn-sm">
                <i className="fas fa-plus" />
                Thêm vai trò
            </button>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">Vai trò khách hàng</h3>
                        </div>
                        <div className="tile-body">
                            <div className="row element-button">
                                <div className="col-sm-2">
                                    <button className="btn btn-add btn-sm">
                                        <i className="fas fa-plus" /> Thêm trang truy cập
                                    </button>
                                    <button style={{ marginTop: 20 }} className="btn btn-danger btn-sm"  >
                                        <i className="fas fa-plus" /> Xóa vai trò
                                    </button>
                                </div>
                            </div>
                            <table className="table table-hover table-bordered" id="sampleTable" >
                                <thead>
                                    <tr>
                                        <th>Trang</th>
                                        <th>URL</th>
                                        <th>Mô tả</th>
                                        <th>Quyền truy cập</th>
                                        <th width="40px">Tính năng</th>
                                    </tr>
                                </thead>
                                <tbody id="renderRolesAccountCustomer">
                                    <tr>
                                        <td>giỏ hàng</td>
                                        <td>/cart</td>
                                        <td>Giỏ hàng và các chức năng</td>
                                        <td>
                                            <input type="checkbox" name="access[]" defaultValue="read" id="readChecked_1" defaultChecked="" /> Đọc (read)
                                            <br />
                                            <input type="checkbox" name="access[]" defaultValue="write" id="writeChecked_1" /> Ghi (write)
                                            <br />
                                            <input type="checkbox" name="access[]" defaultValue="remove" id="removeChecked_1" /> Xóa (remove)
                                            <br />
                                        </td>
                                        <td className="table-td-center">
                                            <button className="btn btn-primary btn-sm trash" type="button" title="Xóa" >
                                                <i className="fas fa-trash-alt" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminRoleComponent;
