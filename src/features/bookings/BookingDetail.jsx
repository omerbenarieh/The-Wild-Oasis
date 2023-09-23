import { useMoveBack } from '../../hooks/useMoveBack.js';
import { useBooking } from './useBooking.js';

import styled from 'styled-components';

import BookingDataBox from './BookingDataBox.jsx';
import Row from '../../ui/Row.jsx';
import Heading from '../../ui/Heading.jsx';
import Tag from '../../ui/Tag.jsx';
import ButtonGroup from '../../ui/ButtonGroup.jsx';
import Button from '../../ui/Button.jsx';
import ButtonText from '../../ui/ButtonText.jsx';
import Spinner from '../../ui/Spinner.jsx';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
