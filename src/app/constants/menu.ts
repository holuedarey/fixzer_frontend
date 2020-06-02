export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [{
  id: 'dashboards',
  icon: 'iconsminds-shop-4',
  label: 'menu.dashboards',
  to: '/app/dashboards',
  subs: [{
    icon: 'simple-icon-briefcase',
    label: 'Dashboard',
    to: '/app/dashboards/default'
  },
  {
    icon: 'simple-icon-pie-chart',
    label: 'Create Booking',
    to: '/app/dashboards/booking'
  }
  ]
},
{
  id: 'History',
  icon: 'iconsminds-digital-drawing',
  label: 'History',
  to: '/app/pages',
  subs: [{
    id: 'pages-authorization',
    label: 'menu.authorization',
    to: '/user',
    subs: [{
      icon: 'simple-icon-user-following',
      label: 'menu.login',
      to: '/user/login',
      newWindow: true
    },
    {
      icon: 'simple-icon-user-follow',
      label: 'menu.register',
      to: '/user/register',
      newWindow: true
    },
    {
      icon: 'simple-icon-user-unfollow',
      label: 'menu.forgot-password',
      to: '/user/forgot-password',
      newWindow: true
    },
    {
      icon: 'simple-icon-user-following',
      label: 'menu.reset-password',
      to: '/user/reset-password',
      newWindow: true
    }
    ]
  },
  {
    id: 'pages-product',
    label: 'menu.product',
    to: '/app/pages/product',
    subs: [{
      icon: 'simple-icon-credit-card',
      label: 'menu.data-list',
      to: '/app/pages/product/data-list'
    },
    {
      icon: 'simple-icon-list',
      label: 'menu.thumb-list',
      to: '/app/pages/product/thumb-list'
    },
    {
      icon: 'simple-icon-grid',
      label: 'menu.image-list',
      to: '/app/pages/product/image-list'
    },
    {
      icon: 'simple-icon-picture',
      label: 'menu.details',
      to: '/app/pages/product/details'
    },
    {
      icon: 'simple-icon-book-open',
      label: 'menu.details-alt',
      to: '/app/pages/product/details-alt'
    },
    ]
  },
  {
    id: 'pages-profile',
    label: 'menu.profile',
    to: '/app/pages/profile',
    subs: [{
      icon: 'simple-icon-share',
      label: 'menu.social',
      to: '/app/pages/profile/social'
    },
    {
      icon: 'simple-icon-link',
      label: 'menu.portfolio',
      to: '/app/pages/profile/portfolio'
    },

    ]
  },
  {
    id: 'pages-blog',
    label: 'menu.blog',
    to: '/app/pages/blog',
    subs: [{
      icon: 'simple-icon-share',
      label: 'menu.blog-list',
      to: '/app/pages/blog/blog-list'
    },
    {
      icon: 'simple-icon-link',
      label: 'menu.blog-detail',
      to: '/app/pages/blog/blog-detail'
    },

    ]
  },
  {
    id: 'pages-miscellaneous',
    label: 'menu.miscellaneous',
    to: '/app/pages/miscellaneous',
    subs: [{
      icon: 'simple-icon-question',
      label: 'menu.faq',
      to: '/app/pages/miscellaneous/faq'
    },
    {
      icon: 'simple-icon-graduation',
      label: 'menu.knowledge-base',
      to: '/app/pages/miscellaneous/knowledge-base'
    },

    {
      icon: 'simple-icon-diamond',
      label: 'menu.prices',
      to: '/app/pages/miscellaneous/prices'
    },
    {
      icon: 'simple-icon-magnifier',
      label: 'menu.search',
      to: '/app/pages/miscellaneous/search'
    },
    {
      icon: 'simple-icon-envelope-open',
      label: 'menu.mailing',
      to: '/app/pages/miscellaneous/mailing'
    },
    {
      icon: 'simple-icon-bag',
      label: 'menu.invoice',
      to: '/app/pages/miscellaneous/invoice'
    },

    {
      icon: 'simple-icon-exclamation',
      label: 'menu.error',
      to: '/error',
      newWindow: true
    }
    ]
  },
  ]
},
];
export default data;
