import {Button} from './Button.tsx';
import {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
}

export default meta;
type Story = StoryObj<typeof Button>;


export const FirstButtonStory: Story = {
    args: {
        title: 'Button',
        disabled: false,
        onClick: () => {
        },
    }
}

export const UniversalButton = () => {

    return <Button title={'Button'} onClick={() => {
    }}></Button>
}