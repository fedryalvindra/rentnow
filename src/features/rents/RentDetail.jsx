import BackButton from '../../ui/BackButton.jsx';
import Button from '../../ui/Button.jsx';
import Buttons from '../../ui/Buttons.jsx';

import PagesLayout from '../../ui/PagesLayout.jsx';
import RentLoading from '../../ui/RentLoading.jsx';
import RentDetailReport from './RentDetailReport.jsx';
import { useRent } from './useRent.js';

function RentDetail() {
  const { data: rent, isLoading: isLoadingRent } = useRent();
  return (
    <PagesLayout>
      <BackButton />
      <div className="space-y-6 lg:pt-8">
        {isLoadingRent ? <RentLoading /> : <RentDetailReport rent={rent} />}
        <div className="flex justify-between">
          <Button type="back" />
          <Buttons>
            <Button type="delete">Delete</Button>
            <Button type="form">Edit</Button>
          </Buttons>
        </div>
      </div>
      {/* <RentLoading /> */}
    </PagesLayout>
  );
}

export default RentDetail;
