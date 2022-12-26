import DisbursementTabsIntegrator from "./DisbursementTabsIntegrator";

const DisbursementDetailPage = (props) => {
  return (
    <>
      <DisbursementTabsIntegrator
        setListVisibility={props.setListVisibility}
        searchStateValues={props.searchStateValues}
        accordianOpenState={props.accordianOpenState}
      />
    </>
  );
};

export default DisbursementDetailPage;
