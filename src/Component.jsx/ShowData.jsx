import React from "react";

const ShowData = ({ depositMoney }) => {
  return (
    <div className="bg-blue-300 p-8 rounded shadow hover:shadow-lg">
      <h3 className="text-2xl">Deposit</h3>
      <h4 className="text-4xl">
        $<span id="deposit-amount">{depositMoney ? depositMoney : "00"}</span>
      </h4>
    </div>
  );
};

export default ShowData;
