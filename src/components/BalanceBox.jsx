import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Icon,
  ResponsiveGridLayout,
} from "@ui5/webcomponents-react";
import { useI18nBundle } from "@ui5/webcomponents-react-base";

function BalanceBox({ transactions }) {
  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [balance, setBalance] = useState(0);

  const i18nBundle = useI18nBundle("myApp");

  useEffect(() => {
    const calculateTotals = () => {
      const totalDebit = transactions
        .filter((transaction) => transaction.cashFlow === "debit")
        .reduce((acc, transaction) => acc + Number(transaction.amount), 0);
      const totalCredit = transactions
        .filter((transaction) => transaction.cashFlow === "credit")
        .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

      setTotalDebit(totalDebit);
      setTotalCredit(totalCredit);
      setBalance(totalCredit - totalDebit);
    };

    calculateTotals();
  }, [transactions]);

  return (
    <ResponsiveGridLayout
      columnGap="1rem"
      rowGap="1rem"
      columnSpanL="3"
      columnSpanM="3"
      columnSpanS="2"
      columnSpanXL="4"
    >
      <Card
        key="credit"
        style={{
          borderColor: "#4CAF50",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: "8px",
        }}
        header={
          <CardHeader
            avatar={<Icon name="add" style={{ color: "#4CAF50" }} />}
            interactive={false}
            titleText={i18nBundle.getText("totalCredit")}
            subtitleText={totalCredit.toLocaleString(navigator.language, {
              style: "currency",
              currency: "USD",
            })}
          />
        }
      />
      <Card
        key="debit"
        style={{
          borderColor: "#F44336",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: "8px",
        }}
        header={
          <CardHeader
            avatar={<Icon name="less" style={{ color: "#F44336" }} />}
            interactive={false}
            titleText={i18nBundle.getText("totalDebit")}
            subtitleText={totalDebit.toLocaleString(navigator.language, {
              style: "currency",
              currency: "USD",
            })}
          />
        }
      />
      <Card
        key="balance"
        header={
          <CardHeader
            avatar={
              <Icon
                name="lead"
                style={{ color: balance >= 0 ? "#4CAF50" : "#F44336" }}
              />
            }
            interactive={false}
            titleText={i18nBundle.getText("totalBalance")}
            subtitleText={balance.toLocaleString(navigator.language, {
              style: "currency",
              currency: "USD",
            })}
          />
        }
        style={{
          borderColor: balance >= 0 ? "#4CAF50" : "#F44336",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: "8px",
          animation: `${
            balance >= 0 ? "glow" : "warning"
          } 1s infinite ease-in-out`,
        }}
      />
    </ResponsiveGridLayout>
  );
}

export default BalanceBox;

//
