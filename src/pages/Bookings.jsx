import BookingTable from '../features/bookings/BookingTable.jsx';
import BookingTableOperations from '../features/bookings/BookingTableOperations.jsx';
import Heading from '../ui/Heading.jsx';
import Row from '../ui/Row.jsx';

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
