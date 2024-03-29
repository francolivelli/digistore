import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Nombre",
    dataIndex: "name",
  },
  {
    title: "Producto",
    dataIndex: "product",
  },
  {
    title: "Estado",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  const data = [
    {
      type: "Enero",
      sales: 38,
    },
    {
      type: "Febrero",
      sales: 52,
    },
    {
      type: "Marzo",
      sales: 61,
    },
    {
      type: "Abril",
      sales: 145,
    },
    {
      type: "Mayo",
      sales: 48,
    },
    {
      type: "Junio",
      sales: 38,
    },
    {
      type: "Julio",
      sales: 38,
    },
    {
      type: "Agosto",
      sales: 38,
    },
    {
      type: "Septiembre",
      sales: 38,
    },
    {
      type: "Octubre",
      sales: 38,
    },
    {
      type: "Noviembre",
      sales: 38,
    },
    {
      type: "Diciembre",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#001529";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Mes",
      },
      sales: {
        alias: "Ingresos",
      },
    },
  };

  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h5 className="mb-0 sub-title">USD 1100</h5>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Comparado con Abril 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h5 className="mb-0 sub-title">USD 1100</h5>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Comparado con Abril 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h5 className="mb-0 sub-title">USD 1100</h5>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Comparado con Abril 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="mb-4 title">Estadísticas de ingresos</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-5">
        <h3 className="mb-4 title">Órdenes recientes</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
