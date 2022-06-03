import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="Signout">
        <button onClick={() => signOut()}> Logout </button>
      </div>
    )
  }
  return (
    <div className="Signin">
      <button onClick={() => signIn()}> Login </button>
    </div>
  )
}
