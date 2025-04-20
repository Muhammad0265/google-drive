
import { UserButton } from '@clerk/nextjs'
import { getUser } from "@/actions/auth-action"

const Page = async () => {
  const data = await getUser()
  console.log(data);
  return (
    <div>
      <UserButton />
    </div>
  )
}

export default Page