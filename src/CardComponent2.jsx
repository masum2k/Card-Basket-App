import { Card, Image, Text, CloseButton, Button, Group } from '@mantine/core';

function CardComponent2(props) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{props.name}</Text>
                <CloseButton id="closeId" onClick={props.onRemove} />

            </Group>

            <Text size="sm" c="dimmed">
                {props.name} with price {props.price}
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md" onClick={props.onAdd}>
                Add
            </Button>
        </Card>
    )

}

export default CardComponent2