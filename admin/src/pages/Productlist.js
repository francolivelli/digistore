import React from 'react'
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

const Productlist = () => {
    return (
        <div>
          <h3 className="mb-4">Productos</h3>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      );
}

export default Productlist