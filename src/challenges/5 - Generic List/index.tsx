import React from "react";

// Table Component
type TableProps = {
  items: { id: string }[];
  renderItem: (item: { id: string }) => React.ReactNode;
};

export const Table = (props: TableProps) => {
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
    </>
  );
};
