import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNavigation({ items }: BreadcrumbNavigationProps) {
  return (
    <nav className="bg-cream border-b-2 border-forest-green/20 py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 flex-wrap text-sm">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight size={16} className="text-forest-green/50" />}
              {item.href ? (
                <Link href={item.href}>
                  <a className="text-forest-green hover:text-forest-green/70 font-semibold transition-colors">
                    {item.label}
                  </a>
                </Link>
              ) : (
                <span className="text-charcoal font-semibold">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
