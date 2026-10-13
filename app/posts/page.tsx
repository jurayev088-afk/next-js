import Link from 'next/link'

export default async function Posts() {

  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")

  const data = await posts.json()

  return (
    <div>
      <h1 className='font-bold ml-5 text-[30px]'>Posts</h1>

      <ul className='flex flex-col gap-2 ml-5 mt-7'>
        {
          data.map(item => {
            return (
              <li key={item?.id}>
                <Link href={`/posts/${item?.userId}`}>{item?.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
