import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants'

export const metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold">
        Privacy Policy
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
          {SITE_CONFIG.name} ("us", "we", or "our") operates this website (the
          "Service"). This page informs you of our policies regarding the
          collection, use, and disclosure of personal data when you use our
          Service and the choices you have associated with that data.
        </p>

        <h2>1. Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <h4>Usage Data</h4>
        <p>
          We may also collect information on how the Service is accessed and used
          ("Usage Data"). This Usage Data may include information such as your
          computer's Internet Protocol address (e.g. IP address), browser type,
          browser version, the pages of our Service that you visit, the time and
          date of your visit, the time spent on those pages, unique device
          identifiers and other diagnostic data.
        </p>

        <h2>2. Use of Data</h2>
        <p>{SITE_CONFIG.name} uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer support</li>
          <li>
            To gather analysis or valuable information so that we can improve our
            Service
          </li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2>3. Data Transfer</h2>
        <p>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country or other governmental jurisdiction where the data protection
          laws may differ from those from your jurisdiction.
        </p>
        <p>
          If you are located outside Uganda and choose to provide information to
          us, please note that we transfer the data, including Personal Data, to
          Uganda and process it there.
        </p>

        <h2>4. Disclosure of Data</h2>
        <p>
          {SITE_CONFIG.name} may disclose your Personal Data in the good faith
          belief that such action is necessary to:
        </p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of {SITE_CONFIG.name}</li>
          <li>
            To prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            To protect the personal safety of users of the Service or the public
          </li>
          <li>To protect against legal liability</li>
        </ul>

        <h2>5. Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially
          acceptable means to protect your Personal Data, we cannot guarantee
          its absolute security.
        </p>

        <h2>6. Your Data Protection Rights</h2>
        <p>
          You have certain data protection rights. {SITE_CONFIG.name} aims to take
          reasonable steps to allow you to correct, amend, delete, or limit the
          use of your Personal Data.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 18 ("Children").
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Children has provided us with Personal Data, please
          contact us.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul>
          <li>
            By email:{' '}
            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
          </li>
          <li>
            By phone number:{' '}
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
              {CONTACT_INFO.phone}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
