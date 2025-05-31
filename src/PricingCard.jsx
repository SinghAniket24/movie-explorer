function PricingCard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-800 drop-shadow-sm text-center">Choose the plan that fits you best</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
        
        {/* Basic Plan */}
        <div className="bg-white border-t-4 border-blue-400 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Basic</h3>
          <p className="text-4xl font-semibold text-gray-800 mb-4">$9 <span className="text-base text-gray-500">/month</span></p>
          <ul className="text-gray-600 space-y-2 mb-6 text-sm">
            <li>✔ 1 Project</li>
            <li>✔ Email Support</li>
            <li>✔ Community Access</li>
            <li>✔ 5 GB Storage</li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Choose Basic</button>
        </div>

        {/* Pro Plan - Most Popular */}
        <div className="bg-white border-t-4 border-purple-500 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center scale-105">
          <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Most Popular</div>
          <h3 className="text-2xl font-bold text-purple-700 mb-2">Pro</h3>
          <p className="text-4xl font-semibold text-gray-800 mb-4">$29 <span className="text-base text-gray-500">/month</span></p>
          <ul className="text-gray-600 space-y-2 mb-6 text-sm">
            <li>✔ 10 Projects</li>
            <li>✔ Priority Email Support</li>
            <li>✔ Access to Resources</li>
            <li>✔ 100 GB Storage</li>
            <li>✔ Analytics Dashboard</li>
          </ul>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">Choose Pro</button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white border-t-4 border-pink-500 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">Enterprise</h3>
          <p className="text-4xl font-semibold text-gray-800 mb-4">$99 <span className="text-base text-gray-500">/month</span></p>
          <ul className="text-gray-600 space-y-2 mb-6 text-sm">
            <li>✔ Unlimited Projects</li>
            <li>✔ Dedicated Support</li>
            <li>✔ Team Collaboration Tools</li>
            <li>✔ 1 TB Cloud Storage</li>
            <li>✔ Custom Integrations</li>
            <li>✔ SLA Guarantee</li>
          </ul>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">Choose Enterprise</button>
        </div>

      </div>
    </div>
  );
}

export default PricingCard;
