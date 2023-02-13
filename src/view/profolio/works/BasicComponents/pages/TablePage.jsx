import React from "react";
// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      quantity: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      quantity: 3,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      quantity: 6,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      quantity: 2,
    },
    {
      name: "Cherry",
      color: "bg-red-700",
      quantity: 10,
    },
  ];

  // 包括thead的label, td的render方法
  // 和可選的sortValue render方法或header render方法，只能選其一
  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => {
        return <div className={`p-3 m-2 ${fruit.color}`}></div>;
      },
      header: () => {
        return <th className="text-red-700">Color</th>;
      },
    },
    {
      label: "Quantity",
      render: (fruit) => {
        return fruit.quantity;
      },
      sortValue: (fruit) => fruit.quantity,
    },
    {
      label: "Quantity Squared",
      render: (fruit) => {
        return fruit.quantity ** 2;
      },
      sortValue: (fruit) => fruit.quantity ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  // const cdata = [
  //   {
  //     name: "MikeLiu",
  //     id: 7,
  //     class: "資工4A",
  //   },
  //   {
  //     name: "CuniLin",
  //     id: 5,
  //     class: "資工1A",
  //   },
  //   {
  //     name: "Who",
  //     id: 6,
  //     class: "資工2A",
  //   },
  // ];

  // const cconfig = [
  //   {
  //     label: "Name",
  //     render: (person) => person.name,
  //     sortValue: (person) => person.name,
  //   },
  //   {
  //     label: "ID",
  //     render: (person) => person.id,
  //     sortValue: (person) => person.id,
  //   },
  //   {
  //     label: "Class",
  //     render: (person) => person.class,
  //     header: () => (
  //       <th className="text-red-500 p-2">
  //         <button>Class</button>
  //       </th>
  //     ),
  //   },
  // ];

  // const ckeyFn = (person) => person.id;

  return (
    <div>
      {/* <CopyTable data={cdata} config={cconfig} keyFn={ckeyFn} /> */}
      {/* <CSortableTable data={cdata} config={cconfig} keyFn={ckeyFn} /> */}
      {/* <Table data={data} config={config} keyFn={keyFn}></Table> */}
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
