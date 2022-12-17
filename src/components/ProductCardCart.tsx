import { ReactNode } from "react";
import { Text } from './Text';
import { Star, Trash } from 'phosphor-react';
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

export function ProductCardCart(props: ProductProps) {
    return (
        <div className="ring-2 ring-white-s0 rounded-3xl w-full max-lg:w-full">
            <div className="flex">
                <img className="max-lg:hidden" src={props.productImg} alt="" />
                <section className="flex flex-col ml-6 justify-center max-lg:mt-6 max-lg:mb-6">
                    <Heading>{props.name}</Heading>
                    <div className="flex items-center gap-1">
                        <div className="flex">
                            {new Array(props.avaliation).fill(null).map((item, key) =>
                                (<Star weight="fill" color="#ECBF1F" key={key} />))}
                        </div>
                        <Text className="text-white-s+1">{`(${props.avaliationAmount})`}</Text>
                    </div>

                    <div className="max-w-[350px]">
                        <Text>{props.description}</Text>
                    </div>

                </section>

                <section className="w-full flex flex-col items-end justify-around mr-6">
                    <Button.Root className="bg-complementar-c0 hover:bg-complementar-c+1 rounded-full w-[50px]">
                        <Button.Icon>
                            <Trash weight="bold"/>
                        </Button.Icon>
                    </Button.Root>

                    <Heading className="text-secondary-s+1 font-bold">{'R$ 10,00'}</Heading>
                </section>
            </div>
        </div>
    )
}