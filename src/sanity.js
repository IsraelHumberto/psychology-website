import {createClient} from 'next-sanity'

const client = createClient({
    projectId: 'grflh5ea',
    dataset: 'production',
    apiVersion: '2023-05-28',
    useCdn: false
})

export default client