const FormContainer = ({ title, children }) => {
  return (
    <div className="p-3 mt-10 max-w-xl mx-auto rounded-lg bg-slate-50 border border-gray-200 shadow-lg sm:p-6 md:p-8">
      <h1 className="my-5 text-center font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-400">{title}</h1>
      {children}
    </div>
  )
}
export default FormContainer