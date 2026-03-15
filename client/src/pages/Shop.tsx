import { ShoppingCart, Heart, Share2, ExternalLink, Mail } from 'lucide-react';

/**
 * SHOP PAGE - Merchandise for Indigenous Justice Advocacy
 * All designs are 100% royalty-free and copyright-free
 * Profits support legal action and systemic accountability
 */

const merchandise = [
  {
    id: 1,
    name: 'Dreamcatcher Logo (Vector)',
    category: 'Digital Asset',
    price: 'Free Download',
    description: 'Professional dreamcatcher logo with orange ring and blood stains. Perfect for custom printing, social media, or personal use. 100% copyright-free.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-dreamcatcher-logo-FfaBNi4dUp8ZbWRLHiKzmW.webp',
    downloadLink: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-dreamcatcher-logo-ZEfq5HjZMqCqPWCGoqRumC.png',
    features: ['High resolution (2048x2048px)', 'Transparent background', 'Print-ready', 'Fully editable'],
  },
  {
    id: 2,
    name: 'Black T-Shirt',
    category: 'Apparel',
    price: '$25',
    cost: '$8',
    profit: '$17',
    description: '"SUNDAY BLOODY SUNDAY" with dreamcatcher logo and Indigenous geometric sleeve patterns. Premium quality, comfortable fit.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-tshirt-black-YpLxkZcoHM9asn3b2AbwCd.webp',
    printfulLink: 'https://printful.com',
    features: ['100% cotton', 'Unisex sizing', 'Comfortable fit', 'Durable print'],
  },
  {
    id: 3,
    name: 'Orange T-Shirt',
    category: 'Apparel',
    price: '$25',
    cost: '$8',
    profit: '$17',
    description: 'Burnt orange with bold "SUNDAY BLOODY SUNDAY" and "SYSTEMIC VIOLENCE STOPS HERE" messaging. Eye-catching and powerful.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-tshirt-orange-8WRG45LS4hW7T48hibF3QC.webp',
    printfulLink: 'https://printful.com',
    features: ['100% cotton', 'Bold colors', 'Statement piece', 'Durable print'],
  },
  {
    id: 4,
    name: 'Charcoal Hoodie',
    category: 'Apparel',
    price: '$45',
    cost: '$15',
    profit: '$30',
    description: 'Front: Dreamcatcher with "SUNDAY BLOODY SUNDAY". Back: Large dreamcatcher with "INDIGENOUS JUSTICE ADVOCACY - ACCOUNTABILITY DEMANDED". Perfect for cold weather advocacy.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-hoodie-charcoal-MJEH6Nb7AHoGKCRsg2Ux9T.webp',
    printfulLink: 'https://printful.com',
    features: ['Premium fleece', 'Front & back design', 'Drawstring hood', 'Kangaroo pocket'],
  },
  {
    id: 5,
    name: 'Sticker Collection (7-Pack)',
    category: 'Digital/Physical',
    price: '$5',
    cost: '$1',
    profit: '$4',
    description: '7 unique sticker designs: Full dreamcatcher, simplified icon, "JUSTICE" text, "SUNDAY BLOODY SUNDAY" circle, blood drops, advocacy badge, and more. Perfect for social media sharing or printing.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-sticker-collection-ZPm32hwGttniyhseAiPSmk.webp',
    printfulLink: 'https://printful.com',
    features: ['7 designs', 'Transparent backgrounds', 'Print-ready', 'Social media ready'],
  },
  {
    id: 6,
    name: 'Justice Poster',
    category: 'Print',
    price: '$12',
    cost: '$3',
    profit: '$9',
    description: '"SUNDAY BLOODY SUNDAY - JUSTICE FOR BARRAN". Bold headline with dreamcatcher. "Indigenous Children Deserve Protection" / "Systemic Violence Stops Here". Perfect for awareness campaigns.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-poster-justice-W6ZXe7KncAwD4dsceLkoTF.webp',
    printfulLink: 'https://printful.com',
    features: ['High resolution', 'Multiple sizes', 'Vintage aesthetic', 'Print-ready'],
  },
  {
    id: 7,
    name: 'Canvas Tote Bag',
    category: 'Accessories',
    price: '$18',
    cost: '$6',
    profit: '$12',
    description: 'Natural canvas tote with dreamcatcher logo and Indigenous geometric side patterns. Durable, reusable, and stylish. Perfect for everyday use.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-tote-bag-design-A9DQmtzHMe6c39WeKBrUF4.webp',
    printfulLink: 'https://printful.com',
    features: ['Natural canvas', 'Durable handles', 'Spacious interior', 'Eco-friendly'],
  },
  {
    id: 8,
    name: 'Enamel Pin',
    category: 'Accessories',
    price: '$12',
    cost: '$4',
    profit: '$8',
    description: 'Circular enamel pin (1.5") featuring full dreamcatcher with orange ring and blood stains. "JUSTICE" text around outer edge. Collectible and wearable.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/merch-pin-design-2kYqoWkNh6RSKwAteUL5B3.webp',
    printfulLink: 'https://printful.com',
    features: ['Hard enamel', '1.5" diameter', 'Butterfly clutch', 'Collectible'],
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-forest-green to-amber-orange">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Indigenous Justice Merchandise</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              100% royalty-free designs. 100% of profits support legal action and systemic accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm font-semibold">Every Purchase Funds</p>
                <p className="text-2xl font-bold">Legal Action</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm font-semibold">All Designs</p>
                <p className="text-2xl font-bold">Copyright-Free</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm font-semibold">Full Transparency</p>
                <p className="text-2xl font-bold">Accountability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchandise.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-amber-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-forest-green mb-2">{item.name}</h3>
                  <p className="text-charcoal/70 mb-4 text-sm leading-relaxed">{item.description}</p>

                  {/* Pricing */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-amber-orange">{item.price}</span>
                      {item.cost && (
                        <span className="text-xs text-charcoal/60">
                          (Cost: {item.cost}, Profit: {item.profit})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  {item.features && (
                    <div className="mb-4">
                      <ul className="text-sm text-charcoal/70 space-y-1">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-amber-orange">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    {item.downloadLink && (
                      <a
                        href={item.downloadLink}
                        download
                        className="flex-1 bg-forest-green hover:bg-forest-green/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center text-sm flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Download
                      </a>
                    )}
                    {item.printfulLink && (
                      <a
                        href={item.printfulLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-amber-orange hover:bg-amber-light text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center text-sm flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={16} />
                        Order
                      </a>
                    )}
                  </div>

                  {/* Share */}
                  <button className="w-full mt-3 bg-white border-2 border-charcoal/20 hover:border-amber-orange text-charcoal hover:text-amber-orange px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-forest-green/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-12 text-center">How Print-on-Demand Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-2">Choose Design</h3>
              <p className="text-charcoal/70">Select your merchandise item and design from our collection.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-2">Place Order</h3>
              <p className="text-charcoal/70">Order through Printful or Merch by Amazon. They handle production & shipping.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-2">Support Justice</h3>
              <p className="text-charcoal/70">Your purchase profits fund legal action and Indigenous advocacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-8 text-center">Full Transparency</h2>

          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-amber-orange">
            <h3 className="text-2xl font-bold text-forest-green mb-4">Where Your Money Goes</h3>
            <div className="space-y-3 text-charcoal/80">
              <p>
                <span className="font-bold">Production Cost:</span> Paid to Printful/Merch by Amazon for manufacturing and shipping
              </p>
              <p>
                <span className="font-bold">Profit Margin:</span> 100% of profits go directly to legal fund for Indigenous justice advocacy
              </p>
              <p>
                <span className="font-bold">Accountability:</span> All donations tracked and reported publicly through our nonprofit
              </p>
              <p>
                <span className="font-bold">Legal Use:</span> All designs are 100% copyright-free and royalty-free. You own what you buy.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-forest-green mb-4">Ready to Support the Movement?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-bold transition-colors"
              >
                <Heart size={20} />
                Donate Directly
              </a>
              <a
                href="https://printful.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-8 py-4 rounded-lg font-bold transition-colors"
              >
                <ShoppingCart size={20} />
                Order Merchandise
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-amber-orange/10 rounded-lg p-8 border-2 border-amber-orange">
            <h3 className="text-2xl font-bold text-forest-green mb-4">Inquiries & Bulk Orders</h3>
            <p className="text-charcoal/80 mb-4">
              For custom designs, bulk orders, merchandise partnerships, or general inquiries:
            </p>
            <a
              href="mailto:justiceforbarran@gmail.com"
              className="inline-flex items-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-8 py-4 rounded-lg font-bold transition-colors"
            >
              <Mail size={20} />
              justiceforbarran@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
