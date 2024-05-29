import React from 'react'
import EmlementButtonComponent from './EmlementButtonComponent'
import AppTitleComponent from './AppTitleComponent'

const AdminLogCompopent = () => {
  return (
    <main className="app-content">
      <AppTitleComponent />
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <EmlementButtonComponent />
              <table className="table table-hover table-bordered responsive-table" id="sampleTable" >
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="all" />
                    </th>
                    <th>ID</th>
                    <th>Time</th>
                    <th>IP</th>
                    <th>Level</th>
                    <th>ID Account</th>
                    <th>Source</th>
                    <th>Content</th>
                  </tr>
                </thead>
                <tbody id="renderListAccount">
                  <tr>
                    <td width={10}>
                      <input type="checkbox" name="check1" defaultValue={1} />
                    </td>
                    <td>1</td>
                    <td>1-1-2024</td>
                    <td>
                      <b>172.9.14.5</b>
                    </td>
                    <td>
                      <span className="badge bg-info">INFO</span>
                    </td>
                    <td>leminhlongit</td>
                    <td>Login</td>
                    <td>Login success</td>
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

export default AdminLogCompopent