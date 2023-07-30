import { AlanIcon } from '@/components/logos/alan';
import { ArcIcon } from '@/components/logos/arc';
import { CashAppIcon } from '@/components/logos/cash-app';
import { DescriptIcon } from '@/components/logos/descript';
import { LoomIcon } from '@/components/logos/loom';
import { MercuryIcon } from '@/components/logos/mercury';
import { OpenSeaIcon } from '@/components/logos/opensea';
import { PitchIcon } from '@/components/logos/pitch';
import { RampIcon } from '@/components/logos/ramp';
import { RaycastIcon } from '@/components/logos/raycast';
import { RetoolIcon } from '@/components/logos/retool';
import { VercelIcon } from '@/components/logos/vercel';
import { FC } from 'react';

export const Clients: FC = () => {
  return (
    <>
      <p className="mb-12 text-center text-lg text-white md:text-xl">
        <span className="text-primary-text">Powering the world’s best product teams.</span>
        <br className="hidden md:block" /> From next-gen startups to established enterprises.
      </p>
      <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
        <RampIcon />
        <LoomIcon className="hidden md:block" />
        <VercelIcon />
        <DescriptIcon className="hidden md:block" />
        <CashAppIcon />
        <RaycastIcon />
        <MercuryIcon />
        <RetoolIcon />
        <AlanIcon className="hidden md:block" />
        <ArcIcon className="hidden md:block" />
        <OpenSeaIcon className="hidden md:block" />
        <PitchIcon className="hidden md:block" />
      </div>
    </>
  );
};
