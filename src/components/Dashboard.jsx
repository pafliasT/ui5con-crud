import React, { useState, useEffect } from "react";
import { Title } from "@ui5/webcomponents-react";
import { PieChart } from "@ui5/webcomponents-react-charts";
import { API, graphqlOperation } from "aws-amplify";
import { listTRANSACTIONS } from "../graphql/queries";

export default function Dashboard() {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    // Fetch transactions and process data for the chart
    async function fetchTransactions() {
      try {
        const transactionData = await API.graphql(
          graphqlOperation(listTRANSACTIONS)
        );
        const transactionsResult = transactionData.data.listTRANSACTIONS.items;
      
        const aggregatedData = aggregateTransactionData(transactionsResult);
        setTransactionData(aggregatedData);
      } catch (err) {
        console.error("error fetching transactions:", err);
      }
    }
    fetchTransactions();
  }, []);

 
  function aggregateTransactionData(transactions) {
    const dataMap = new Map();
    transactions.forEach((transaction) => {
      if (dataMap.has(transaction.category)) {
        let currentAmount = dataMap.get(transaction.category);
        dataMap.set(transaction.category, currentAmount + transaction.amount);
      } else {
        dataMap.set(transaction.category, transaction.amount);
      }
    });
    return Array.from(dataMap, ([category, amount]) => ({ category, amount }));
  }

  return (
    <>
      <Title>Dashboard</Title>
      <PieChart
        dimension={{ accessor: "category" }}
        measure={{ accessor: "amount" }}
        dataset={transactionData}
      />
    </>
  );
}
