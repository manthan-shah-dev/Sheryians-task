import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  let formData = [];
  let {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  const formSubmit = (data) => {
    formData.push(data);
    console.log(formData);
    formData.forEach((el, index) => {
      console.log(`Form Data #${index + 1}:`, el);
    });
    reset();
  };

  console.log("from RHF Rendering......");

  return (
    <div className="w-80  bg-white border rounded border-gray-700 p-4 m-4 ">
      REACT HOOK fORM
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-4 p-5 justify-center "
      >
        <input
          {...register(`product_name`)}
          className="p-2 border rounded border-gray-400"
          type="text"
          name="product_name"
          placeholder="product name"
        />
        <input
          {...register(`price`)}
          className="p-2 border rounded border-gray-400"
          type="number"
          name="price"
          min="0"
          step="0.01"
          placeholder="Enter price"
        />
        <span>Select Category:</span>
        <select
          name="Category"
          className="p-2 border rounded border-gray-400"
          {...register(`Category`)}
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
          {...register(`image_Url`)}
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

export default RHF;
