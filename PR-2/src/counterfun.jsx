const CounterFun  = ({no,inc,min,reset}) => {
    return(
        <div align="center">
           <h1>Counter App</h1>
           <h1>
           <button type="button" className="btn border me-3">
            {no}
          </button>
           </h1>
           <div>
           <div>
          {
            (no > 0) ? <button
            type="button"
            className="btn btn-dark me-3 "
            onClick={() => min()}
          >
            -
          </button>
          :
          <button
            type="button" disabled 
            className="btn btn-dark me-3 "
            onClick={() => min()}
          >
            -
          </button>
          }
          
          <button
            type="button"
            className="btn btn-dark me-3 "
            onClick={() => inc()}
          >
            +
          </button>
          
          <button
            type="button"
            className="btn btn-dark  "
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
           </div>
        </div>
    )
}
export default CounterFun