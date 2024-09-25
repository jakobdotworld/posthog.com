import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'components/Link'

const BenefitsUnexpected: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-8 pb-12 grid gap-12 xl:gap-16">
      <div className="-mb-4">
        <h2 className="text-center text-5xl mb-2"><em className="text-red dark:text-yellow">Unexpected</em> benefits</h2>
        <p className="text-center font-semibold opacity-75 mb-0">Perks you'll only find here</p>
      </div>

      <div className="grid md:grid-cols-2 md:items-center md:gap-8 lg:gap-12">
        <aside className="order-2 md:order-1 relative">
          <div className="dark:hidden">
            <StaticImage src="./images/meeting-free-days.png" alt="Calendar with two glorious days of no meetings" />
          </div>
          <div className="hidden dark:block">
            <StaticImage src="./images/meeting-free-days-dark.png" alt="Calendar with two glorious days of no meetings" />
          </div>
          <div className="lg:hidden absolute left-0 bottom-0 z-10">
            <StaticImage src="./images/police-hog.png" alt="Police hog sez..." className="w-[106px] -scale-x-1" />
            <StaticImage src="./images/police-hog-quote.png" alt="Look at all those empty time slots!" className="w-[194px] -ml-4" />
          </div>
        </aside>
        <div className="order-1 md:order-2 relative">
          <h3 className="text-4xl mb-1"><span className="text-red dark:text-yellow">Two meeting-free days</span> per week</h3>
          <p className="max-w-lg mb-3">After extensive research, we've found the best way to ship fast is to have fewer meetings.</p>

          <p className="text-sm opacity-75 max-w-lg mb-3">
            *Illustration is not indicative of an product engineer’s calendar at PostHog. We actually have relatively few meetings.
          </p>

          <div className="hidden lg:block scale-100 hover:scale-[1.2] transition-all duration-200 relative left-0 hover:left-4 rotate-0 hover:rotate-3">
            <StaticImage src="./images/police-hog.png" alt="Police hog sez..." className="w-[106px] mt-10" />
            <StaticImage src="./images/police-hog-quote.png" alt="Look at all those empty time slots!" className="w-[194px] -ml-4" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-start lg:items-center gap-4 md:gap-8 lg:gap-12">
        <div className="relative">
          <h3 className="text-4xl mb-1">Company off-sites <span className="text-red dark:text-yellow">in exotic locations</span></h3>
          <p className="max-w-lg mb-3">Each year we organize fully paid company off-sites. The highlight is the hackathon where we team up to build things that aren't on our roadmap.</p>

          <p className="font-bold text-[15px] mb-1">Off-site history:</p><div className="grid md:inline-grid grid-cols-2 min-w-72 divide-y divide-light dark:divide-dark text-sm [&_*]:py-0.5"><strong>Year</strong><strong className="!border-t-0">Location</strong><div>2020</div><div>Tuscany</div><div>2021</div><div>Portugal</div><div>2022</div><div>Iceland</div><div>2023</div><div>Aruba</div><div>2024</div><div>Mykonos</div><div>2025</div><div><span className="inline-block bg-border dark:bg-border-dark rounded-[2px] text-sm w-16 h-[16px] relative top-[2px]"></span></div></div>
        </div>
        <aside>
          <div className="border-8 border-white shadow-xl rounded relative rotate-1">
            <StaticImage src="./images/mykonos.png" alt="" />
            <div className="absolute bottom-0 left-0 w-full text-white bg-gradient-to-b from-black/0 to-black/50 p-2 pt-8 text-sm">Hackathoning poolside in Mykonos</div>
          </div>
        </aside>
      </div>

      <div className="grid md:grid-cols-2 md:items-center gap-4 md:gap-8 lg:gap-12">
        <aside className="order-2 md:order-1 relative">
          <div className="border-8 border-white shadow-xl rounded relative -rotate-1">
            <StaticImage src="./images/dope.png" alt="" />
            <div className="absolute bottom-0 left-0 w-full text-white bg-gradient-to-b from-black/0 to-black/70 p-2 pt-12 text-sm text-balance xl:text-wrap leading-tight"><Link href="https://maps.app.goo.gl/iYmWWo7C6Q7hBJa48" externalNoIcon className="text-white font-bold hover:!underline hover:text-white dark:hover:text-white">Dope Roasting Co.</Link> in Athens, Greece – a great place to build pages like this</div>
          </div>
        </aside>
        <div className="order-1 md:order-2 relative">
          <h3 className="text-4xl mb-1">Monthly co-working or café credit</h3>
          <p className="max-w-lg mb-3">Use $250/mo toward a co-working space or coffee shops if that's where you do your best work. Charge it on your personal Brex (or Revolut) card.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-start lg:items-center md:gap-8 lg:gap-12">
        <div className="relative">
          <h3 className="text-4xl mb-1"><span className="text-red dark:text-yellow">Small team</span> off-sites</h3>
          <p className="max-w-lg mb-3">You'll meet up with your small team somewhere fun periodically. Sometimes multiple small teams get together. We have a special budget for you to do this.</p>
          <p>Recent small team off-sites have been in Sicily, Munich, Valencia, Sedona (Arizona), and Palm Springs (California).</p>
        </div>
        <aside>
          <div className="border-8 border-white shadow-xl rounded relative rotate-1">
            <StaticImage src="./images/austin.png" alt="" />
            <div className="absolute bottom-0 left-0 w-full text-white bg-gradient-to-b from-black/0 to-black/50 p-2 pt-8 text-sm">The Website &amp; Docs + Marketing teams floating down Lake Austin</div>
          </div>
        </aside>
      </div>

      <div className="grid md:grid-cols-2 md:items-center gap-4 md:gap-8 lg:gap-12">
        <aside className="order-2 md:order-1 relative">
          <div className="border-8 border-white shadow-xl rounded relative -rotate-1">
            <StaticImage src="./images/cambridge.png" alt="" />
            <div className="absolute bottom-0 left-0 w-full text-white bg-gradient-to-b from-black/0 to-black/70 p-2 pt-12 text-sm text-balance leading-tight">A co-founder, product manager, graphic designer, developer, and webmaster take over a coffee shop</div>
          </div>
        </aside>
        <div className="order-1 md:order-2 relative">
          <h3 className="text-4xl mb-1">Local meetup budget</h3>
          <p className="max-w-lg mb-3">You're encouraged to meet up with other team members who you don't work with on a regular basis with a generous quarterly budget.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-start lg:items-center gap-4 md:gap-8 lg:gap-12">
        <div className="relative">
          <h3 className="text-4xl mb-1">Access to the <span className="text-red dark:text-yellow">Hedge House</span></h3>
          <p className="max-w-lg mb-3">Work with co-workers (or by yourself) in Cambridge, UK and stay for free whenever you want.</p>
        </div>
        <aside>
          <div className="border-8 border-white shadow-xl rounded relative rotate-1">
            <StaticImage src="./images/hedgehouse.png" alt="" />
            <div className="absolute bottom-0 left-0 w-full text-white bg-gradient-to-b from-black/0 to-black/50 p-2 pt-8 text-sm">Where the walls are <em>definitely</em> not YC Pantone orange...</div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default BenefitsUnexpected
