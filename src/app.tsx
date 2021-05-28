// let isSubApp = false;
// export function modifyClientRenderOpts(memo: any) {
//   return {
//     ...memo,
//     rootElement: isSubApp ? 'sub-root' : memo.rootElement,
//   };
// }
// import { getUserPerm } from '@/services/menu';
// import router from 'umi/router';
// let authRoutes = [];
// export const dva = {
//   config: {
//     onError(err) {
//       err.preventDefault();
//       console.error(err.message);
//     },
//   },
// };

// function filterRoute(routes,authRoute) {
//   const arr = [];
//   authRoute.forEach(item => {
//     routes.forEach(route => {
//       if (route.path === item.path) {
//         let obj = {};
//         if (route.routes && item.routes) {
//           obj = route;
//           obj.routes = (filterRoute(route.routes,item.routes));
//           arr.push(obj);
//         } else {
//           obj = route;
//           arr.push(obj);
//         }
//       }
//     })
//   })
//   return arr;
// }
// export function patchRoutes(routes) {
//  routes[1].routes = filterRoute(routes[1].routes,authRoutes)
//   window.g_routes = routes;
// }
// export async function  render(oldRender) {
//   const authRoutesResult = await getUserPerm();
//   window.oldRender = () => {
//     if (authRoutesResult && authRoutesResult.code === 0) {
//       authRoutes = authRoutesResult.data;
//     } else {
//       oldRender();
//     }
//     oldRender();
//   }
//   if (window.oldRender) {
//     window.oldRender();
//   }
// }
