import CustomersTable from "./table";

export default function Page() {
    return (
      <div>
        <p>Customers Page</p>
        <CustomersTable customers={[]} />
      </div>
    );
  }