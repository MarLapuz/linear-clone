import { Button, Highlight } from '@/components/button';
import { Hero, HeroSubtitle, HeroTitle } from '@/components/hero';
import { HeroImage } from '@/components/hero-image';
import { ChevronIcon } from '@/components/icons/chevron';
import { FC } from 'react';

export const HomePageHero: FC = () => {
  return (
    <Hero>
      <Button href="/" variant="secondary" size="small" className="translate-y-[-1rem] animate-fade-in opacity-0">
        Linear x Figma Plugin <Highlight>→</Highlight>
      </Button>
      <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Linear is a better way <br className="hidden md:block" /> to build products
      </HeroTitle>
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Meet the new standard for modern software development.
        <br className="hidden md:block" /> Streamline issues, sprints, and product roadmaps.
      </HeroSubtitle>
      <Button
        href="/"
        variant="primary"
        size="large"
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      >
        Get Started{' '}
        <Highlight>
          <ChevronIcon />
        </Highlight>
      </Button>

      <HeroImage />
    </Hero>
  );
};
