export default function getTopicIdUrlFromUrl () {
    const path = window.location.pathname
    const parts = path.split('/')
    return parts[parts?.length - 1]
}