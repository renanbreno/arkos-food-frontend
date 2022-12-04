import { Header } from '../components/Header';
import { ShoppingCartPrimary, ShoppingCartSecondary } from '../assets/ShoppingCart';
import { Logo } from '../assets/Logo';
import { Text } from '../components/Text';
import { TextInput } from '../components/Input';
import { Button } from '../components/Button';
import { Envelope, Lock, User } from 'phosphor-react';
import { FormEvent, useState } from 'react';

export function Signin() {
    const [isNewRegister, setIsNewRegister] = useState(false);

    function handleIsNewRegister(event: FormEvent) {
        event.preventDefault();
        setIsNewRegister(!isNewRegister);
    }

    return (
        <div className='flex h-screen w-screen'>
            <div className='flex justify-center items-center h-screen w-1/2 bg-white-s+1'>
                {isNewRegister ? <ShoppingCartSecondary /> : <ShoppingCartPrimary />}
            </div>
            <div className='flex justify-center items-center h-screen w-1/2 bg-white'>
                <form className='w-full max-w-[50%] flex justify-center items-center flex-col gap-4'>
                    <Logo />
                    {isNewRegister && <label className='w-full'>
                        <Text>Nome</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>
                            <TextInput.Input placeholder='Insira seu nome' />
                        </TextInput.Root>
                    </label>}
                    <label className='w-full'>
                        <Text>E-mail</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>
                            <TextInput.Input placeholder='Insira seu email' />
                        </TextInput.Root>
                    </label>
                    <label className='w-full'>
                        <Text>Senha</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>
                            <TextInput.Input placeholder='Insira sua senha' />
                        </TextInput.Root>
                    </label>
                    {isNewRegister && <label className='w-full'>
                        <Text>Confirmação de senha</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>
                            <TextInput.Input placeholder='Confirme sua senha' />
                        </TextInput.Root>
                    </label>}
                    <Button.Root className='mt-6'>
                        Entrar na plataforma
                    </Button.Root>

                    <footer>
                        <div className='flex gap-2'>
                            <Text>
                                {isNewRegister
                                    ? 'Já possui cadastro?'
                                    : 'Ainda não possui cadastro?'}
                            </Text>
                            <Text className='text-secondary-s+1' asChild>
                                <a href="" onClick={handleIsNewRegister}>
                                    {isNewRegister
                                        ? 'Login'
                                        : 'Cadastre-se'}
                                </a>
                            </Text>
                        </div>
                    </footer>
                </form>
            </div>
        </div>
    )
}