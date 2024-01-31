import { getProjectPosts } from '@/data/getProjectPosts'
import { PostT } from '@/features/posts'
import { useEffect, useState } from 'react'

type UseFetchPostsReturn = [PostT[], boolean, boolean]

const useFetchPosts = (
  projectId: string,
  offset: number
): UseFetchPostsReturn => {
  const [posts, setPosts] = useState<PostT[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const res = await getProjectPosts(projectId, 10, offset)
        setPosts(prevState => [...prevState, ...res.posts])
      } catch (err) {
        setError(true)
        console.warn('Problem fetching posts', err)
      }
    }

    if (offset > 10) {
      fetchPosts().then(() => setLoading(false))
    }
  }, [offset, projectId])

  return [posts, loading, error]
}

export default useFetchPosts
