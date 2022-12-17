import { ReactNode } from "react";
import { Text } from './Text';
import { Star, ShoppingCart, CurrencyBtc } from 'phosphor-react';
import { Button } from "./Button";
import { Heading } from "./Heading";

interface ProductProps {
    name: string;
    description: string;
    avaliation: number;
    avaliationAmount: number;
    inventory: number;
    price: number;
    productImg: string;
    children?: ReactNode;
}

export function ProductCard({ name, description, avaliation, avaliationAmount, inventory, price, productImg }: ProductProps) {
    return (
        <div className="ring-2 ring-white-s0 rounded-3xl w-1/5 max-lg:w-full">
            <div className="flex flex-col gap-2">
                <img src={productImg} alt="" />
                <Heading className="ml-4" size="sm">{name}</Heading>
                <div className="flex items-center gap-1 ml-4">
                    <section className="flex items-center gap-2">
                        <div className="flex">
                            {new Array(avaliation).fill(null).map((item, key) =>
                                (<Star weight="fill" color="#ECBF1F" key={key} />))}
                        </div>
                        <div>
                            <Text>{avaliationAmount}</Text>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col w-full max-w-[90%] ml-4">
                    <Text>{description}</Text>
                    <Text className="text-white-s+1 mt-2" size="sm">Restam {inventory} unidades</Text>
                </div>
            </div>
            <div className="flex items-center justify-center mt-4 mb-4">
                <Button.Root className="w-44 rounded-3xl">
                    <Button.Icon>
                        <ShoppingCart />
                    </Button.Icon>
                    {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Button.Root>
            </div>
        </div>
    )
}