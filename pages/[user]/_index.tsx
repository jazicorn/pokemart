import * as path from 'path';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse, InferGetServerSidePropsType, NextPage } from 'next'
import { Public, Private } from "../../lib/types/profiles/user"

// This page returns user profile
export async function getServerSideProps(context: {req: NextApiRequest, res: NextApiResponse}) {
  const { req } = context;
  const session = await getSession({ req });
  const user = await fetch('api/profile/[id]');

  if (session && user !== null) {

      return {
        props: user    
      };
  }

  // error if user not found
  
}

const Profile: NextPage = (props:InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const { user } = props;

    return (
        <h1>Protected Page</h1>
    )
}

export default Profile
