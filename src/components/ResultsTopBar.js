import React from "react"

import SortBy from "./SortBy"

const ResultsTopBar = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
      <div className="me-3">
        <p className="mb-3 mb-md-0">
<<<<<<< HEAD
          <strong>{props.nums}</strong>
=======
          <strong>12</strong>
>>>>>>> d13d1436d09edcff7f3604d47c6851da3a463c0a
          &nbsp;results found
        </p>
      </div>
      {props.sortBy && <SortBy data={props.sortBy} />}
    </div>
  )
}

export default ResultsTopBar
