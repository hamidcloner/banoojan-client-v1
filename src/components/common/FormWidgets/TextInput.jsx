



export default function TextInput({handler}){
    return (
        <>
            <div className="flex w-72 flex-col font-vazirRegular-persian-digit dir-ltr my-5 mx-auto">
              <div className="w-full max-w-sm min-w-[200px]">
                <input 
                    className="w-full bg-transparent placeholder:text-slate-90 text-white border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow text-xl" 
                    placeholder="09121234567" 
                    onChange={handler}
                    />
              </div>
            </div>
        </>
    )
}