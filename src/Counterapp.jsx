
function Counterapp() {
  return (
    <div style={{minHeight:"100vh", backgroundColor:"black"}} className=" justify-content-center d-flex align-items-center">
        <div className="border border-2 bg-dark rounded w-50">
            <h1 className="text-center text-danger mb-2">Counter</h1>
            <h1 className="text-center text-light mb-2">0</h1>
            <div className="d-flex justify-content-around">
                <button className="btn btn-primary">Increament</button>
                <button className="btn btn-info">Reset</button>
                <button className="btn btn-danger">Decreament</button>
            </div>
            <div className="d-flex gap-3 m-3">
                <input type="text" className="form-control"  placeholder="Enter Value" />
                <button className="btn btn-info">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Counterapp