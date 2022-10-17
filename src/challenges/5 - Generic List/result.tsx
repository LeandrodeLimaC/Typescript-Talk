import React from "react";

// Table Component
type TableProps<Item> = {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
};

export const Table = <T,>(props: TableProps<T>) => {
  return null;
};

// ---------

export const Component = () => {
  return (
    <>
      <Table
        items={[{ id: "1" }]}
        renderItem={(item) => {
          return null;
        }}
      />

      <Table
        items={[{ id: "1", name: "Leandro", age: 23 }]}
        renderItem={({ name }) => {
          return null;
        }}
      />
    </>
  );
};
