import type { UserProfileCardProps } from '../../types'

function UserProfileCard({user, showEmail, showRole, onEdit, children}:UserProfileCardProps) {

    return (
        <div className="bg-white p-2">
            <div className="flex-col">
                <img src={user.avatarUrl} alt={user.name}/>
                <div className="text-align-center">
                    <h1>{user.name}</h1>
                    {showEmail? <p>{user.email}</p>: <p></p>}
                    {showRole? <p>{user.role}</p>: <p></p>}
                    {children}
                </div>
             </div>
            {onEdit && (
            <button
            onClick={() => onEdit(user.id)}
            className="ml-4 text-blue-500 hover:text-darkblue-700"
            >
            Edit Profile
            </button>
            )}
        </div>

    )
}

export default UserProfileCard