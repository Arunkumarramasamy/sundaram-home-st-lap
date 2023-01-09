import axios from "axios";

const losCustomerAPI = axios.create({
  baseURL: "http://localhost:8080/losCustomer/",
});

const disbursementAPI = axios.create({
  baseURL: "http://localhost:8080/disbursement/",
});

export class DisbursementRequestListService {
  constructor() {}

  getAllDisbursementData() {
    return disbursementAPI.get("/getAllDisbursementData");
  }

  getAllData() {
    return losCustomerAPI.get("/getAllData");
  }

  getDisbursementData(data) {
    return disbursementAPI.post("/getDisbursementData", data);
  }

  getDisbursementDataByBranch(branch) {
    return disbursementAPI.post("/searchAllDisbBranchData", branch);
  }
}
