import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function HomePage() {
  const docsIndex = '/intro/index'
  const router = useRouter()

  useEffect(() => {
    router.push(docsIndex)
  }, [])

  return (
    <div className='mx-auto max-w-md'>
      <div className='text-center mt-32 text-3xl font-bold'>
        Welcome To CTF Book!
      </div>
      <div className='text-center'>
        <p>A guide gor beginners to learn about Capture The Flag[CTF].</p>
        <p>You can get amazing tools, mindmaps, payloads, scripts and alot more things.</p>
        <p>
          For now, redirecting you to the{' '}
          <Link href={docsIndex}>
            <a className='underline'>documentation</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
