import axios from "axios";

const losCustomerAPI = axios.create({
  baseURL: "http://localhost:8080/losCustomer/",
});

const disbursementAPI = axios.create({
  baseURL: "http://localhost:8080/disbursement/",
});

export class DisbursementRequestListService {
  constructor() {}

  getAllDisbursementData(filterCondition) {
    return disbursementAPI.post("/getAllDisbursementData", filterCondition);
  }

  getDisbursementData(data) {
    return disbursementAPI.post("/getDisbursementData", data);
  }

  getDisbursementDataByBranch(branch) {
    return disbursementAPI.post("/searchAllDisbBranchData", branch);
  }
}
