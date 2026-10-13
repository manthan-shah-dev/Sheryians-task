import React from "react";
import { useForm } from "react-hook-form";
const Form = ({
  setUsers,
  user,
  setToggle,
  updateData,
  updateindex,
  setupdateindex,
}) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: updateData?.name || "",
      email: updateData?.email || "",
      Contact: updateData?.Contact || "",
      Image: updateData?.Image || "",
    },
  });

  const handleForm = (data) => {
    if (updateindex !== null) {
      const copy = [...user];

      copy[updateindex] = data;

      setUsers(copy);
      setupdateindex(null);
    } else {
      setUsers([...user, data]);
    }

    reset();
    setToggle(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">
        {updateindex === null ? "Create User" : "Update User"}
      </h1>
      <form
        className="w-80 flex flex-col font-semibold gap-3 p-4 rounded-2xl border-2 text-white bg-black border-white"
        onSubmit={handleSubmit(handleForm)}
      >
        <input
          className="p-2  rounded outline-0 border  border-white"
          type="text"
          {...register("name", {
            required: "name is required",
          })}
          placeholder="name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          className="p-2 rounded outline-0 border  border-white"
          type="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address.",
            },
          })}
          placeholder="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          className="p-2 rounded outline-0 border  border-white"
          type="number"
          {...register("Contact", {
            required: "Contact Number is required",
            minLength: {
              value: 10,
              message: "Minimum length 10 digit is required",
            },
            maxLength: {
              value: 10,
              message: "Maximum length 10 digit is required",
            },
          })}
          placeholder="Contact"
        />
        {errors.Contact && (
          <p className="text-red-500">{errors.Contact.message}</p>
        )}
        <input
          className="p-2 rounded outline-0 border  border-white"
          type="text"
          {...register("Image", {
            required: "Image_Url is required",
          })}
          placeholder="Image_Url"
        />
        {errors.Image && <p className="text-red-500">{errors.Image.message}</p>}
        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer ">
          {updateindex === null ? " Add User" : "update user"}
        </button>
      </form>
    </div>
  );
};

export default Form;
