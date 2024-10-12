import React from 'react'

const LeftPanel = () => {
  return (
    <div>
    {/* RBC Table */}
    <div className="card bg-light mb-4">
      <div className="card-body">
        <h5 className="card-title text-center">RBC</h5>
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Angled Cells</td>
              <td>222</td>
              <td>67%</td>
            </tr>
            <tr>
              <td>Borderline Ovalocytes</td>
              <td>50</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Burr Cells</td>
              <td>87</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>Fragmented Cells</td>
              <td>2</td>
              <td>0.12%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* WBC Table */}
    <div className="card bg-light mb-4">
      <div className="card-body">
        <h5 className="card-title text-center">WBC</h5>
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basophil</td>
              <td>222</td>
              <td>67%</td>
            </tr>
            <tr>
              <td>Eosinophil</td>
              <td>50</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Lymphocyte</td>
              <td>87</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>Monocyte</td>
              <td>2</td>
              <td>0.12%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Platelets Table */}
    <div className="card bg-light mb-4">
      <div className="card-body">
        <h5 className="card-title text-center">Platelets</h5>
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Count</th>
              <td>222</td>
            </tr>
            <tr>
              <th>Percentage</th>
              <td>87%</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
  )
}

export default LeftPanel