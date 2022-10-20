import { gql } from '@apollo/client';

const UpdatePassanger = gql`
  mutation UpdatePassanger($id: Int!, $jenisKelamin: String!, $nama: String!, $umur: Int!) {
    update_passangersData_passangers_by_pk(pk_columns: {id: $id}, _set: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
      id
      nama
      jenisKelamin
      umur
    }
  }
`;

export default UpdatePassanger;