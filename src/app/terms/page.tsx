import { SITE_CONFIG } from '@/lib/constants'

export const metadata = {
  title: 'Terms and Conditions',
}

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold">
        Terms and Conditions
      </h1>
      <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
        <p>
          <strong>Last updated:</strong>{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p>
          Please read these terms and conditions carefully before using Our
          Service.
        </p>

        <h2>1. Introduction</h2>
        <p>
          These Terms and Conditions written on this webpage shall manage your
          use of our website, {SITE_CONFIG.name} accessible at this website. These
          Terms will be applied fully and affect to your use of this Website. By
          using this Website, you agreed to accept all terms and conditions
          written in here. You must not use this Website if you disagree with any
          of these Website Standard Terms and Conditions.
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, {SITE_CONFIG.name}{' '}
          and/or its licensors own all the intellectual property rights and
          materials contained in this Website. You are granted limited license
          only for purposes of viewing the material contained on this Website.
        </p>

        <h2>3. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>publishing any Website material in any other media;</li>
          <li>
            selling, sublicensing and/or otherwise commercializing any Website
            material;
          </li>
          <li>publicly performing and/or showing any Website material;</li>
          <li>
            using this Website in any way that is or may be damaging to this
            Website;
          </li>
          <li>
            using this Website in any way that impacts user access to this
            Website;
          </li>
          <li>
            using this Website contrary to applicable laws and regulations, or in
            any way may cause harm to the Website, or to any person or business
            entity;
          </li>
          <li>
            engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this Website;
          </li>
          <li>
            using this Website to engage in any advertising or marketing.
          </li>
        </ul>

        <h2>4. Your Content</h2>
        <p>
          In these Website Standard Terms and Conditions, “Your Content” shall
          mean any audio, video text, images or other material you choose to
          display on this Website. By displaying Your Content, you grant{' '}
          {SITE_CONFIG.name} a non-exclusive, worldwide irrevocable, sub licensable
          license to use, reproduce, adapt, publish, translate and distribute it
          in any and all media.
        </p>

        <h2>5. No warranties</h2>
        <p>
          This Website is provided “as is,” with all faults, and{' '}
          {SITE_CONFIG.name} express no representations or warranties, of any kind
          related to this Website or the materials contained on this Website.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          In no event shall {SITE_CONFIG.name}, nor any of its officers, directors
          and employees, shall be held liable for anything arising out of or in
          any way connected with your use of this Website whether such liability
          is under contract. {SITE_CONFIG.name}, including its officers, directors
          and employees shall not be held liable for any indirect, consequential
          or special liability arising out of or in any way related to your use
          of this Website.
        </p>

        <h2>7. Governing Law & Jurisdiction</h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the
          laws of Uganda, and you submit to the non-exclusive jurisdiction of
          the state and federal courts located in Uganda for the resolution of
          any disputes.
        </p>
      </div>
    </div>
  )
}
