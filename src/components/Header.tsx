import { Logo } from '../assets/Logo';
import { ShoppingCart } from 'phosphor-react';
import { Text } from '../components/Text';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function Header() {
    return (
        <header className='w-full flex justify-between items-center max-lg:flex-col'>
            <div>
                <Logo />
            </div>
            <div className='flex gap-2'>
                <ShoppingCart className='h-6 w-6' />
                <Text>Olá,</Text>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Text className='text-secondary-s+1 cursor-pointer' asChild>
                            <a href="">Renan Breno</a>
                        </Text>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className='bg-white-s0 py-4 px-6 rounded-xl' sideOffset={5}>
                            <DropdownMenu.Item className="DropdownMenuItem" disabled>
                                <Text className='text-gray-p0 cursor-pointer' asChild>
                                    <a href="">Editar perfil</a>
                                </Text>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="DropdownMenuItem" disabled>
                                <Text className='text-gray-p0 cursor-pointer' asChild>
                                    <a href="">Sair</a>
                                </Text>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
        </header>
    )
}