import { React, useState, useRef } from "react";

const Form = () => {
  let formRef = useRef({});
  
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formRef.productName.value);
    console.log(formRef.current.productPrice.value);
    console.log(formRef.current.Category.value);
    console.log(formRef.current.imageUrl.value);
  };
  return (
    <div className="w-80  bg-white border rounded border-gray-700 p-4 m-4 ">
      <form
        className="flex flex-col gap-4 p-5 justify-center "
        onSubmit={handlesubmit}
      >
        <input
          className="p-2 border rounded border-gray-400"
          type="text"
          name="product_name"
          placeholder="product name"
          ref={(e) => (formRef.productName = e)}
        />
        <input
          className="p-2 border rounded border-gray-400"
          type="number"
          name="price"
          min="0"
          step="0.01"
          placeholder="Enter price"
          ref={(e) => (formRef.current.productPrice = e)}
        />
        <span>Select Category:</span>
        <select
          name="Category"
          className="p-2 border rounded border-gray-400"
          ref={(e) => (formRef.current.Category = e)}
        >
          <option
            className="p-2 border rounded border-gray-400  bg-gray-700 text-white"
            value="Men's"
          >
            Men's
          </option>
          <option
            className="p-2 border rounded border-gray-400 bg-gray-700 text-white"
            value="Women"
          >
            Women
          </option>
          <option
            className="p-2 border rounded border-gray-400  bg-gray-700 text-white"
            value="Kid's"
          >
            Kid's
          </option>
        </select>
        <input
          ref={(e) => (formRef.current.imageUrl = e)}

          className="p-2 border rounded border-gray-400"
          type="text"
          placeholder="image"
          name="image_Url"
        />
        <button className="p-2 border rounded border-gray-400 bg-black text-white">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
