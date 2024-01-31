export async function getProjectPosts(projectId: string, x: number, y: number) {
  const res = await fetch(
    `http://localhost:5001/projects/${projectId}/posts?limit=${x}&offset=${y}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch posts for project ' + projectId)
  }

  return res.json()
}
