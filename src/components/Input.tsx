import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';
export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div
            className=
            'flex items-center gap-3 py-4 px-3 h-12 rounded bg-transparent w-full focus-within:ring-2 ring-white-s-1 border-solid border-2 border-white-s+1'
        >
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='bg-transparent flex-1 text-white-s0 text-xs placeholder:text-gray-400 outline-none' 
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}