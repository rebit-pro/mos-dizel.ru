<template>
  <div class="md-page">
    <SiteHeader />
    <main>
      <HeroSection />
      <ProcessSteps />
      <SegmentsGrid />
      <FuelTable />
      <QualitySection />
      <FleetFacts />
      <DocsSection />
      <EquipmentGrid />
      <ReviewsSection />
      <FaqSection />
      <ContactsSection />
    </main>
    <SiteFooter />
    <MobilePanel />
  </div>
</template>

<script setup lang="ts">
/**
 * Главная W0 — дизайн-система v3 «цвет нефти» (docs/design/design-system.md).
 * Тексты и порядок блоков — docs/design/design-concept.md §5; контент — src/data/home.ts.
 */
import '@/scss/mos-dizel.scss';
import SiteHeader from '@/components/mos-dizel/SiteHeader.vue';
import HeroSection from '@/components/mos-dizel/HeroSection.vue';
import ProcessSteps from '@/components/mos-dizel/ProcessSteps.vue';
import SegmentsGrid from '@/components/mos-dizel/SegmentsGrid.vue';
import FuelTable from '@/components/mos-dizel/FuelTable.vue';
import QualitySection from '@/components/mos-dizel/QualitySection.vue';
import FleetFacts from '@/components/mos-dizel/FleetFacts.vue';
import DocsSection from '@/components/mos-dizel/DocsSection.vue';
import EquipmentGrid from '@/components/mos-dizel/EquipmentGrid.vue';
import ReviewsSection from '@/components/mos-dizel/ReviewsSection.vue';
import FaqSection from '@/components/mos-dizel/FaqSection.vue';
import ContactsSection from '@/components/mos-dizel/ContactsSection.vue';
import SiteFooter from '@/components/mos-dizel/SiteFooter.vue';
import MobilePanel from '@/components/mos-dizel/MobilePanel.vue';
import { faqItems } from '@/data/home';
import { pageByPath } from '@/seo/pages';
import { usePageSeo } from '@/seo/usePageSeo';

const homeDef = pageByPath('/');
if (homeDef) usePageSeo(homeDef, { faq: faqItems, localBusiness: true });
</script>
