import CTA from '@/components/CTA';
import { pageMetadata } from '@/lib/metadata';
import { restorationVertical as v } from '@/data/verticals/restoration';
import {
  MarketingHero,
  MarketingIntro,
  StormSection,
  PillarGrid,
  ResultsSection,
} from '@/components/marketing/MarketingSections';

export const metadata = pageMetadata(v.meta);

export default function Marketing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(v.jsonLd) }} />

      <MarketingHero {...v.hero} />
      <MarketingIntro {...v.intro} />
      <StormSection {...v.storm} />
      <PillarGrid pillars={v.pillars} />
      <ResultsSection {...v.results} whoThisIsFor={v.whoThisIsFor} />
      <CTA {...v.cta} />
    </>
  );
}
