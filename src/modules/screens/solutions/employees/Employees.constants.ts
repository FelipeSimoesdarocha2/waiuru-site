// Assets
import admin from 'assets/images/about/ourSolutionsAbout/adminSystem.svg';
import resident from 'assets/images/about/ourSolutionsAbout/appResident.svg';
import access_control from 'assets/images/solutions/access_control.svg';
import activities from 'assets/images/solutions/activities.svg';
import book_of_occurrences from 'assets/images/solutions/book_of_occurrences.svg';
import building_maintenance from 'assets/images/solutions/building_maintenance.svg';
import chat from 'assets/images/solutions/chat.svg';
import employee_control from 'assets/images/solutions/employee_control.svg';
import feed from 'assets/images/solutions/feed.svg';
import lost_and_found from 'assets/images/solutions/lost_and_found.svg';
import my_expenses from 'assets/images/solutions/my_expenses.svg';
import online_payment from 'assets/images/solutions/online_payment.svg';
import online_voting from 'assets/images/solutions/online_voting.svg';
import orders from 'assets/images/solutions/orders.svg';
import pet_registration from 'assets/images/solutions/pet_registration.svg';
import recreationa_area from 'assets/images/solutions/recreationa_area.svg';
import resident_profile from 'assets/images/solutions/resident_profile.svg';
import tasks from 'assets/images/solutions/tasks.svg';
import timecard from 'assets/images/solutions/timecard.svg';
import transparency_portal from 'assets/images/solutions/transparency_portal.svg';
import vehicle_registration from 'assets/images/solutions/vehicle_registration.svg';

// Models
import { OurSolutionsProps, CardSolutionsProps } from 'models';

const links = [
  {
    value: '/solutions/administrators',
    name: 'Síndicos',
  },
  {
    value: '/solutions/residents',
    name: 'Moradores',
  },
  {
    value: '/solutions/employees',
    name: 'Funcionários',
  },
];

const screen = [
  {
    id: 1,
    name: 'solutions.config.screen.presentation.title',
  },
  {
    id: 2,
    name: 'solutions.config.screen.functionalities.title',
  },
];

const our_solutions: OurSolutionsProps[] = [
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

const list_benefits = [
  {
    id: '1',
    name: 'solutions.employees.benefits.list.activities',
  },
  {
    id: '2',
    name: 'solutions.employees.benefits.list.maintenance',
  },
  {
    id: '3',
    name: 'solutions.employees.benefits.list.schedules',
  },
  {
    id: '4',
    name: 'solutions.employees.benefits.list.visitors',
  },
  {
    id: '5',
    name: 'solutions.employees.benefits.list.lost_and_found',
  },
  {
    id: '6',
    name: 'solutions.employees.benefits.list.orders',
  },
  {
    id: '7',
    name: 'solutions.employees.benefits.list.occurrences',
  },
  {
    id: '8',
    name: 'solutions.employees.benefits.list.employees',
  },
];

const dataEmployees: CardSolutionsProps['data'] = [
  {
    id: 1,
    title: 'solutions.functionalities.access_control.title',
    sub_title: 'solutions.functionalities.access_control.sub_title',
    paragraph: 'solutions.functionalities.access_control.paragraph',
    image: {
      src: access_control,
      alt: 'solutions.functionalities.access_control.title',
    },
    action: {
      label: 'solutions.functionalities.access_control.action',
    },
  },
  {
    id: 2,
    title: 'solutions.functionalities.online_voting.title',
    sub_title: 'solutions.functionalities.online_voting.sub_title',
    paragraph: 'solutions.functionalities.online_voting.paragraph',
    image: {
      src: online_voting,
      alt: 'solutions.functionalities.online_voting.title',
    },
    action: {
      label: 'solutions.functionalities.online_voting.action',
    },
  },
  {
    id: 3,
    title: 'solutions.functionalities.chat.title',
    sub_title: 'solutions.functionalities.chat.sub_title',
    paragraph: 'solutions.functionalities.chat.paragraph',
    image: {
      src: chat,
      alt: 'solutions.functionalities.chat.title',
    },
    action: {
      label: 'solutions.functionalities.chat.action',
    },
  },
  {
    id: 4,
    title: 'solutions.functionalities.feed.title',
    sub_title: 'solutions.functionalities.feed.sub_title',
    paragraph: 'solutions.functionalities.feed.paragraph',
    image: {
      src: feed,
      alt: 'solutions.functionalities.feed.title',
    },
    action: {
      label: 'solutions.functionalities.feed.action',
    },
  },
  {
    id: 5,
    title: 'solutions.functionalities.transparency_portal.title',
    sub_title: 'solutions.functionalities.transparency_portal.sub_title',
    paragraph: 'solutions.functionalities.transparency_portal.paragraph',
    image: {
      src: transparency_portal,
      alt: 'solutions.functionalities.transparency_portal.title',
    },
    action: {
      label: 'solutions.functionalities.transparency_portal.action',
    },
  },
  {
    id: 6,
    title: 'solutions.functionalities.online_payment.title',
    sub_title: 'solutions.functionalities.online_payment.sub_title',
    paragraph: 'solutions.functionalities.online_payment.paragraph',
    image: {
      src: online_payment,
      alt: 'solutions.functionalities.online_payment.title',
    },
    action: {
      label: 'solutions.functionalities.online_payment.action',
    },
  },
  {
    id: 7,
    title: 'solutions.functionalities.my_expenses.title',
    sub_title: 'solutions.functionalities.my_expenses.sub_title',
    paragraph: 'solutions.functionalities.my_expenses.paragraph',
    image: {
      src: my_expenses,
      alt: 'solutions.functionalities.my_expenses.title',
    },
    action: {
      label: 'solutions.functionalities.my_expenses.action',
    },
  },
  {
    id: 8,
    title: 'solutions.functionalities.recreationa_area.title',
    sub_title: 'solutions.functionalities.recreationa_area.sub_title',
    paragraph: 'solutions.functionalities.recreationa_area.paragraph',
    image: {
      src: recreationa_area,
      alt: 'solutions.functionalities.recreationa_area.title',
    },
    action: {
      label: 'solutions.functionalities.recreationa_area.action',
    },
  },
  {
    id: 9,
    title: 'solutions.functionalities.employee_control.title',
    sub_title: 'solutions.functionalities.employee_control.sub_title',
    paragraph: 'solutions.functionalities.employee_control.paragraph',
    image: {
      src: employee_control,
      alt: 'solutions.functionalities.employee_control.title',
    },
    action: {
      label: 'solutions.functionalities.employee_control.action',
    },
  },
  {
    id: 10,
    title: 'solutions.functionalities.orders.title',
    sub_title: 'solutions.functionalities.orders.sub_title',
    paragraph: 'solutions.functionalities.orders.paragraph',
    image: {
      src: orders,
      alt: 'solutions.functionalities.orders.title',
    },
    action: {
      label: 'solutions.functionalities.orders.action',
    },
  },
  {
    id: 11,
    title: 'solutions.functionalities.book_of_occurrences.title',
    sub_title: 'solutions.functionalities.book_of_occurrences.sub_title',
    paragraph: 'solutions.functionalities.book_of_occurrences.paragraph',
    image: {
      src: book_of_occurrences,
      alt: 'solutions.functionalities.book_of_occurrences.title',
    },
    action: {
      label: 'solutions.functionalities.book_of_occurrences.action',
    },
  },
  {
    id: 12,
    title: 'solutions.functionalities.activities.title',
    sub_title: 'solutions.functionalities.activities.sub_title',
    paragraph: 'solutions.functionalities.activities.paragraph',
    image: {
      src: activities,
      alt: 'solutions.functionalities.activities.title',
    },
    action: {
      label: 'solutions.functionalities.activities.action',
    },
  },
  {
    id: 13,
    title: 'solutions.functionalities.vehicle_registration.title',
    sub_title: 'solutions.functionalities.vehicle_registration.sub_title',
    paragraph: 'solutions.functionalities.vehicle_registration.paragraph',
    image: {
      src: vehicle_registration,
      alt: 'solutions.functionalities.vehicle_registration.title',
    },
    action: {
      label: 'solutions.functionalities.vehicle_registration.action',
    },
  },
  {
    id: 14,
    title: 'solutions.functionalities.pet_registration.title',
    sub_title: 'solutions.functionalities.pet_registration.sub_title',
    paragraph: 'solutions.functionalities.pet_registration.paragraph',
    image: {
      src: pet_registration,
      alt: 'solutions.functionalities.pet_registration.title',
    },
    action: {
      label: 'solutions.functionalities.pet_registration.action',
    },
  },
  {
    id: 15,
    title: 'solutions.functionalities.building_maintenance.title',
    sub_title: 'solutions.functionalities.building_maintenance.sub_title',
    paragraph: 'solutions.functionalities.building_maintenance.paragraph',
    image: {
      src: building_maintenance,
      alt: 'solutions.functionalities.building_maintenance.title',
    },
    action: {
      label: 'solutions.functionalities.building_maintenance.action',
    },
  },
  {
    id: 16,
    title: 'solutions.functionalities.resident_profile.title',
    sub_title: 'solutions.functionalities.resident_profile.sub_title',
    paragraph: 'solutions.functionalities.resident_profile.paragraph',
    image: {
      src: resident_profile,
      alt: 'solutions.functionalities.resident_profile.title',
    },
    action: {
      label: 'solutions.functionalities.resident_profile.action',
    },
  },
  {
    id: 17,
    title: 'solutions.functionalities.tasks.title',
    sub_title: 'solutions.functionalities.tasks.sub_title',
    paragraph: 'solutions.functionalities.tasks.paragraph',
    image: {
      src: tasks,
      alt: 'solutions.functionalities.tasks.title',
    },
    action: {
      label: 'solutions.functionalities.tasks.action',
    },
  },
  {
    id: 18,
    title: 'solutions.functionalities.timecard.title',
    sub_title: 'solutions.functionalities.timecard.sub_title',
    paragraph: 'solutions.functionalities.timecard.paragraph',
    image: {
      src: timecard,
      alt: 'solutions.functionalities.timecard.title',
    },
    action: {
      label: 'solutions.functionalities.timecard.action',
    },
  },
  {
    id: 19,
    title: 'solutions.functionalities.lost_and_found.title',
    sub_title: 'solutions.functionalities.lost_and_found.sub_title',
    paragraph: 'solutions.functionalities.lost_and_found.paragraph',
    image: {
      src: lost_and_found,
      alt: 'solutions.functionalities.lost_and_found.title',
    },
    action: {
      label: 'solutions.functionalities.lost_and_found.action',
    },
  },
];

export { links, screen, our_solutions, list_benefits, dataEmployees };
