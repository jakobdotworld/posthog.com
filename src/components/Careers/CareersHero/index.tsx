import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'components/Link'
import { Department, Location, Timezone } from 'components/NotProductIcons'
import { CallToAction } from 'components/CallToAction'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PineappleText, TeamMembers } from 'components/Job/Sidebar'
import slugify from 'slugify'

const query = graphql`
    query CareersHero {
        allAshbyJobPosting(filter: { isListed: { eq: true } }) {
            jobs: nodes {
                fields {
                    title
                    slug
                    html
                }
                parent {
                    ... on AshbyJob {
                        customFields {
                            value
                            title
                        }
                    }
                }
                externalLink
                departmentName
                info {
                    descriptionHtml
                }
            }
            departments: group(field: departmentName) {
                title: fieldValue
            }
        }
        allTeams: allSqueakTeam {
            nodes {
                id
                name
                crest {
                    gatsbyImageData
                }
                leadProfiles {
                    data {
                        id
                    }
                }
                profiles {
                    data {
                        id
                        attributes {
                            country
                            firstName
                            lastName
                            pineappleOnPizza
                            leadTeams {
                                data {
                                    attributes {
                                        name
                                    }
                                }
                            }
                            avatar {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const Detail = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => {
    return (
        <li className="flex space-x-2">
            <span className="w-6 h-6 text-black dark:text-white flex-shrink-0">{icon}</span>
            <span className="grid">
                <h4 className="text-sm m-0 font-normal leading-none pt-1">
                    <span>{title}</span>
                </h4>
                <p className="text-[15px] m-0 mt-1">
                    <strong className="text-black dark:text-white">{value}</strong>
                </p>
            </span>
        </li>
    )
}

export const CareersHero = () => {
    const {
        allAshbyJobPosting: { departments, jobs },
        allTeams: { nodes: allTeams },
    } = useStaticQuery(query)

    const [selectedJob, setSelectedJob] = useState(jobs[0])
    const [processedHtml, setProcessedHtml] = useState('')
    const teamsField = selectedJob.parent.customFields.find((field: { title: string }) => field.title === 'Teams')
    const teams = teamsField ? JSON.parse(teamsField.value) : []
    const [selectedTeamName, setSelectedTeamName] = useState(teams[0])
    const selectedTeam = allTeams.find((team) => team.name.toLowerCase() === selectedTeamName.toLowerCase())
    const teamLength = selectedTeam.profiles?.data?.length
    const teamURL = `/teams/${slugify(selectedTeam.name, { lower: true })}`
    const pineapplePercentage =
        teamLength &&
        teamLength > 0 &&
        Math.round(
            (selectedTeam.profiles?.data?.filter(({ attributes: { pineappleOnPizza } }) => pineappleOnPizza).length /
                teamLength) *
                100
        )

    useEffect(() => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(selectedJob.fields.html, 'text/html')

        const whoWereLookingFor = doc.querySelector('details:has(h2[id="who-we\'re-looking-for"])')
        const whatYoullBeDoing = doc.querySelector('details:has(h2[id="what-you\'ll-be-doing"])')

        let content = ''
        if (whoWereLookingFor) {
            content = whoWereLookingFor.outerHTML
        } else if (whatYoullBeDoing) {
            content = whatYoullBeDoing.outerHTML
        }

        setProcessedHtml(content)
        setSelectedTeamName(teams[0])
    }, [selectedJob])

    return (
        <>
            <h1 className="text-3xl lg:text-5xl font-bold text-center mb-2 pt-8">Who's hiring</h1>
            <p className="text-center mb-8 text-base">
                We currently looking to add <strong>{jobs.length} team members</strong>.
            </p>
            <div className="flex flex-col md:flex-row gap-4 px-4 max-w-7xl mx-auto 2xl:px-8 mb-8">
                <div className="w-full md:w-1/4">
                    <ul className="list-none p-0 m-0 divide-y-px">
                        {jobs.map((job) => (
                            <li key={job.fields.title} className="">
                                <button
                                    className={`w-full flex flex-col text-left p-2 border rounded ${
                                        selectedJob.fields.title === job.fields.title
                                            ? 'border-light dark:border-dark bg-white dark:bg-accent-dark'
                                            : 'border-transparent'
                                    }`}
                                    onClick={() => setSelectedJob(job)}
                                >
                                    <span
                                        className={`font-semibold text-base ${
                                            selectedJob.fields.title === job.fields.title ? 'font-bold' : ''
                                        }`}
                                    >
                                        {job.fields.title}
                                    </span>
                                    <span className="text-[13px] text-black/50 dark:text-white/50">
                                        {(() => {
                                            const teamsField = job.parent.customFields.find(
                                                (field: { title: string }) => field.title === 'Teams'
                                            )
                                            const teams = teamsField ? JSON.parse(teamsField.value) : []
                                            return teams.length > 1 ? 'Multiple teams' : teams.length === 1 && teams[0]
                                        })()}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-3/4 p-4 bg-white border border-light dark:border-dark dark:bg-accent-dark rounded">
                    <h2 className="text-2xl font-bold">{selectedJob.fields.title}</h2>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <ul className="list-none m-0 p-0 md:items-center text-black/50 dark:text-white/50 mt-6 flex md:flex-row flex-col md:space-x-12 md:space-y-0 space-y-6">
                                <Detail
                                    title="Location"
                                    value={`Remote${
                                        selectedJob.parent.customFields.find(
                                            (field: { title: string }) => field.title === 'Location(s)'
                                        )?.value
                                            ? ` (${
                                                  selectedJob.parent.customFields.find(
                                                      (field: { title: string }) => field.title === 'Location(s)'
                                                  ).value
                                              })`
                                            : ''
                                    }`}
                                    icon={<Location />}
                                />
                                {selectedJob.parent.customFields.find(
                                    (field: { title: string }) => field.title === 'Timezone(s)'
                                )?.value && (
                                    <Detail
                                        title="Timezone(s)"
                                        value={
                                            selectedJob.parent.customFields.find(
                                                (field: { title: string }) => field.title === 'Timezone(s)'
                                            ).value
                                        }
                                        icon={<Timezone />}
                                    />
                                )}
                            </ul>

                            <div className="job-content mt-4">
                                <div dangerouslySetInnerHTML={{ __html: processedHtml }} />
                                <CallToAction to={selectedJob.fields.slug}>Read more</CallToAction>
                            </div>
                        </div>
                        <div>
                            {teams.length > 1 && (
                                <p className="mb-2">
                                    <strong>{teams.length} teams hiring for this role</strong>
                                </p>
                            )}

                            <div className="border border-light dark:border-dark rounded max-w-[300px] text-center">
                                <div className="flex flex-col items-center gap-2">
                                    {teams.length > 1 && (
                                        <select
                                            className="w-full p-2 mb-2 border-0 border-b border-light dark:border-dark rounded-tl rounded-tr"
                                            value={selectedTeamName}
                                            onChange={(e) => {
                                                setSelectedTeamName(e.target.value)
                                            }}
                                        >
                                            {teams.map((team) => (
                                                <option key={team} value={team}>
                                                    {team}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    <div className="p-4 text-center">
                                        <div className="mb-2 max-w-40 mx-auto">
                                            <GatsbyImage image={getImage(selectedTeam.crest)} />
                                        </div>
                                        <h5 className="m-0 mb-2">
                                            <Link to={teamURL}>{selectedTeam.name}</Link>
                                        </h5>
                                        <div className="flex justify-center">
                                            <TeamMembers profiles={selectedTeam.profiles} />
                                        </div>
                                        <p className="text-xs mt-2">{PineappleText(pineapplePercentage)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
