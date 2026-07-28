import { useForm } from "react-hook-form";

const PatientForm = ({ onSubmit, initialData = {} }) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: initialData,
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className="bg-white shadow rounded-lg p-6 space-y-4"
    >
      <input
        {...register("fullName")}
        placeholder="Full Name"
        className="border p-3 rounded w-full"
      />

      <input
        {...register("email")}
        placeholder="Email"
        className="border p-3 rounded w-full"
      />

      <input
        {...register("phone")}
        placeholder="Phone Number"
        className="border p-3 rounded w-full"
      />

      <input
        {...register("age")}
        type="number"
        placeholder="Age"
        className="border p-3 rounded w-full"
      />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save Patient
      </button>
    </form>
  );
};

export default PatientForm;