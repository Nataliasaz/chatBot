import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Аналитика',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Статистика',
        link: '/admin/charts/echarts',
      },
      {
        title: 'Метрика',
        link: '/admin/charts/chartjs',
      },
      {
        title: 'Данные',
        link: '/admin/charts/d3',
      },
    ],
  },
  {
    title: 'Мероприятия',
    icon: 'grid-outline',
    link: '/admin/tables/tree-grid',
    // children: [
    //   {
    //     title: 'Smart Table',
    //     link: '/admin/tables/smart-table',
    //   },
    //   {
    //     title: 'Tree Grid',
    //     link: '/admin/tables/tree-grid',
    //   },
    // ],
  },
];
