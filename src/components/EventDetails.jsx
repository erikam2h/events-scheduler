import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    axios.get(`http://localhost:3001/api/events/${id}`).then((response) => {
      setEvent(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {event && (
        <>
          {/* <p>Event Title: {event?.title}</p>
          <p>Event Description: {event?.description}</p>
          <p>Event Location: {event?.location}</p>
           */}

          <div className="min-h-[90vh] items-center justify-center py-10 bg-gradient-to-r from-blue-100 via-cyan-100 to-violet-100">
            <div className="mx-auto w-2/3 bg-white border-0 shadow-lg mb-6 text-gray-700">
              <div className="flex w-full flex-col lg:flex-row lg:gap-x-6 my-6">
                <div className="card image-full rounded-none w-1/3">
                  <figure>
                    <img src="https://picsum.photos/1000/800" alt="" />
                  </figure>
                  <div className="card-body">
                    <ul className="text-center min-w-48 h-full mt-2">
                      <li className="text-6xl font-bold">
                        {event.date.slice(8, 10)}
                      </li>
                      <li className="text-3xl font-bold text-info">
                        {event.date.slice(5, 7)}
                      </li>
                      <li className="text-2xl font-semibold">
                        {event.date.slice(0, 4)}
                      </li>
                      <li className="text-3xl font-semibold text-base-100 border-t pt-2 mt-2">
                        {event?.date.slice(11, 16)}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-8 w-2/3">
                  <p className="text-4xl font-bold mb-6">{event.title}</p>

                  <p className="text-md text-base-content text-justify">
                    {event.description}
                  </p>
                  <p className="flex align-middle text-md font-semibold my-4 mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="bi bi-geo-alt mr-2 mt-1"
                      viewBox="0 0 16 16"
                      fill="#00b6ff"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>

                    {event.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-2/3  mb-6 ">
              <div className="flex justify-end mt-8 gap-x-4">
                <Link to="/">
                  <button className="btn btn-info rounded-none font-bold">
                    Return
                  </button>
                </Link>
                <Link to={`/events/2`}>
                  <button className="btn btn-info rounded-none font-bold">
                    Next
                  </button>
                </Link>

                <button className="btn btn-info rounded-none font-bold">
                  Edit Event
                </button>
                <button className="btn btn-outline btn-error rounded-none font-bold">
                  Cancel
                </button>
                <button className="btn btn-success rounded-none font-bold">
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
