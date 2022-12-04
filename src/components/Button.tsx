import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

function ButtonRoot({ children, asChild, className, ...props } : ButtonRootProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp
        className={clsx('flex justify-center items-center gap-2 py-3 px-4 bg-secondary-s+1 rounded text-white-s-1 text-sm w-full transition-colors hover:bg-secondary-s0 focus:ring-2 ring-white', className)}
        {...props}
    >
        {children} 
    </Comp>
    )
}

export interface ButtonIconProps {
    children: ReactNode;
}

function ButtonIcon({ children } : ButtonIconProps) {
    return (
        <Slot className='w-6 h-6 text-white-s-1'>
            {children}
        </Slot>
    )
}

export const Button = {
    Root: ButtonRoot,
    Icon: ButtonIcon
}