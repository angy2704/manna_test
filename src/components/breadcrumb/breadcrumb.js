import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import breadcrumbIconAbsence from '../../assets/images/Absence_Icon.svg';
import breadcrumbIconBalance from '../../assets/images/Soldes-gris.svg';

function BreadcrumbExample() {
  return (
    <Breadcrumb className="mb-0">
      <Breadcrumb.Item active href="/"><img src={breadcrumbIconAbsence} /><span>Absence</span> </Breadcrumb.Item>
      <Breadcrumb.Item href="/"><img src={breadcrumbIconBalance} /> <span>Sous Module</span></Breadcrumb.Item>
      <Breadcrumb.Item><span>Sous sous module</span></Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;
