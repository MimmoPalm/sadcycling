import { siteConfig } from '@/lib/content'

export default function TheCharity() {
  return (
    <section id="charity" className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
              Why We Ride
            </p>
            {/* TODO: Update charity name */}
            <h2 className="section-heading text-crimson mb-8">
              {siteConfig.charityName}
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                {/* TODO: Replace with real charity description */}
                We&apos;re riding in support of an organisation doing genuinely important work in the community. Every kilometre we suffer is a kilometre ridden in their name.
              </p>
              <p>
                Your donation — however small — directly funds programmes that make a real difference. And it makes our legs hurt slightly less, psychologically.
              </p>
            </div>
            {/* TODO: Replace href with real donation URL */}
            <a href={siteConfig.donateUrl} className="btn-primary">
              Donate Now
            </a>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-crimson p-8 text-center">
              <div className="text-6xl font-black text-crimson mb-2">{siteConfig.fundraisingGoal}</div>
              <div className="text-gray-500 font-black uppercase tracking-widest text-sm">Target</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-off-white p-6 text-center">
                <div className="text-4xl font-black text-crimson mb-2">{siteConfig.currentTotal}</div>
                <div className="text-gray-500 font-black uppercase tracking-widest text-xs">Raised so far</div>
                {/* TODO: Connect to live fundraising total via API or embed */}
              </div>
              <div className="bg-off-white p-6 text-center">
                <div className="text-4xl font-black text-crimson mb-2">{siteConfig.numberOfRiders}</div>
                <div className="text-gray-500 font-black uppercase tracking-widest text-xs">Riders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
