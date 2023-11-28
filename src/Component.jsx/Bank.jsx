import { useState } from "react";
import Button from "./Button";
// import ShowData from "./ShowData";
import { useId } from "react";

const Bank = () => {
  const [deposit, setDeposit] = useState("");
  const [depositMoney, setDepositMoney] = useState(0);
  const [blanceMoney, setBlanceMoney] = useState(1200);
  const [withdraw, setWithdraw] = useState("");
  const [withdrawMoney, setWithdrawMoney] = useState(0);

  // const [section, setSection] = useState([
  //   { bgColor: "bg-red-300", section: "Deposit", value: depositMoney },
  //   { bgColor: "bg-green-300", section: "Withdrow" },
  //   {
  //     bgColor: "bg-green-300",
  //     section: "Balance",
  //     value: withdrawMoney,
  //   },
  // ]);

  // const chars = [
  //   { bgColor: "bg-red-300", section: "Deposit", fun: depositMoney },
  //   { bgColor: "bg-green-300", section: "Withdrow" },
  //   {
  //     bgColor: "bg-green-300",
  //     section: "Balance",
  //     fun: withdrawMoney,
  //   },
  // ];

  function handleDepositBtn() {
    setDepositMoney((preValue) => {
      return parseFloat(preValue) + deposit;
    });

    setBlanceMoney((preValue) => {
      return parseFloat(preValue) + deposit;
    });
    setDeposit("");
  }

  function handleWithdrawBtn() {
    if (blanceMoney > withdraw) {
      setWithdrawMoney((prevalue) => {
        return parseFloat(prevalue) + withdraw;
      });

      setBlanceMoney((preValue) => {
        return parseFloat(preValue) - withdraw;
      });
    } else {
      alert("Withdraw Grater Then Blance");
    }
    setWithdraw("");
  }

  const Id = useId();
  console.log(Id);
  return (
    <div>
      <header>
        <h1 className="text-5xl text-center mt-16">
          {`Let's get some`}
          <span className="font-semibold text-purple-600">Money</span>!!!
        </h1>
      </header>
      <main className=" w-3/4 mx-auto">
        <section className="mt-8">
          <div className="grid grid-cols-3 gap-4 text-white">
            {/* ---------Deposit-Amount---------- */}

            <div
              className={`${
                depositMoney > 0 ? "bg-green-300" : "bg-red-300"
              } p-8 rounded shadow hover:shadow-lg`}
            >
              <h3 className="text-2xl">Deposit</h3>
              <h4 className="text-4xl">
                $
                <span id="deposit-amount">
                  {depositMoney ? depositMoney : "00"}
                </span>
              </h4>
            </div>

            {/* {section.map((char) => (
              <ShowData
                key={useId()}
                // depositMoney={depositMoney}
                char={char}
              />
            ))} */}

            {/* Withdraw-Amount */}

            <div className="bg-yellow-300 p-8 rounded shadow hover:shadow-lg">
              <h3 className="text-2xl">Withdraw</h3>
              <h4 className="text-4xl">
                $
                <span id="withdraw-amount">
                  {withdrawMoney ? withdrawMoney : "00"}
                </span>
              </h4>
            </div>

            {/* //Balance-Amount */}
            <div
              className={`${
                blanceMoney > 300 ? "bg-green-300" : "bg-red-300"
              } p-8 rounded shadow hover:shadow-lg`}
            >
              <h3 className="text-2xl">Balance</h3>
              <h4 className="text-4xl">
                $<span id="balance-amount">{blanceMoney}</span>
              </h4>
            </div>
          </div>

          <section className="mt-4">
            <h3 className="text-3xl text-center mb-8">Deposit and Withdraw</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-100 rounded p-8">
                <h3 className="text-2xl mb-4">Please Deposit</h3>
                <input
                  id="deposit-input"
                  className="border block border-gray-400 rounded w-3/4 mb-4 px-2"
                  type="number"
                  placeholder="Enter your deposit amount in $..."
                  onChange={(e) => setDeposit(parseFloat(e.target.value))}
                  value={deposit}
                />
                <Button onClick={handleDepositBtn}>Deposit</Button>
              </div>
              <div className="bg-red-100 rounded p-8">
                <h3 className="text-2xl mb-4">Please Withdraw</h3>
                <input
                  id="withdraw-input"
                  className="border block border-gray-400 rounded w-3/4 mb-4 px-2"
                  type="number"
                  placeholder="Enter your withdraw amount in $..."
                  value={withdraw}
                  onChange={(e) => setWithdraw(parseFloat(e.target.value))}
                />
                <Button onClick={handleWithdrawBtn}>Withdraw</Button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Bank;
