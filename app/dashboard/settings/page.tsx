"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import config from '@/config';
import { useUser } from '@clerk/nextjs'

export default function Settings() {
  const user = useUser();

  return (
    <div className='flex justify-start items-center flex-wrap px-4 pt-5 gap-4'>
      <div className="flex flex-col gap-3 mb-[5rem] w-full max-w-[700px]">
        <div className='flex flex-col gap-3 w-full'>
          <Label>First Name</Label>
          <Input disabled defaultValue={user?.user?.firstName || ""} />
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <Label>Last Name</Label>
          <Input disabled defaultValue={user?.user?.lastName || ""} />
        </div>
        <div className='flex flex-col gap-3'>
          <Label>E-mail</Label>
          <Input disabled defaultValue={user?.user?.emailAddresses?.[0]?.emailAddress || ""} />
        </div>
      </div>
    </div>
  )
}
