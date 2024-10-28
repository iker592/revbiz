"use client"

import ModeToggle from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { UserProfile } from '@/components/user-profile'
import config from '@/config'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Banknote, Folder, HomeIcon, Settings, Star } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function DashboardTopNav({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Dialog>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <HamburgerMenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/projects">
                  <Button variant="outline" className="w-full">
                    <Folder className="mr-2 h-4 w-4" />
                    Projects
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/finance">
                  <Button variant="outline" className="w-full">
                    <Banknote className="mr-2 h-4 w-4" />
                    Finance
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/review-system">
                  <Button variant="outline" className="w-full">
                    <Star className="mr-2 h-4 w-4" />
                    Review System
                  </Button>
                </Link>
              </DialogClose>
              <Separator className="my-3" />
              <DialogClose asChild>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <div className="w-full flex-1">
          <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {config?.auth?.enabled && <UserProfile />}
        </div>
      </header>
      {children}
    </div>
  )
}
