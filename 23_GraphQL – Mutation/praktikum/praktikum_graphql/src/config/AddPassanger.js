import { gql } from '@apollo/client';

const AddPassanger = gql`
  mutation AddPassanger($jenisKelamin: String!, $nama: String!, $umur: Int!) {
    insert_passangersData_passangers(objects: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
      returning {
        id
      }
    }
  }
`

export default AddPassanger;