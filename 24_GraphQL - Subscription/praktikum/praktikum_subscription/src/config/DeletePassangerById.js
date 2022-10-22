import { gql } from '@apollo/client'

const DeletePassangerById = gql`
  mutation DeletePassangerById($id: Int!) {
    delete_passangersData_passangers_by_pk(id: $id) {
      id
    }
  }
`;

export default DeletePassangerById;