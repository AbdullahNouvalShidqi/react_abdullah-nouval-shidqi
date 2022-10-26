import { gql } from "@apollo/client";

const PassangerSubscription = gql`
  subscription MySubscription {
    passangersData_passangers {
      id
      nama
      jenisKelamin
      umur
    }
  }
`;

export default PassangerSubscription;