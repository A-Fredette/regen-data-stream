import { ProjectType } from '@/features/projects'
import { getLocalFromUtc } from '@/utils/getLocalFromUtc'
import Link from 'next/link'

const Project = ({ project }: { project: ProjectType }) => {
  const localDate = getLocalFromUtc(project.createdAt)

  return (
    <Link href={`/posts/${project.id}`}>
      <section className="mt-10 hover:cursor-pointer hover:shadow-lg container mx-auto bg-white h-auto w-1/4  border rounded-md shadow-md">
        <header className="flex items-center text-lg p-2.5 font-bold border-b h-12">
          {project.name}
        </header>
        <div className="min-h-60 p-2.5">No project description provided.</div>
        <footer className="text-slate-500 text-sm p-2.5">
          Created {localDate}
        </footer>
      </section>
    </Link>
  )
}

export default Project
