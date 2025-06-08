// client/src/pages/Publications.jsx
import React from 'react';
import './Page.css';

export default function Publications() {
  const pubs = [
    {
      title:
        'Experimental & Analytical Study on Effect of Emotional Literacy Programme Through Emotional Awareness on Social Skill Development of Primary Grade Children (3rd & 4th Standard) Students',
      authors: 'Shrivastav, D., & Jaywant, S.',
      journal: 'Indian Journal of Scientific Research, XI(III)',
      year: '2022',
      link: 'https://doi.org/10.36106/ijsr/9001658',
    },
    {
      title:
        'Effect of kangaroo mother care on the weight gain of the low birth weight preterm infants',
      authors:
        'Jaywant, S., Chavan, B., Mulye, M., & Sakpal, S.',
      journal: 'International Journal of Applied Research, 7(5), 393–397',
      year: '2021',
      link:
        'https://doi.org/10.22271/allresearch.2021.v7.i5f.8611',
    },
    {
      title:
        'Effect of Quality of Sleep and Level of Fatigue on the Breastfeeding Efficacy in Postpartum Lactating Mothers – Cross-Sectional Study',
      authors: 'Jaywant, S., Giri, D., & Patil, S.',
      journal: 'Indian Journal of Applied Research, 11(05), 64–66',
      year: '2021',
      link: 'https://doi.org/10.36106/ijar/8909580',
    },
    {
      title:
        'The Effect of Pre-Feeding Protocol with and Without Tactile and Kinaesthetic Stimulation on Oral Motor Ability & Physiological Stability in Preterm Infants',
      authors: 'Jaywant, S., & Kale, J.',
      journal:
        'International Journal of Health Sciences and Research, 11(January), 38–47',
      year: '2021',
      link:
        'https://www.ijhsr.org/IJHSR_Vol.11_Issue.1_Jan2021/IJHSR05.pdf',
    },
    {
      title:
        'Effect of COVID-19 Lockdown on Play in Children aged 6-12 years: A Survey',
      authors: 'Awasthi, D., & Jaywant, S.',
      journal: 'Global Journal for Research Analysis, 10(07), 39–42',
      year: '2021',
      link: 'https://doi.org/10.36106/gjra',
    },
    {
      title:
        'The Effect of Covid-19 Lockdown on Behaviour in Children Aged 6-12 Years: a Survey',
      authors: 'Awasthi, D., & Jaywant, S.',
      journal: 'Indian Journal of Applied Research, 11(10), 1–6',
      year: '2021',
      link: 'https://doi.org/10.36106/ijar/3003151',
    },
    {
      title:
        'Comparative Study to Assess the Effect of Ladder Approach Versus Kangaroo Mother Care on Neurodevelopmental Status in Small for Gestational Age Preterm Infants',
      authors: 'Chavan, B., & Jaywant, S.',
      journal: 'International Journal of Scientific Research, 10(09), 61–64',
      year: '2021',
      link: 'https://doi.org/10.36106/ijsr',
    },
    {
      title:
        'Use of Modified Cook-up Splint in Patient with Boxer’s Fracture & Early Functional Recovery—a Case Study',
      authors: 'Chavan, B., & Jaywant, S.',
      journal: 'Global Journal for Research Analysis, 10(05), 72–73',
      year: '2021',
      link: 'https://doi.org/10.36106/gjra',
    },
    {
      title:
        'Effect of Savasana as an Adjunct To Conventional Sensory Integration Therapy on Anxiety Level of Children With Attention Deficit Hyperactivity Disorder',
      authors: 'Mehta, P., & Jaywant, S.',
      journal: 'International Journal of Scientific Research, 10(08), 12–14',
      year: '2021',
      link: 'https://doi.org/10.36106/ijsr',
    },
    {
      title:
        'Occupational Therapy Intervention Using ICF Framework in Child with Radio-Ulnar Synostosis—a Case Study',
      authors: 'Mulye, M., & Jaywant, S.',
      journal: 'International Journal of Scientific Research, 10(05), 64–66',
      year: '2021',
      link: '',
    },
    {
      title:
        'Awareness of the Role of Occupational Therapy in the Neonatal Intensive Care Units Among Occupational Therapists—a Survey',
      authors: 'Paithankar, A., & Jaywant, S.',
      journal: 'Indian Journal of Applied Research, 11(06), 62–65',
      year: '2021',
      link: 'https://doi.org/10.36106/ijar/3205559',
    },
    {
      title:
        'A Systematic Review of Neonatal Neurobehavioral Assessment Scales and their Feasibility in NICU',
      authors: 'Jaywant, S., Awasthi, D., & Kale, J.',
      journal:
        'International Journal of Multidisciplinary Educational Research, 9(11(4)), 58–74',
      year: '2020',
      link: '',
    },
    {
      title:
        'Premature Infant Oral Motor Intervention (PIOMI) With and Without Massage Therapy on Social Emotional Development in Preterm Infants',
      authors: 'Jaywant, S., Dandavate, P., & Kale, J.',
      journal: 'Indian Journal of Occupational Therapy, 52, 95–100',
      year: '2020',
      link: 'https://doi.org/10.4103/ijoth.ijoth_13_20',
    },
    {
      title:
        'Comparative study on the effect of oral motor intervention protocols on oral motor skills of preterm infants from tertiary care hospital in metropolitan city: pilot study',
      authors: 'Jaywant, S., & Kale, J.',
      journal:
        'International Journal of Contemporary Pediatrics, 7(7), 1506',
      year: '2020',
      link: 'https://doi.org/10.18203/2349-3291.ijcp20202606',
    },
    {
      title:
        'A Systematic Review: Covid-19 Guidelines for Occupational Therapy & Further Recommendations for Renewing Guidelines',
      authors: 'Jaywant, S., Pai, A., & Awasthi, D.',
      journal:
        'Indian Journal of Medical Research and Pharmaceutical Sciences, 7(12), 6–29',
      year: '2020',
      link: 'https://doi.org/10.29121/ijmrps.v7.i12.2020.2',
    },
    {
      title:
        'To Analyze the Effect of Person-Environment-Occupation Intervention Model on Stress and Breast-Feeding Efficacy on Mothers of Preterm Neonates: A Randomized Controlled Study',
      authors: 'Jaywant, S., Patil, S., & Shrivastav, D.',
      journal: 'Indian Journal of Occupational Therapy, 52, 24–29',
      year: '2020',
      link: 'https://doi.org/10.4103/ijoth.ijoth_1_20',
    },
    {
      title:
        'The Effect of Comprehensive Approach in Improving Activity Participation in a Girl With General Anxiety Disorder (GAD) & Sensory Processing Disorder (SPD)—A Case Study',
      authors: 'Jaywant, S., Shrivastav, D., & Sawant, P.',
      journal:
        'International Journal of Multidisciplinary Educational Research, 9(12(7)), 114–120',
      year: '2020',
      link: '',
    },
    {
      title:
        'The effect of ladder approach on development of preterm low birth weight infants with HIE-2',
      authors: 'Jadhav, T., & Jaywant, S.',
      journal: 'International Journal of Contemporary Pediatrics, 7(3), 520',
      year: '2020',
      link: 'https://doi.org/10.18203/2349-3291.ijcp20200674',
    },
    {
      title:
        'Evaluating the Efficacy of Context-focused Intervention in Improving Performance of Functional Tasks in Preschool Children with Central Nervous System Dysfunction',
      authors: 'Paithankar, A., & Jaywant, S.',
      journal:
        'International Journal of Contemporary Pediatrics, 5(4), 1286–1293',
      year: '2018',
      link: 'https://doi.org/10.18203/2349-3291.ijcp20182421',
    },
    {
      title:
        'Effects of Specially Designed Early Self-Mobility Chair on Functional Independence In a Child with Myelomeningocele',
      authors: 'Bongade, S., & Jaywant, S.',
      journal: 'Indian Journal of Occupational Therapy, 50, 139–144',
      year: '2018',
      link: 'https://doi.org/10.4103/ijoth.IJOTH_15_18',
    },
    {
      title:
        'Correlation between Academic Performance and Visual Motor Integration Skills in Children with Learning Disabilities',
      authors: 'Bongade, S., & Jaywant, S.',
      journal: 'Indian Journal of Occupational Therapy, 49(4), 123–127',
      year: '2017',
      link: '',
    },
    {
      title:
        'To Study The Efficacy of “Cognitive Orientation To Occupational Performance” In Children with Handwriting Difficulties',
      authors: 'Daftary, R., & Jaywant, S.',
      journal:
        'Indian Journal of Occupational Therapy, 47(3), 89–96',
      year: '2015',
      link:
        'http://search.ebscohost.com/login.aspx?direct=true&AuthType=sso&db=ccm&AN=112512368&site=ehost-live&custid=s3890005',
    },
    {
      title:
        'To Study the Effectiveness of a Scapular Stabilizer Brace on Shoulder Functions of a Child with the Brachial Plexus Injury',
      authors: 'Daftary, R., & Jaywant, S.',
      journal: 'Indian Journal of Occupational Therapy, 44(3), 3–10',
      year: '2012',
      link:
        'https://search.ebscohost.com/login.aspx?direct=true&db=asn&AN=103039046&site=ehost-live&scope=site',
    },
  ];

  return (
    <section className="about-page publications-page">
      {/* Hero Banner */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Publications</h1>
          <p>Our peer-reviewed articles, case studies, and systematic reviews.</p>
        </div>
      </div>

      {/* Publications Row */}
      <div className="pub-grid">
        {pubs.map((p, i) => (
          <div key={i} className="pub-card">
            <h3>
              <span className="pub-index">{i + 1}.</span> {p.title}
            </h3>
            <p className="pub-meta">
              <strong>{p.authors}</strong> — <em>{p.journal}</em> ({p.year})
            </p>
            {p.link && (
              <a
                href={p.link}
                className="pub-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
