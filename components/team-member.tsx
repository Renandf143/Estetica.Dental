import Image from 'next/image'

type TeamMemberProps = {
  name: string
  role: string
  image: string
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <Image 
        src={image} 
        alt={name} 
        width={300} 
        height={300} 
        className="rounded-full w-48 h-48 object-cover mb-4"
        priority
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}

