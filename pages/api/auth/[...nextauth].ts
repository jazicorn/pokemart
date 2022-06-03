import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import CredentialsProvider from "next-auth/providers/credentials"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

import { compare } from "bcryptjs"

const prisma = new PrismaClient()

// nextauth-prisma adapter
// https://next-auth.js.org/adapters/prisma

// add auth pages
// https://next-auth.js.org/configuration/pages

// nextjs-nextauth example
// https://github.com/nextauthjs/next-auth-example

// nextjs-middleware for security
// https://docs-git-misc-docs-nextauthjs.vercel.app/configuration/nextjs#middleware

// example of implementing session & jwt
// https://hasura.io/blog/next-js-jwt-authentication-with-next-auth-and-integration-with-hasura/
// another one
// https://dev.to/mabaranowski/nextjs-authentication-jwt-refresh-token-rotation-with-nextauthjs-5696
// another
// https://strapi.io/blog/user-authentication-in-next-js-with-strapi


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email:    {   label: "Email",     type: "text",     placeholder: "jsmith@example.com" },
        password: {   label: "Password",  type: "password" }
      },
      async authorize(credentials, req) {
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
        const url = process.env.NEXTAUTH_URL;
        const res  = await fetch(url + '/auth/signin', {
          method: 'Post',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json'},
        });

        const email = credentials?.email;
        const password = credentials?.password;
        // '?' called conditional ternary operator
        // if password response is 'undefined' or is response is empty string
        const isNull = credentials?.password ? undefined : password?.length === 0;
        // get user from database
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if(isNull) {
          throw new Error('Please enter email');
        }
        if(!user) {
          throw new Error('Email not found');
        }
        if(res.ok && user) {
          return signInUser({password, user})
        }
      }
    }),
    /* EmailProvider({
      // uses Sendgrid
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTO_USER,
          pass: process.env.SMTP_PASSWORD
        },
      },
      from: process.env.SMTP_FROM,
    }), */
    GoogleProvider({
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: {
    //     appleId: process.env.APPLE_ID,
    //     teamId: process.env.APPLE_TEAM_ID,
    //     privateKey: process.env.APPLE_PRIVATE_KEY,
    //     keyId: process.env.APPLE_KEY_ID,
    //   },
    // }),
    // Auth0Provider({
    //  clientId: process.env.AUTH0_ID,
    //  clientSecret: process.env.AUTH0_SECRET,
    //  // @ts-ignore
    //  domain: process.env.AUTH0_DOMAIN,
    // }),
    // FacebookProvider({
    //  clientId: process.env.FACEBOOK_ID,
    //  clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GithubProvider({
    //  clientId: process.env.GITHUB_ID,
    //  clientSecret: process.env.GITHUB_SECRET,
    //  // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
    //  // @ts-ignore
    //  scope: "read:user",
    // }),
    // TwitterProvider({
    //  clientId: process.env.TWITTER_ID,
    //  clientSecret: process.env.TWITTER_SECRET,
    // }),
    
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  //database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  // secret: process.env.SECRET,
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: 'jwt'

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.NEXTAUTH_SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {
    //  
    // },
    // decode: async ({ secret, token, maxAge }) => {
    //  
    // },
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
      signIn: '/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },
    // async session(session, user) { return session },
    // async jwt(token, user, account, profile, isNewUser) { return token }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // You can set the theme to 'light', 'dark' or use 'auto' to default to the
  // whatever prefers-color-scheme is set to in the browser. Default is 'auto'
  theme: {
    colorScheme: 'auto',
  } 

})

// @ts-ignore
const signInUser = async ({password, user}) => {
  if(!user.password) {
    throw new Error("Incorrect password")
  }
  const isMatch = await compare(password, user);
  if(!isMatch) {
    throw new Error("Incorrect email or password")
  }
  
  return user
}

/* TODO: write attempts module 
const attempts = async ({}) => {

}
*/
