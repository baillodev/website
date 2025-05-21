import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Tailwind,
} from '@react-email/components';

interface EmailTemplateProps {
    name: string;
    message: string;
}

export const EmailTemplate = ({
    name,
    message,
}: EmailTemplateProps) => (
    <Html>
        <Head />
        <Preview>Nouveau message de {name} via le site de Baillo</Preview>
        <Tailwind>
            <Body className="bg-white font-sans text-[#111]">
                <Container className="mx-auto px-6 py-10 border border-gray-200 rounded-lg shadow-md">
                    <Img
                        src="https://baillo.dev/logo.png"
                        width={48}
                        height={48}
                        alt="BailloDev Logo"
                        className="mb-4"
                    />
                    <Heading className="text-3xl font-semibold mb-6 text-blue-600">
                        📬 Nouveau message reçu via baillo.dev
                    </Heading>


                    <Section className="mb-6">
                        <Text className="text-base">
                            <strong>De :</strong> {name}
                        </Text>
                        <Text className="text-base">
                            <strong>Message :</strong><br />
                            <span className="block italic text-gray-700 border-l-4 border-blue-200 pl-4 mt-2">
                                {message}
                            </span>
                        </Text>
                    </Section>

                    <Hr className="border-t border-gray-300 my-6" />

                    <Text className="text-sm text-gray-500 mt-4">
                        — Mamadou Baillo Diallo<br />
                        <Link href="https://baillo.dev" className="text-blue-500 underline">
                            baillo.dev
                        </Link>
                    </Text>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

EmailTemplate.PreviewProps = {
    name: "Jean Testeur",
    message: "Ceci est un message de test.",
} as EmailTemplateProps;

export default EmailTemplate;
