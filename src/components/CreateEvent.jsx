import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id: userId } = JSON.parse(localStorage.getItem("user"));

  const onSubmit = (data) => {
    axios
      .post(
        "http://localhost:3001/api/events",
        {
          ...data,
          organizerId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <div className="min-h-[90vh] items-center justify-center py-10 bg-gradient-to-r from-blue-100 via-cyan-100 to-violet-100">
        <div className="mx-auto w-1/2 px-10 py-6 bg-white border-0 shadow-lg mb-6 text-gray-700">
          <p className="text-center text-4xl font-bold">Create Event</p>
          <form action="" className="w-full py-10">
            <label className="form-control">
              <div className="label">
                <span className="text-md font-semibold">
                  Add a nice title for your event
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <div className="flex w-full flex-col lg:flex-row lg:gap-x-6 my-6">
              <label className="form-control flex-1">
                <div className="label">
                  <span className="text-md font-semibold">Location</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                />
              </label>
              <label className="form-control flex-1">
                <div className="label">
                  <span className="text-md font-semibold">Select a date</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                />
              </label>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="text-md font-semibold">
                  Add the Event description
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="The description can have maximun 100 characters"
              ></textarea>
            </label>
            <div className="flex justify-end mt-8 gap-x-4">
              <button className="btn btn-outline btn-error rounded-none font-bold">
                Cancel
              </button>
              <button className="btn btn-info rounded-none font-bold">
                Create event
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
