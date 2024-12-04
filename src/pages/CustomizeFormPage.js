import React, { useState } from "react"; 

const CustomizePage = () => {
  const [items, setItems] = useState([
    { id: '1', label: 'Supplier Code', checked: false },
    { id: '2', label: 'Product Code', checked: false },
    { id: '3', label: 'Net Quantity', checked: false },
    { id: '4', label: 'Purchase Order', checked: false },
    { id: '5', label: 'Batch Number', checked: false },
    { id: '6', label: 'EUDR DDS Reference', checked: false },
    { id: '7', label: 'EUDR DDS Verification', checked: false },
    { id: '8', label: 'EUDR Submission Date', checked: false },
    { id: '9', label: 'Referencing DDS', checked: false },
    { id: '10', label: 'Name', checked: false },
    { id: '11', label: 'Account', checked: false },
    { id: '12', label: 'Title', checked: false },
    { id: '13', label: 'Created By', checked: false },
    { id: '14', label: 'Date', checked: false },
    { id: '15', label: 'Status', checked: false },
  ])

  const handleToggle = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
  }

  const handleSubmit = () => {
    const checkedItems = items.filter(item => item.checked)
    console.log('Checked items:', checkedItems)
    // logic for backend 
  }
  const handleCancle= ()=>{
    setItems(() => {
        return items.map(item => ({ ...item, checked: false })) ;
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl bg-white">
        <div className="mb-6 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Customize Form</h1>
              <div className="mt-1 text-sm">
              </div>
            </div>
          </div>
        </div>
<hr></hr>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 mt-2">
          {items.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg border bg-white p-4 shadow-sm transition-all ${
                item.checked ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-200'
              }`}
            >
              <label className="flex cursor-pointer items-center space-x-3">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleToggle(item.id)}
                  className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-end  text-black gap-4 mb-5 p-4">
          <button
            onClick={handleCancle}
            className="rounded-md bg-gray-100 px-6 py-2 text-black shadow-sm transition-all text-white shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Cancle
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-md bg-indigo-600 px-6 py-2 text-white shadow-sm transition-all text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Submit
          </button>
        
        </div>
      </div>
    </div>
  )
}

export default CustomizePage;