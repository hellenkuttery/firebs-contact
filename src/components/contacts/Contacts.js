import { Table} from 'semantic-ui-react';
import { useFetch } from '../../utils/functions';

const Contacts = () => {
  const { contactList, isLoading } = useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <Table size={'large'} className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Username</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Phone Number</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Gender</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading?
           ( <Table.Row>
            <Table.Cell colSpan={5} textAlign="center">
              <p>Loading...</p>
            </Table.Cell>
          </Table.Row> ) :
          (<Table.Row>
            <Table.Cell>merhaba</Table.Cell>
          </Table.Row>)
          }
        </Table.Body>
     
      </Table>
    </div>
  );
};

export default Contacts;