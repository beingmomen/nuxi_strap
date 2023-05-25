// import CredentialsProvider from 'next-auth/providers/credentials'
// import GithubProvider from 'next-auth/providers/github'
// import { NuxtAuthHandler } from '#auth'

// export default NuxtAuthHandler({
//   secret: 'my-superb-secret',  // <--- !!!! THIS IS WHAT'S MISSING

//   pages: {
//     signIn: '/login'
//   },
//   providers: [
//     // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//     // GithubProvider.default({
//     //   clientId: '4da6ed199d4da96b01e1',
//     //   clientSecret: '63faa16e0f02773e4741a2aaac1af84c0e84f7de'
//     // }),

//     // // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//     // CredentialsProvider.default({
//     //   name: 'Credentials',



//     //   authorize(credentials: any) {
//     //     console.warn('Credentials', credentials);
//     //     const user = { email: 'admin@admin.com', password: 'password' }
//     //     if (credentials?.email === user.email && credentials?.password === user.password) {
//     //       // Any object returned will be saved in `user` property of the JWT
//     //       return user
//     //     } else {
//     //       // eslint-disable-next-line no-console
//     //       console.error('Warning: Malicious login attempt registered, bad credentials provided')
//     //       // If you return null then an error will be displayed advising the user to check their details.
//     //       return null
//     //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//     //     }
//     //   }
//     // })
//     {
//       name: "local",
//       credentials: {
//         username: "your_username",
//         password: "your_password",
//       },
//     },
//   ]
// })
