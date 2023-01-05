import * as React from "react";
import DisbursementRequestList from "./DisbursementRequestList";

export default function DisbursementApprovalList() {
  return (
    <React.Fragment>
      <DisbursementRequestList mode="APPROVALLIST" />
    </React.Fragment>
  );
}
