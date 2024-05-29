import React from 'react'
import { useNavigate } from 'react-router-dom'
import EmlementButtonComponent from './EmlementButtonComponent'
import AppTitleComponent from './AppTitleComponent'

const AdminAccountComponent = () => {
    const navigate = useNavigate()

    function getRoleManagement() {
        navigate('/admin/account-role-manager')
    }

    return (
        <main className="app-content">
            <AppTitleComponent />
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <EmlementButtonComponent/>
                            <table
                                className="table table-hover table-bordered js-copytextarea responsive-table"
                                cellPadding={0}
                                cellSpacing={0}
                                border={0}
                                id="sampleTable" >
                                <thead>
                                    <tr>
                                        <th>ID nhân viên</th>
                                        <th width={150}>Họ và tên</th>
                                        <th width={20}>Ảnh thẻ</th>
                                        <th width={300}>Địa chỉ</th>
                                        <th>Ngày sinh</th>
                                        <th>Giới tính</th>
                                        <th>SĐT</th>
                                        <th>Chức vụ</th>
                                        <th width={100}>Tính năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#YUI21376</td>
                                        <td>Nguyễn Thị Mai</td>
                                        <td>
                                            <img
                                                className="img-card-person"
                                                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/425504046_2140968452928397_7020557538431123240_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH2-BFQhORuzFcTYJZzY-5qZg94BacUkQlmD3gFpxSRCcMF0tZoTYWItW45EDmJJKs8Z_lZv6P2nDo-aMOhop4u&_nc_ohc=7zWpDauEJh0Q7kNvgHlvWRV&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYAtCDq2rbM1An_Itflfc48D_4yFDUGDLsyVayR8lA3AfQ&oe=6658DAD4"
                                                alt=""
                                            />
                                        </td>
                                        <td>Đường Số 3, Tân Tạo A, Bình Tân, Hồ Chí Minh</td>
                                        <td>09/12/2000</td>
                                        <td>Nữ </td>
                                        <td>0836333037</td>
                                        <td>Tư vấn</td>
                                        <td>
                                            <button
                                                className="btn btn-primary btn-sm trash"
                                                title="Xóa"
                                            >
                                                <i className="fas fa-trash-alt" />
                                            </button>
                                            <button
                                                className="btn btn-primary btn-sm edit"
                                                title="Sửa"
                                                id="show-emp"
                                                data-toggle="modal"
                                                data-target="#ModalUP"
                                            >
                                                <i className="fas fa-edit" />
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
    )
}

export default AdminAccountComponent