import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-blue-400 text-sm hover:text-blue-300 transition-colors mb-6 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">Politique de Confidentialité & Conditions</h1>
          <p className="text-slate-400 text-sm">Dernière mise à jour : mars 2026 · Anvela Inc.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14 text-slate-700 text-[15px] leading-relaxed">

        {/* Nav */}
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Politique de confidentialité', href: '#privacy' },
            { label: 'Conditions d\'utilisation', href: '#terms' },
            { label: 'Politique de cookies', href: '#cookies' },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="text-xs font-semibold uppercase tracking-widest text-blue-600 border border-blue-200 rounded-full px-4 py-1.5 hover:bg-blue-50 transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <section id="privacy" className="scroll-mt-8">
          <h2 className="text-2xl font-serif text-slate-900 mb-6 pb-3 border-b border-slate-100">Politique de Confidentialité</h2>
          <p className="mb-6 text-slate-500 text-sm italic">
            Conformément à la Loi 25 du Québec (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels).
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">1. Responsable de la protection des renseignements personnels</h3>
              <p>Anvela Inc. est responsable de la protection des renseignements personnels collectés via ce site. Pour toute question relative à la vie privée, vous pouvez nous contacter à :</p>
              <div className="mt-3 p-4 bg-slate-50 rounded-lg text-sm">
                <p><strong>Responsable :</strong> Pablo Fuentes</p>
                <p><strong>Email :</strong> pablo@anvela.ca</p>
                <p><strong>Téléphone :</strong> (438) 814-7578</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">2. Renseignements personnels collectés</h3>
              <p>Nous collectons les renseignements suivants lorsque vous remplissez nos formulaires :</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
                <li>Nom complet</li>
                <li>Adresse courriel</li>
                <li>Numéro de téléphone</li>
                <li>Nom et type d'entreprise</li>
                <li>Adresse de l'entreprise (via Google Places)</li>
                <li>Forfait sélectionné</li>
                <li>Messages et demandes soumises via le formulaire de contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">3. Finalités de la collecte</h3>
              <p>Ces renseignements sont collectés uniquement pour :</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
                <li>Vous contacter suite à votre demande de service</li>
                <li>Configurer et personnaliser votre réceptionniste IA</li>
                <li>Gérer la relation client et le support</li>
                <li>Vous envoyer des informations relatives à votre abonnement</li>
              </ul>
              <p className="mt-3">Nous ne vendons, ne louons et ne partageons pas vos renseignements à des tiers à des fins commerciales.</p>
            </div>



            <div>
              <h3 className="font-semibold text-slate-900 mb-2">4. Durée de conservation</h3>
              <p>Vos renseignements sont conservés aussi longtemps que nécessaire pour la prestation des services ou jusqu'à ce que vous demandiez leur suppression. En l'absence de relation commerciale active, les données sont supprimées après 24 mois.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">5. Vos droits</h3>
              <p>Conformément à la Loi 25, vous disposez des droits suivants :</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
                <li>Droit d'accès à vos renseignements personnels</li>
                <li>Droit de rectification en cas d'inexactitude</li>
                <li>Droit à la suppression de vos données</li>
                <li>Droit de retirer votre consentement en tout temps</li>
                <li>Droit à la portabilité de vos données</li>
              </ul>
              <p className="mt-3">Pour exercer ces droits, contactez-nous à <strong>pablo@anvela.ca</strong>. Nous répondrons dans un délai de 30 jours.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">6. Sécurité</h3>
              <p>Nous mettons en œuvre des mesures de sécurité raisonnables pour protéger vos renseignements contre l'accès non autorisé, la divulgation, l'altération ou la destruction. Toutes les communications sont chiffrées via HTTPS.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">7. Langue</h3>
              <p>Cette politique est rédigée en français conformément aux exigences de la Loi 25 du Québec. Une version en anglais est disponible sur demande à pablo@anvela.ca.</p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Terms */}
        <section id="terms" className="scroll-mt-8">
          <h2 className="text-2xl font-serif text-slate-900 mb-6 pb-3 border-b border-slate-100">Conditions d'Utilisation</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">1. Acceptation des conditions</h3>
              <p>En accédant à ce site et en utilisant nos services, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">2. Description des services</h3>
              <p>Anvela fournit des services de réceptionniste virtuelle alimentée par intelligence artificielle. Nos services incluent la gestion des appels entrants, la prise de rendez-vous et la qualification de leads, selon le forfait souscrit.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">3. Engagements contractuels</h3>
              <p>Les forfaits <strong>Night Shift</strong> et <strong>Co-Pilot</strong> requièrent un engagement minimum de 3 mois. Le forfait <strong>Anvela Signature</strong> requiert un engagement minimum de 6 mois. Aucun remboursement n'est accordé pour les mois entamés.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">4. Utilisation acceptable</h3>
              <p>Vous vous engagez à ne pas utiliser nos services à des fins illicites, trompeuses ou nuisibles. Anvela se réserve le droit de résilier tout contrat en cas de violation de cette disposition.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">5. Limitation de responsabilité</h3>
              <p>Anvela ne saurait être tenue responsable des pertes indirectes, consécutives ou spéciales résultant de l'utilisation ou de l'impossibilité d'utiliser nos services. Notre responsabilité totale est limitée aux montants effectivement payés pour le mois en cours.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">6. Modifications des conditions</h3>
              <p>Anvela se réserve le droit de modifier ces conditions à tout moment. Les clients actifs seront notifiés par courriel 30 jours avant toute modification substantielle.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">7. Droit applicable</h3>
              <p>Ces conditions sont régies par les lois de la province de Québec et du Canada. Tout litige sera soumis à la juridiction exclusive des tribunaux de Montréal, Québec.</p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Cookies */}
        <section id="cookies" className="scroll-mt-8">
          <h2 className="text-2xl font-serif text-slate-900 mb-6 pb-3 border-b border-slate-100">Politique de Cookies</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">1. Qu'est-ce qu'un cookie ?</h3>
              <p>Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Il permet de mémoriser certaines informations pour améliorer votre expérience.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">2. Cookies utilisés sur ce site</h3>
              <p>Ce site utilise uniquement des cookies techniques essentiels au bon fonctionnement :</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
                <li><strong>Préférences de langue</strong> — mémorise votre langue sélectionnée</li>
                <li><strong>Session de navigation</strong> — assure le bon fonctionnement du site</li>
              </ul>
              <p className="mt-3">Nous n'utilisons pas de cookies publicitaires, de suivi comportemental ou de profilage.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">3. Gestion des cookies</h3>
              <p>Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu'un cookie est envoyé. Notez que certaines fonctionnalités du site pourraient ne pas fonctionner correctement sans cookies.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm mb-4">Des questions ? Contactez-nous à <a href="mailto:pablo@anvela.ca" className="text-blue-600 hover:underline">pablo@anvela.ca</a></p>
          <Link to="/" className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
