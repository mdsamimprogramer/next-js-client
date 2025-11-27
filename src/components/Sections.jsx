"use client";

import Image from "next/image";

export default function Sections() {
  return (
    <div className="space-y-32 px-4 md:px-20 py-20">
      
      {/* ===== 1. Features Section ===== */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Fresh & Organic", desc: "Only the freshest produce delivered.", icon: "/icon (1).png" },
            { title: "Fast Delivery", desc: "Quick and safe delivery to your door.", icon: "/icon (2).png" },
            { title: "Quality Guarantee", desc: "We ensure premium quality products.", icon: "/icon (3).png" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition hover:-translate-y-2 cursor-pointer text-center"
            >
              <Image src={feature.icon} alt={feature.title} width={64} height={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-green-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 2. Items Section ===== */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Our Items</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Organic Apples", price: "$5/kg", img: "/items (3).jpg" },
            { name: "Fresh Carrots", price: "$3/kg", img: "/items (2).jpg" },
            { name: "Green Spinach", price: "$4/kg", img: "/items (1).jpg" },
            { name: "Red Tomatoes", price: "$6/kg", img: "/items (5).jpg" },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-red-400 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition cursor-pointer overflow-hidden"
            >
              <Image src={item.img} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-green-700">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. Testimonials Section ===== */}
      <section className="bg-green-100 px-2 py-16 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Alice", message: "Fresh products delivered on time. Loved it!", avatar: "/avater (3).jpg" },
            { name: "Bob", message: "High-quality vegetables. Highly recommend!", avatar: "/avater (2).jpg" },
            { name: "Charlie", message: "Excellent customer service and organic items.", avatar: "/avater (4).jpg" },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition hover:-translate-y-2 cursor-pointer text-center"
            >
              <Image src={testimonial.avatar} alt={testimonial.name} width={64} height={64} className="mx-auto mb-4 rounded-full" />
              <p className="text-green-700 mb-2">"{testimonial.message}"</p>
              <h4 className="font-semibold text-gray-400">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 4. Banner Section ===== */}
      <section className="relative bg-green-600 text-white rounded-lg overflow-hidden">
        <Image src="/php-programming-html-coding-cyberspace-concept.jpg" alt="Banner" width={1200} height={400} className="w-full h-64 md:h-96 object-cover opacity-80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Fresh Today!</h2>
          <p className="mb-6 text-lg md:text-xl text-fuchsia-800">Order your organic products online now.</p>
          <a href="/items" className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition">
            Shop Now
          </a>
        </div>
      </section>

    </div>
  );
}
