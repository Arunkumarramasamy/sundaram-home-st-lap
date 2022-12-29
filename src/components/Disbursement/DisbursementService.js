import axios from "axios";

   const losCustomerAPI = axios.create({
    baseURL: "http://localhost:8080/losCustomer/"
  });

  const disbursementAPI = axios.create({
    baseURL: "http://localhost:8080/disbursement/"
  });

export const getCustBankDetailsByAppNum = async (applicationNumber) => {
      const response = await losCustomerAPI.post("/getCustBankDetailsByAppNum",{"applicationNumber": applicationNumber});
      {
        response.data.map((row, index) => ( 
        row.isChecked = false
        ));
      };
      return response.data;
};


export const insertDisbursement = async (data) => {
      const response = await disbursementAPI.post("/insertDisbursement",data);
      return response.data;
};

