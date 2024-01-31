import { ProjectType } from '@/features/projects'
import { getLocalFromUtc } from '@/utils/getLocalFromUtc'
import Link from 'next/link'

const Project = ({ project }: { project: ProjectType }) => {
  const localDate = getLocalFromUtc(project.createdAt)

  return (
    <Link href={`/posts/${project.id}`}>
      <section className="mt-6 hover:cursor-pointer hover:shadow-lg mx-auto bg-white h-auto border rounded-md shadow-md w-11/12 sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
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
