import React from "react";

const Sort = () => {
  return (
    <div className="mb-7 flex w-full items-center justify-center">
      <div className="flex items-center justify-start text-sm text-gray-dark">
        <small className="my-0 text-xs font-bold text-inherit">
          Sort posts by
        </small>
        <div className="relative pl-2 text-xs text-gray-dark">
          <button className="after:display-none font-md flex items-center overflow-visible whitespace-nowrap rounded-2xl border border-none border-[#3f52e1] bg-[linear-gradient(93.44deg,#3f52e1_44.18%,#6553ea_99.96%)] p-0 py-1 px-3 text-white delay-150 after:content-none lg:h-6 lg:px-4">
            <span className="mr-2 mb-0 mt-0.5 whitespace-nowrap text-left text-xs font-extrabold tracking-wide text-white">
              HOT
            </span>
            <span className="inline-flex items-center justify-center whitespace-nowrap align-middle text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="7"
                fill="none"
                viewBox="0 0 6 5"
              >
                <path fill="#fff" d="M6 .5L3 4.25 0 .5h6z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="ml-auto flex">
        <button className="m-0 overflow-visible border-none bg-transparent p-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.205 11.745C22.3229 9.46324 20.7915 7.48996 18.8001 6.06906C16.8087 4.64817 14.4446 3.84193 12 3.75C9.55537 3.84193 7.19128 4.64817 5.19989 6.06906C3.2085 7.48996 1.67711 9.46324 0.794986 11.745C0.735412 11.9098 0.735412 12.0902 0.794986 12.255C1.67711 14.5368 3.2085 16.51 5.19989 17.9309C7.19128 19.3518 9.55537 20.1581 12 20.25C14.4446 20.1581 16.8087 19.3518 18.8001 17.9309C20.7915 16.51 22.3229 14.5368 23.205 12.255C23.2646 12.0902 23.2646 11.9098 23.205 11.745ZM12 18.75C8.02499 18.75 3.82499 15.8025 2.30249 12C3.82499 8.1975 8.02499 5.25 12 5.25C15.975 5.25 20.175 8.1975 21.6975 12C20.175 15.8025 15.975 18.75 12 18.75Z"
              fill="#9E9E9E"
            ></path>
            <path
              d="M12 7.5C11.11 7.5 10.24 7.76392 9.49994 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18869 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45543 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05765 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15Z"
              fill="#9E9E9E"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sort;
