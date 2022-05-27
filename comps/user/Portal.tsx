import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from '@chakra-ui/react'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="Signout">
        <Button onClick={() => signOut()}> Logout </Button>
      </div>
    )
  }
  return (
    <div className="Signin">
      <Button onClick={() => signIn()}> Login </Button>
    </div>
  )
}
