// Assets
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
import { CardSolutionsProps } from 'models';

const dataSolutions: CardSolutionsProps['data'] = [
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
    video: [
      {
        lng: 'pt',
        src: '',
      },
      {
        lng: 'en',
        src: '',
      },
      {
        lng: 'es',
        src: '',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Votacao_Online.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Votacao_Online.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Votacion_en_Linea.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Chat.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Chat.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Chat.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Feed.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Feed.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Feed.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Portal_da_Transparencia.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Transparency_Portal.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Portal_da_Transparencia.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Sistema_de_pagamento_Online.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Online_Payment_System.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Sistema_de_pago_en_linea.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Minhas_despesas.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_My_expenses.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Mis_gastos.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_Area_de_Lazer_PT.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Area_de_Area.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Areas_de_Ocio.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Controle_de_Funcionarios.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Employee_control.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Control_de_empleados.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Encomendas.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Orders.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Envios.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Livro_de_Ocorrencia.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Occurrence_Book.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Libro_de_Incidencia.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Reserva_de_Atividades.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Activity_Booking.mp4',
      },
      {
        lng: 'es',
        src: '',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Cadastro_de_veiculos.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Vehicle_registration.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Registro_de_vehiculos.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Cadastro_de_Pets.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Pet_registration.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Registro_de_mascotas.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: '',
      },
      {
        lng: 'en',
        src: '',
      },
      {
        lng: 'es',
        src: '',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: '',
      },
      {
        lng: 'en',
        src: '',
      },
      {
        lng: 'es',
        src: '',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Tarefas.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Tasks.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Tareas.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Cartao_de_Ponto.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Timecard.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Tarrieta_de_Tiempo.mp4',
      },
    ],
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
    video: [
      {
        lng: 'pt',
        src: 'https://storage.googleapis.com/waiuru-site-assets/pt/Funcionalidade_PT_Achados_e_Perdidos.mp4',
      },
      {
        lng: 'en',
        src: 'https://storage.googleapis.com/waiuru-site-assets/en/Funcionalidade_ENG_Lost_and_Found.mp4',
      },
      {
        lng: 'es',
        src: 'https://storage.googleapis.com/waiuru-site-assets/es/Funcionalidade_ESP_Objetos_Perdidos.mp4',
      },
    ],
  },
];

export { dataSolutions };
