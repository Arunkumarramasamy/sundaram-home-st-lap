import DisbursementTabsIntegrator from "./DisbursementTabsIntegrator";

const DisbursementDetailPage = (props) => {
  return (
    <>
      <DisbursementTabsIntegrator
        setListVisibility={props.setListVisibility}
        searchStateValues={props.searchStateValues}
      />
    </>
  );
};

export default DisbursementDetailPage;
