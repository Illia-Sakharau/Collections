type Props = {
  isAll?: boolean;
};

const CollectionsTable = ({ isAll }: Props) => {
  return (
    <>
      {isAll ? (
        <div>All Collections table</div>
      ) : (
        <div>My Collections table</div>
      )}
    </>
  );
};

export default CollectionsTable;
