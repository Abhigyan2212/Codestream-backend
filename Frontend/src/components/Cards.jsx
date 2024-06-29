import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <div className="flex justify-center mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt="" className="w-full" />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <h2 className="card-title flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between items-center">
            <div className="badge badge-outline">${item.price}</div>
            <a
              href={item.downloadLink}
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              download
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
