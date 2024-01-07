import { LicensePlateWidget } from '@/widgets/LicensePlate';
import { Container } from '@/shared/ui';

export default function Home() {
  return (
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
  );
}
