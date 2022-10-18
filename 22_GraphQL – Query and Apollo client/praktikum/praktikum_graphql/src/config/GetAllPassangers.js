import { gql } from '@apollo/client';

const GetAllPassangers = gql`
query GetAllPassangers {
    passangersData_passangers {
      id
      nama
      jenisKelamin
      umur
    }
  }
`;

export default GetAllPassangers;