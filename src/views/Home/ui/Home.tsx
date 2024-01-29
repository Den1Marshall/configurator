import { LicensePlateWidget } from '@/widgets/LicensePlate';
import { Container } from '@/shared/ui';
import { Header } from '@/widgets/Header';
import { MobileHeader } from '@/widgets/MobileHeader';
import { headers } from 'next/headers';
import { ApproximateCost } from '@/entities/ApproximateCost';

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  let isMobile = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <Container
        fixed
        component={'main'}
        maxWidth='xl'
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LicensePlateWidget />
        <ApproximateCost mobile={isMobile ? true : false} />
      </Container>
    </>
  );
}
