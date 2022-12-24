import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Header } from '../components/Header';
import { TextInput } from '../components/Input';
import { MagnifyingGlass } from 'phosphor-react';
import { ProductCard } from '../components/ProductCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { EmptyState } from '../components/EmptyState';
import { NoSearchResult } from '../assets/NoSearchResult';

interface Products {
    name: string;
    description: string;
    avaliation: number;
    avaliationAmount: number;
    inventory: number;
    price: number;
    productImg: string;
}

export function Catalog() {
    const [products, setProducts] = useState<Products[]>([]);
    const [search, setSearch] = useState('');
    const filteredProducts = products.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        axios.get("http://localhost:3000/product")
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='flex mt-8 justify-center w-screen h-screen'>
            <div className='w-full max-w-[90%]'>
                <Header />
                <section className='flex gap-3 mt-4'>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <MagnifyingGlass />
                        </TextInput.Icon>
                        <TextInput.Input placeholder='Busque por um produto' onChange={(e) => setSearch(e.target.value)} />
                    </TextInput.Root>
                    <Button.Root className='w-24'>
                        <Button.Icon>
                            <MagnifyingGlass />
                        </Button.Icon>
                    </Button.Root>
                </section>

                <Heading className='mt-4'>Produtos</Heading>
                <div className='flex max-lg:flex-col flex-wrap gap-6 mt-4 justify-around'>
                    {
                        search.length > 0 ?
                            filteredProducts.map((item, key) => (
                                <ProductCard
                                    key={key}
                                    name={item.name}
                                    description={item.description}
                                    avaliation={item.avaliation}
                                    avaliationAmount={item.avaliationAmount}
                                    inventory={item.inventory}
                                    price={item.price}
                                    productImg={item.productImg}
                                >
                                </ProductCard>
                            ))
                            :
                            products.map((item, key) => (
                                <ProductCard
                                    key={key}
                                    name={item.name}
                                    description={item.description}
                                    avaliation={item.avaliation}
                                    avaliationAmount={item.avaliationAmount}
                                    inventory={item.inventory}
                                    price={item.price}
                                    productImg={item.productImg}
                                >
                                </ProductCard>
                            ))
                    }
                    {products.length === 0 || filteredProducts.length === 0 && 
                    <EmptyState
                        textChildren='Sem produtos por aqui...'
                    >
                        <NoSearchResult />
                    </EmptyState>}
                </div>
            </div>
        </div>
    )
}