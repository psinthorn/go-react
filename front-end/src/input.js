
const Input = ({title, type, id, name, className, autoComplete, onChange}) => {
    return (
      <div className='mb-3'>
          <label className='form-label' htmlFor={name}>{title}</label>
          <input 
              type={type}
              id={name}
              className={className}
              autoComplete={autoComplete}
              onChange={onChange}
          >
          </input>
      </div>
    )
  }
  
  export default Input