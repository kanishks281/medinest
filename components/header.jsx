import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href='/'>
                    <Image
                        src="/logo-single.png"
                        alt="Medimeet Logo"
                        width={200}
                        height={60}
                        className="h-10 w-auto object-contain"
                    />
                </Link>
                <div className='flex items-center space-x-2'>
                    <SignedOut>
                        <SignInButton >
                            <button variant='secondary'>
                                Sign In
                            </button>
                        </SignInButton>
                        
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header