import DashboardBox from "@/components/DashboardBox";
import { useGetTransactionsQuery } from "@/state/api";
import React from "react";

type Props = {};

const Row3 = (props: Props) => {
  const { data: transactionsData } = useGetTransactionsQuery();
  console.log("transactionsData: ", transactionsData);
  return (
    <>
      <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
