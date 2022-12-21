import TabsIntegrator from "./TabsIntegrator";

const DisbursementDetailPage = (props) => {

  const backButtonHandler = () => {
    props.setListVisibility(true);
  };



  return (
    <>     
        <TabsIntegrator searchStateValues={props.searchStateValues}/>   
    </>
  );
};

export default DisbursementDetailPage;
