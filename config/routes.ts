export default [
  {
    exact: true, //严格匹配
    path: '/',
    component: 'index',
  },
  {
    exact: true, //严格匹配
    path: '/users/:name',
    component: '../pages/users/$name.tsx',
  },
];
