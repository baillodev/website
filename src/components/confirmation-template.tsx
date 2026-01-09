import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

export const ConfirmationTemplate = ({ name }: { name: string }) => (
  <Html>
    <Head />
    <Preview>Confirmation de réception - Baillo.dev</Preview>
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

          <Heading className="text-2xl font-bold mb-4">Merci pour votre message, {name} !</Heading>

          <Section className="mb-6">
            <Text className="text-base">
              Nous avons bien reçu votre message. Je vous répondrai dans les plus brefs délais.
            </Text>
          </Section>

          <Hr className="border-t border-gray-300 my-6" />

          <Text className="text-sm text-gray-500">
            Ce message est une confirmation automatique. Si vous n{"'"}avez pas envoyé de message via
            baillo.dev, vous pouvez ignorer ce mail.
          </Text>

          <Text className="text-sm text-gray-500 mt-5">
            — Mamadou Baillo Diallo<br />
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
