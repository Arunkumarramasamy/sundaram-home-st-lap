import DisbursementTabsIntegrator from "./DisbursementTabsIntegrator";

const DisbursementDetailPage = (props) => {

  const backButtonHandler = () => {
    props.setListVisibility(true);
  };



  return (
    <>     
        <DisbursementTabsIntegrator searchStateValues={props.searchStateValues}/>   
    </>
  );
};

export default DisbursementDetailPage;
