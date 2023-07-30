import { Container } from '@/components/container';
import { StarsIllustration } from '@/components/icons/stars';
import { Clients } from '@/components/sections/clients';
import { HomePageHero } from '@/components/sections/homepage-hero';
import { UnlikeAnyTool } from '@/components/sections/unlike-any-tool';
import classNames from 'classnames';

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomePageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          'mask-radial-faded pointer-events-none relative z-[-1] mx-auto my-[-12.8rem] h-[60rem] w-[min(1200px,100%)] overflow-hidden',
          '[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]',
          'after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background'
        )}
      >
        <StarsIllustration />
      </div>
      <Container>
        <UnlikeAnyTool />
      </Container>
    </>
  );
}
