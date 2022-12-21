import TabsIntegrator from "./TabsIntegrator";
import STButton from "../CustomComponents/STButton";

const DisbursementDetailPage = (props) => {

  const backButtonHandler = () => {
    props.setListVisibility(true);
  };



  return (
    <>     
        <TabsIntegrator searchStateValues={props.searchStateValues}/>   
        {/* <STButton variant="contained" >Back to search</STButton>   */}
    </>
  );
};

export default DisbursementDetailPage;
