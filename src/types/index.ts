export type Job = {
  title: string
  company: string
  startDate: string
  endDate: string
  summary: string
  highlights: []
}

export type Experience = {
  node: Job
}[]

export type Network = {
  name: string
  title: string
  services: {
    name: string
    description: string
    link: string
  }[]
}
