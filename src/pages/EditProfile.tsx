import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { TextInput } from "../components/Input";
import { Envelope, Lock, User } from 'phosphor-react';
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function EditProfile() {
    return (
        <div className='flex mt-8 justify-center w-screen h-screen'>
            <div className='w-full max-w-[90%] flex flex-col items-center'>
                <Header />
                <div className="flex gap-2 mt-6">
                    <Link to='/catalogo'>
                        <Text className="text-helpers-error" asChild>
                            <a href="">Página inicial</a>
                        </Text>
                    </Link>
                    <Text className="text-secondary-s-1"> {">"} </Text>
                    <Link to='/edicao-perfil'>
                        <Text asChild>
                            <a href="">Editar perfil</a>
                        </Text>
                    </Link>
                    
                </div>

                <form className="flex flex-col gap-4 w-full max-w-[40%] max-lg:max-w-full max:lg justify-center items-center mt-6">
                    <label className='w-full'>
                        <Text>Nome completo</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <User />
                            </TextInput.Icon>
                            <TextInput.Input name='name' placeholder='Insira seu nome' />
                        </TextInput.Root>
                    </label>
                    <label className='w-full'>
                        <Text>E-mail atual</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>
                            <TextInput.Input name='email' placeholder='Insira seu e-mail' />
                        </TextInput.Root>
                    </label>
                    <label className='w-full'>
                        <Text>Novo e-mail</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>
                            <TextInput.Input name='newEmail' placeholder='Insira seu novo e-mail' />
                        </TextInput.Root>
                    </label>
                    <label className='w-full'>
                        <Text>Senha atual</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Lock />
                            </TextInput.Icon>
                            <TextInput.Input name='password' placeholder='Insira sua senha' />
                        </TextInput.Root>
                    </label>
                    <label className='w-full'>
                        <Text>Nova senha</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Lock />
                            </TextInput.Icon>
                            <TextInput.Input name='newPassword' placeholder='Insira sua nova senha' />
                        </TextInput.Root>
                    </label>

                    <Button.Root>
                        Alterar dados
                    </Button.Root>
                </form>

            </div>
        </div>
    )
}