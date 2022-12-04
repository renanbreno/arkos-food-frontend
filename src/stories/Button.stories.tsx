import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonRootProps } from '../components/Button';
import { ShoppingCart } from 'phosphor-react';

export default {
    title: 'Components/Button',
    component: Button.Root,
    args: {
        children: [
            <Button.Icon>
                <ShoppingCart />
            </Button.Icon>,
                'R$ 500'
            
        ],
    },
    argTypes: {}
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {};
export const WithIcon: StoryObj<ButtonRootProps> = {};