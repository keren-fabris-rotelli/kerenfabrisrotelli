import React  from 'react';
import { Grid, PageHeader } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

import CompanyItem from './company_item';
import companiesList from './companiesList.json';

const Companies = () => {
  const companies = Object.entries(companiesList['companies']).map((company) => {
    return <CompanyItem
      key={company[1].title}
      title={company[1].title}
      link={company[1].link}
      logo={company[1].logo}
      description={company[1].description}
    />
  });

  return(
    <ScrollableAnchor id={'companies'}>
      <div>
        <Grid>
          <PageHeader>a few companies i have worked for</PageHeader>
        </Grid>
        <hr/>
        <Grid className="companiesList">
          {companies}
        </Grid>
      </div>
    </ScrollableAnchor>
  );
}

export default Companies;
