import { gql } from "@apollo/client";

const GetDataByUserId = gql `
query MyQuery($id: Int!) {
    passangersData_passangers(where: {id: {_eq: $id}}) {
        nama
        umur
        jenisKelamin
        id
    }
}
`;

export default GetDataByUserId;