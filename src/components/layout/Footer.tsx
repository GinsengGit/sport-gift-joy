import { CreditCard, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { label: "Offrir une carte", href: "/offrir-carte", isRoute: true },
    { label: "Pros du sport", href: "/pros-du-sport", isRoute: true },
    { label: "Entreprises", href: "/b2b", isRoute: true },
    { label: "Mon espace", href: "/dashboard", isRoute: true },
  ],
  company: [
    { label: "À propos", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Presse", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "/faq", isRoute: true },
    { label: "Contact", href: "mailto:contact@kadosport.fr" },
    { label: "CGV", href: "#" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-secondary-foreground">
                Kadosport
              </span>
            </Link>
            <p className="text-secondary-foreground/70 mb-6 max-w-xs leading-relaxed">
              La première carte cadeau digitale universelle, dédiée au sport et aux activités sportives.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@kadosport.fr" className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                contact@kadosport.fr
              </a>
              <div className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4" />
                Paris, France
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4 text-secondary-foreground">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 text-secondary-foreground">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 text-secondary-foreground">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 text-secondary-foreground">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 Kadosport. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-secondary-foreground/50">Paiements sécurisés</span>
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 rounded bg-secondary-foreground/10 flex items-center justify-center text-xs font-bold text-secondary-foreground/50">
                VISA
              </div>
              <div className="w-10 h-6 rounded bg-secondary-foreground/10 flex items-center justify-center text-xs font-bold text-secondary-foreground/50">
                MC
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
