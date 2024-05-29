import React from 'react'

const AppTitleComponent = () => {
    return (
        <div className="app-title">
            <ul className="app-breadcrumb breadcrumb side">
                <li className="breadcrumb-item active">
                    <a href="#">
                        <b>Danh sách nhân viên</b>
                    </a>
                </li>
            </ul>
            <div id="clock" />
        </div>
    )
}

export default AppTitleComponent