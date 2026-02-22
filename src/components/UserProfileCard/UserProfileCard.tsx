import type { UserProfileCardProps } from '../../types'

function UserProfileCard({user, showEmail, showRole, onEdit, children}:UserProfileCardProps) {

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
            <div className="flex items-center space-x-4">
                <img className="w-16 h-16 rounded-full object-cover" src={user.avatarUrl} alt={user.name}/>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                    {showEmail? <p className="text-sm text-gray-600">{user.email}</p>: <p></p>}
                    {showRole? <p className="text-sm text-gray-500">{user.role}</p>: <p></p>}
                    {children}
                </div>
            </div>
            {onEdit && (
            <button onClick={() => onEdit(user.id)} className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Edit Profile
            </button>
            )}
        </div>

    )
}

export default UserProfileCard