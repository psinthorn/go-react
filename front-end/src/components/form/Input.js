import { forwardRef } from "react";

const Input = forwardRef(({title, type, id, name, className, autoComplete, onChange, errorDiv, errorMsg}, ref) => {
    return (
      <div className='mb-3'>
          <label className='form-label' htmlFor={name}>{title}</label>
          <input 
              key={id}
              title={title}
              type={type}
              id={name}
              ref={ref}
              name={name}
              className={className}
              autoComplete={autoComplete}
              onChange={onChange}
          >
          </input>
          <div className={errorDiv}>{errorMsg}</div>
      </div>
    )
  })
  
  export default Input