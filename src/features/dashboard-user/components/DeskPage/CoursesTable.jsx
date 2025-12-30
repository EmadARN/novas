import UserTable from "./userTable/UserTable";

const CoursesTable = ({ columns, data }) => (
  <div className="bg-white rounded-xl shadow  p-6">
    <UserTable
      tableHead={columns}
      tableData={data}
      title="دوره‌های من"
      description="لیست دوره‌های شما"
      filterField="title"
    />
  </div>
);

export default CoursesTable;
