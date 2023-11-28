import React from "react";

const ShowData = ({ depositMoney, char,  }) => {
  const { bgColor, section,value } = char;
  console.log(value);
  return (
    <div className={`${bgColor} p-8 rounded shadow hover:shadow-lg`}>
      <h3 className="text-2xl">{section}</h3>
      <h4 className="text-4xl">
        $<span id="deposit-amount">00</span>
      </h4>
    </div>
  );
};

export default ShowData;
