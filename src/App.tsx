import React from "react";

const whatsappNumber = "918882553333";
const whatsappMsg = encodeURIComponent("Hi, I want to place a cake order!");
const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMsg}`;

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bakingo-light)] text-[var(--bakingo-dark)]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/95 shadow-sm border-b border-[var(--bakingo-gray)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2 lg:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="https://ext.same-assets.com/85451115/2040008652.png" alt="Bakingo" className="h-10 w-auto"/>
          </a>
          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="font-semibold">Cakes</a>
            <a href="#" className="font-semibold">Theme Cakes</a>
            <a href="#" className="font-semibold">Desserts</a>
            <a href="#" className="font-semibold">Birthday</a>
            <a href="#" className="font-semibold">Hampers</a>
            <a href="#" className="font-semibold">Anniversary</a>
            <a href="#" className="font-semibold">Occasion</a>
          </nav>
          {/* Contact + User */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-[var(--bakingo-gold)] hover:text-[var(--bakingo-burgundy)]">Track Order</button>
            <a href="#" className="relative">
              <img src="https://ext.same-assets.com/85451115/3389960878.svg" alt="Cart" className="w-7 h-7"/>
            </a>
            <a href="#" className="relative">
              <img src="https://ext.same-assets.com/85451115/1506529944.svg" alt="User" className="w-7 h-7"/>
            </a>
          </div>
        </div>
      </header>

      {/* Hero/Banners */}
      <section className="bg-gradient-to-br from-[var(--bakingo-pink)]/10 via-[#fff] to-[var(--bakingo-gold)]/10 py-6 pb-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          <a href="#" className="w-44 rounded-xl overflow-hidden shadow"><img src="https://ext.same-assets.com/85451115/2680588349.jpeg" alt="Anniversary" /></a>
          <a href="#" className="w-44 rounded-xl overflow-hidden shadow"><img src="https://ext.same-assets.com/85451115/2105524761.jpeg" alt="Birthday" /></a>
          <a href="#" className="w-44 rounded-xl overflow-hidden shadow"><img src="https://ext.same-assets.com/85451115/2791002194.jpeg" alt="Mango Cakes" /></a>
          <a href="#" className="w-44 rounded-xl overflow-hidden shadow"><img src="https://ext.same-assets.com/85451115/631006957.jpeg" alt="Best Sellers" /></a>
        </div>
      </section>

      {/* Surprise Your Loved One */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Surprise Your Loved One</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#"><img src="https://ext.same-assets.com/85451115/186540687.jpeg" alt="Regular Cakes" /><div className="pt-1 text-center text-sm">Regular Cakes</div></a>
          <a href="#"><img src="https://ext.same-assets.com/85451115/3210480195.jpeg" alt="Gourmet Cakes" /><div className="pt-1 text-center text-sm">Gourmet Cakes</div></a>
          <a href="#"><img src="https://ext.same-assets.com/85451115/3210480195.jpeg" alt="Photo Cakes" /><div className="pt-1 text-center text-sm">Photo Cakes</div></a>
          <a href="#"><img src="https://ext.same-assets.com/85451115/1152917256.jpeg" alt="Theme Cakes" /><div className="pt-1 text-center text-sm">Theme Cakes</div></a>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Our Best Sellers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Only a sample, repeat as needed */}
          <a href="#" className="shadow rounded-xl overflow-hidden bg-white flex flex-col">
            <img src="https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg?tr=h-265,w-265" alt="Chocolate Truffle Cake" className="aspect-square"/>
            <div className="px-2 py-1 flex flex-col gap-1">
              <div className="font-semibold">Rich Chocolate Truffle Cake</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[var(--bakingo-gold)] font-bold">₹549</span>
                <span className="line-through text-gray-400">₹599</span>
                <span className="bg-[var(--bakingo-green)] text-white text-xs rounded px-1">9% OFF</span>
              </div>
              <div className="text-xs text-gray-600">4.9 ★ (6169 reviews)</div>
            </div>
          </a>
          <a href="#" className="shadow rounded-xl overflow-hidden bg-white flex flex-col">
            <img src="https://bkmedia.bakingo.com/mango-naked-cake-cake4692mang-A_0.jpg?tr=h-265,w-265" alt="Mango Naked Cake" className="aspect-square"/>
            <div className="px-2 py-1 flex flex-col gap-1">
              <div className="font-semibold">Juicy Mango Delight Cake</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[var(--bakingo-gold)] font-bold">₹599</span>
              </div>
              <div className="text-xs text-gray-600">4.9 ★ (20 reviews)</div>
            </div>
          </a>
          {/* Add more cards as needed for the grid */}
        </div>
      </section>

      {/* Experience Flavours */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Experience Flavours</h2>
        <div className="flex flex-wrap gap-2">
          {['Mango','Chocolate','Fruits','Red Velvet','Blackforest','Pineapple','Butterscotch','Kit Kat'].map(flavour => (
            <button key={flavour} className="rounded-full border px-4 py-1 text-sm hover:bg-[var(--bakingo-gold)] hover:text-white transition">
              {flavour}
            </button>
          ))}
        </div>
      </section>

      {/* Trending Cakes */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Trending Cakes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#"><img src="https://bkmedia.bakingo.com/mango_3.jpg" alt="Mango Cakes" /><div className="pt-1 text-center text-sm">Mango Cakes</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/cricket-cake-desktop.jpg" alt="Cricket Cakes" /><div className="pt-1 text-center text-sm">Cricket Cakes</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/pinata_cake_desktop_2.jpg" alt="Pinata Cakes" /><div className="pt-1 text-center text-sm">Pinata Cakes</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/card-image_0.jpg" alt="Pull Me Up Cakes" /><div className="pt-1 text-center text-sm">Pull Me Up Cakes</div></a>
        </div>
      </section>

      {/* Designer Cakes */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Designer Cakes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <a href="#"><img src="https://bkmedia.bakingo.com/barbie_1_1.jpg" alt="Barbie Cakes" /><div className="pt-1 text-center text-sm">Barbie Cakes</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/cartoon-cake_0_1.jpg" alt="Cartoon Cakes" /><div className="pt-1 text-center text-sm">Cartoon Cakes</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/number-cake_1.jpg" alt="Number Cakes" /><div className="pt-1 text-center text-sm">Number Cakes</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/rainbow_cakes_desktop_19.jpg" alt="Rainbow Cakes" /><div className="pt-1 text-center text-sm">Rainbow Cakes</div></a>
        </div>
      </section>

      {/* Looking for Something Else */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Looking For Something Else</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <a href="#"><img src="https://bkmedia.bakingo.com/pastries_3_2.png" alt="Pastries" /><div className="pt-1 text-center text-sm">Pastries</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/jar_cakes_2_2.png" alt="Jar Cakes" /><div className="pt-1 text-center text-sm">Jar Cakes</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/cup_cakes_5_1.png" alt="Cup Cakes" /><div className="pt-1 text-center text-sm">Cup Cakes</div></a>
          <a href="#"><img src="https://bkmedia.bakingo.com/brownies_2_2.png" alt="Brownies" /><div className="pt-1 text-center text-sm">Brownies</div></a>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-[var(--bakingo-pink)]/10 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Read Some Of Our Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            <a href="#" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition border">
              <div className="font-semibold mb-1">Top 20 Songs for Fathers Day Playlist Ideas for Every Dad</div>
              <div>There are very few bonds as profound as the one shared between a father and child...</div>
            </a>
            <a href="#" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition border">
              <div className="font-semibold mb-1">Mothers Day 2025: Date, Gift Ideas, Messages & More to Celebrate with Love</div>
              <div>When was the last time you truly paused to thank your mum for all the love...</div>
            </a>
            <a href="#" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition border">
              <div className="font-semibold mb-1">Fathers Day 2025 History, Date, Gift Ideas, Quotes, and More</div>
              <div>Fathers Day, celebrated on 15th June 2025, is a special occasion that reminds us...</div>
            </a>
            <a href="#" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition border">
              <div className="font-semibold mb-1">When is Fathers Day Celebrated in India 2025</div>
              <div>While mothers are often celebrated for their selfless care, fathers play an equally pivotal...</div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials (simplified) */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center shadow justify-between">
          <div>
            <div className="font-bold text-lg mb-1">What our customers say about us!!</div>
            <div className="flex items-center gap-2 text-yellow-600 font-bold text-xl">
              <img src="https://ext.same-assets.com/85451115/2898881189.svg" alt="Google" className="h-6 w-6"/>4.6
              <span className="text-xs text-gray-500 font-normal">Based on 61175+ reviews and rating</span>
            </div>
          </div>
          <div className="text-gray-700 italic">"Delicious and yummy flavour of mango was really fantastic. I loved it!"<br /><span className="font-semibold">- ptangoria</span></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bakingo-light)] border-t">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <div className="font-bold mb-2">Contact Us</div>
            <div className="text-sm">Whatsapp: <a href={whatsappLink} className="underline">+91-88825-53333</a></div>
            <div className="text-sm">Email: support@bakingo.com</div>
          </div>
          <div>
            <div className="font-bold mb-2">Useful Links</div>
            <ul className="text-sm space-y-1">
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Customer Care</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Quick Shop</div>
            <ul className="text-sm space-y-1">
              <li><a href="#">All Cakes</a></li>
              <li><a href="#">Photo Cakes</a></li>
              <li><a href="#">Designer Cakes</a></li>
              <li><a href="#">Brownies</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Newsletter</div>
            <div className="flex gap-2">
              <input className="rounded border px-2 py-1" type="email" placeholder="Your Email"/>
              <button className="bg-[var(--bakingo-burgundy)] text-white px-3 rounded">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-xs text-center p-2 text-gray-400">&copy; {new Date().getFullYear()} Bakingo. All rights reserved.</div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-[var(--bakingo-green)] hover:bg-[var(--bakingo-gold)] rounded-full shadow-lg p-3 transition-all flex items-center gap-2 w-[58px] h-[58px] justify-center"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-7 w-7" />
      </a>
    </div>
  );
}
