import Layout from 'components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Benefits } from '../components/Careers/Benefits'
import { CareersHero } from '../components/Careers/CareersHero'
import { OpenRoles } from '../components/Careers/OpenRoles'
import '../components/Careers/styles/index.scss'
import { Transparency } from '../components/Careers/Transparency'
import { WorkingAtPostHog } from '../components/Careers/WorkingAtPostHog'
import { SEO } from '../components/seo'
import { TeamQuote } from '../components/TeamQuote'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import MegaQuote from 'components/Careers/MegaQuote'
import CompanyHandbook from 'components/Careers/Handbook'
import NoHatingAllowed from '../components/NoHatingAllowed'
import { CareersCards } from '../components/NoHatingAllowed/data.js'
import IdealEmployeeProfile from 'components/Careers/IdealEmployeeProfile'
import BenefitsUnexpected from 'components/Careers/BenefitsUnexpected'
import BenefitsUsual from 'components/Careers/BenefitsUsual'
import Compensation from 'components/Careers/Compensation'
import InterviewProcess from 'components/Job/InterviewProcess'
import { FounderNote } from 'components/Careers/FounderNote'
import { InterviewProcessOverview } from 'components/Careers/InterviewProcessOverview'
import TeamQuotes from 'components/Careers/TeamQuotes'
import { SmallTeams } from 'components/Careers/SmallTeams'
import { Pizza } from 'components/Careers/Pizza'

const menu = [
    {
        name: 'Introduction',
        url: 'introduction',
    },
    {
        name: 'Transparency',
        url: 'transparency',
    },
    {
        name: 'Who we hire',
        url: 'who-we-hire',
    },
    {
        name: 'Benefits',
        url: 'benefits',
    },
    {
        name: 'Working here',
        url: 'working-at-posthog',
    },
    {
        name: 'Open roles',
        url: 'open-roles',
    },
]

const IndexPage = () => {
    const data = useStaticQuery(query)
    const latestJob = data?.allAshbyJobPosting?.nodes && data.allAshbyJobPosting.nodes[0]
    const latestJobCreatedAt = latestJob && new Date(latestJob['publishedDate'])

    const breakpoints = useBreakpoint()
    return (
        <Layout>
            <SEO
                title="Careers - PostHog"
                description="We're working to increase the number of successful products in the world.
                Adventurers needed."
                image={`/og-images/careers.jpeg${latestJobCreatedAt ? `?${latestJobCreatedAt.getTime()}` : ''}`}
            />

            <CareersHero />
            <FounderNote />

            <MegaQuote />

            <CompanyHandbook />
            <NoHatingAllowed data={CareersCards} youllHate="working here" size="text-4xl lg:text-5xl" />
            <IdealEmployeeProfile />
            <BenefitsUnexpected />
            <BenefitsUsual />
            <Compensation />
            <InterviewProcessOverview />
            <TeamQuotes />
            <SmallTeams />
            <Pizza />

            {/* <Transparency /> */}

            <OpenRoles />
            <br />
            <br />
        </Layout>
    )
}

const query = graphql`
    query CareersQuery {
        allAshbyJobPosting(sort: { fields: publishedDate, order: DESC }) {
            nodes {
                publishedDate
                title
            }
        }
    }
`

export default IndexPage
