import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incrementByValue,incrementCounter,resetCounter,decrementCounter } from './redux/slices/counterSlice'


function CounterPage() {

    const [inpvalue,setInpValue]=useState("")

    const {counter}=useSelector((state)=>state.counterReducer)
    // console.log(counter)

    const dispatch=useDispatch()

  return (
    <div style={{minHeight:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
        <div className='border border-2 border-light p-3 rounded w-50'>
            <h1 className="text-center mb-2 text-danger">Counter</h1>
            <h3 className='text-center text-light'>{counter}</h3>
            <div className='d-flex justify-content-around'>
                <button className="btn btn-success" onClick={()=>{dispatch(incrementCounter())}}>Increment +</button>
                <button className="btn btn-info" onClick={()=>{dispatch(resetCounter())}}>Reset</button>
                <button className="btn btn-danger" onClick={()=>{dispatch(decrementCounter())}}>Decrement -</button>
            </div>
            <div className='d-flex gap-3 px-3 mt-3'>
                <input type="number" onChange={(e)=>{setInpValue(parseInt(e.target.value))}} className="form-control" placeholder='Enter Value' />
                <button className="btn btn-primary" onClick={()=>{dispatch(incrementByValue(inpvalue))}}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CounterPage