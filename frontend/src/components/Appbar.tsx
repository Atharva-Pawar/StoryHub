import { Avatar } from './BlogCard'

const Appbar = () => {
  return (
    <div>
      <div className='border-b flex justify-between p-4'>
        <div className='flex flex-col justify-center'>Medium</div>
        <div className='flex flex-col justify-center'><Avatar name='Atharva'/></div>
      </div>
    </div>
  )
}

export default Appbar
