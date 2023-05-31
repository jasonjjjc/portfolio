export default async function getProject(projectId) {
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${projectId}`)
    if (!res.ok) throw new Error('failed to fetch user')
  return res.json()
}
