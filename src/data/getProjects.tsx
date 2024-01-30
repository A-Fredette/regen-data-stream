export async function getProjects(projectId: string) {
  const res = await fetch(`http://localhost:5001/projects/${projectId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
