import React from "react";

function LogoutButton() {
  return (
    <div className="flex items-center gap-2 w-56 pl-11 pt-36 pb-10 p-4 bg-gray-200">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
          fill="#D41111"
        />
        <path
          d="M4.55994 11.2501L6.62994 9.18009C6.77994 9.03009 6.84994 8.84009 6.84994 8.65009C6.84994 8.46009 6.77994 8.26009 6.62994 8.12009C6.33994 7.83009 5.85994 7.83009 5.56994 8.12009L2.21994 11.4701C1.92994 11.7601 1.92994 12.2401 2.21994 12.5301L5.56994 15.8801C5.85994 16.1701 6.33994 16.1701 6.62994 15.8801C6.91994 15.5901 6.91994 15.1101 6.62994 14.8201L4.55994 12.7501H8.99994V11.2501H4.55994V11.2501Z"
          fill="#D41111"
        />
      </svg>
      <h1 className="text-red-600 text-[18px] font-medium font-campton">
        Logout
      </h1>
    </div>
  );
}

export default LogoutButton;
