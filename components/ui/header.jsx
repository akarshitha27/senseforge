import { SignedIn, SignedOut , SignInButton, UserButton  } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, Sparkles } from 'lucide-react'
import { Button } from './button'
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from './dropdown-menu'
import { checkUser } from '@/lib/checkUser'


const Header = async() => {
    await checkUser();
    return(
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdropn-filter]:bg-background/60">
            <nav className="container mx-auto pl-0 pr-4 h-20 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href='/'>
                        <Image src = "/logo.jpg" alt="senseforge logo" width={200} height={150}
                        className = "h-20 py-1 w-auto object-contain" />
                    </Link>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <SignedIn>
                        <Link href={'/dashboard'}>
                        <Button variant="outline">
                            <LayoutDashboard className="h-4 w-4" />
                            <span className="hidden md:block">Industry Insights </span>
                        </Button>
                        </Link>


                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button>
                                <Sparkles className= "h-4 w-4" />
                                <span className="hidden md:block"> Growth tools </span>
                                <ChevronDown className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href={'/resume'} className="flex items-center gap-2">
                            <FileText className= "h-4 w-4" />
                            <span> Build Resume  </span>

                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/ai-cover-letter'} className="flex items-center gap-2">
                            <PenBox className= "h-4 w-4" />
                            Cover Letter


                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/interview'} className="flex items-center gap-2">
                            <GraduationCap className= "h-4 w-4" />
                                <span> Interview Prep  </span>

                            </Link>
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                        appearance={{
                            elements:{
                                avatarBox:"w-10 h-10",
                                userButtonPopoverCard:"shadow-xl",
                                userPreviewMainIdentifier:"font-semibold"
                            }
                        }}
                        afterSignOutUrl='/'
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header
