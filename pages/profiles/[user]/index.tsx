import { useRouter } from "next/router";
import type { NextPage } from 'next';
// import { useState, useEffect } from 'react'

// might need this for par if use getServerSideProp:
// {providers, csrfToken}:InferGetServerSidePropsType<typeof getServerSideProps>

// This page returns user profile
const Profile: NextPage = () => {
  // obtain user name from request
  const router = useRouter()
  const { user } = router.query

  // pass user name to obtain user profile ID from getUser
  // TODO can't use prisma on .tsx pages, have to call from api
  // use fetch to call from an api endpoint or create one 22/10/16
  // const res = await fetch(`/api/profile/${id}`);
  // const profile = res.json;

  // i think im going to change the code, dynamic to [id] instead of [name]
  // then mask the route as the username instead of profile number
  // god just gave me idea, create endpoint: api/profiles/[name]
  async function getUser(user) {
      const res = await fetch(`/api/profile/${user}`);
      const getUser = res.json;
      return getUser
  }

  // check user type
  async function getType(setType) {
    if(typeof setType === 'string'){
      const setTypeName = getUser(setType);
      return setTypeName;
    }
    return null;
  }

  // TODO: need to clean this mess up, I dont know what is doing what
  async function getProfile(setName) {
    // Append the ID as a parameter to the API endpoint.
    const user = getUser(setName)
    if (user == null) {
      return null
    }
    const id = getType(user);
    if(id == null) {
      return null
    }
    const res = await fetch(`/api/profile/${id}`);
    const profile = res.json;
    // return user object as prop to profile page function
    return profile
  }

  const setUser = getUser(user)
  const setType = getType(setUser)
  const setProfile = getProfile(setType)

  if (setProfile == null) {
    return <h1>No Profile</h1>
  }

  return (
      <h1>Profile</h1>
  )
}

export default Profile
