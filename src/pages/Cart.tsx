import { Header } from "../components/Header";
import { ProductCardCart } from "../components/ProductCardCart";
import { Text } from "../components/Text";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";

export function Cart() {
    return (
        <div className='flex mt-8 justify-center w-screen h-screen'>
            <div className="w-full max-w-[90%]">
                <Header />
                <div className="flex gap-2 mt-6">

                    <Text className="text-helpers-error" asChild>
                        <a href="">Página inicial</a>
                    </Text>
                    <Text className="text-secondary-s-1"> {">"} </Text>
                    <Text asChild>
                        <a href="">Carrinho</a>
                    </Text>
                </div>

                <div className="flex flex-col w-full mt-6">
                    <ProductCardCart
                        key={1}
                        name={"bibao"}
                        description={"Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud exercício ullamco labori."}
                        avaliation={4}
                        avaliationAmount={100}
                        inventory={10}
                        price={1.33}
                        productImg={"https://s3.amazonaws.com/renan.tech/pepsi.png"}
                    >
                    </ProductCardCart>
                </div>

                <div className="flex flex-col gap-4 mt-6 items-end max-lg:items-center">
                    <section className="flex gap-4">
                        <Heading className="font-bold">Total</Heading>
                        <Heading className="text-secondary-s+1 font-bold">R$ 10,00</Heading>
                    </section>
                    <section>
                        <Button.Root>
                            Finalizar compra
                        </Button.Root>
                    </section>
                </div>
            </div>
        </div>
    )
}