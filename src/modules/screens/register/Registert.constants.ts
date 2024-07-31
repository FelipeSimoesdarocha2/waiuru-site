// Assets
import admin from 'assets/images/about/ourSolutionsAbout/adminSystem.svg';
import employee from 'assets/images/about/ourSolutionsAbout/appEmployee.svg';
import resident from 'assets/images/about/ourSolutionsAbout/appResident.svg';

// Models
import { OurSolutionsProps } from 'models';

const our_solutions: OurSolutionsProps[] = [
  {
    src: employee,
    paragraph: 'ourSolutions.employee.paragraph',
    width: 225,
    action: {
      label: 'ourSolutions.employee.action.label',
      link: '/solutions/employees',
    },
  },
  {
    src: admin,
    paragraph: 'ourSolutions.admin.paragraph',
    action: {
      label: 'ourSolutions.admin.action.label',
      link: '/solutions/administrators',
    },
  },
  {
    src: resident,
    paragraph: 'ourSolutions.resident.paragraph',
    action: {
      label: 'ourSolutions.resident.action.label',
      link: '/solutions/residents',
    },
  },
];

export { our_solutions };
