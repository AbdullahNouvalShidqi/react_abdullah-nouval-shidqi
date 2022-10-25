import { gql } from '@apollo/client';

const GetAllPassangers = gql`
query GetAllPassangers {
    passangersData_passangers(order_by: {id: asc}) {
      id
      nama
      jenisKelamin
      umur
    }
  }
`;

export default GetAllPassangers;