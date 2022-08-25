
const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 text-lg uppercase font-semibold text-gray-800'>{label}</label>
      <input
        className='bg-gray-200 mb-3 py-2 px-3 border-2 outline-none rounded'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default TextField