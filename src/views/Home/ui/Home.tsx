import { LicensePlateWidget } from '@/widgets/LicensePlate';
import { Container } from '@/shared/ui';
import { Header } from '@/widgets/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Container
        component={'main'}
        maxWidth='xl'
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LicensePlateWidget />
      </Container>
    </>
  );
}
