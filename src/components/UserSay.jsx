import '../style/scss/home/_usersay.scss'

const UserSay = ({img, name, username, text, attlr}) => {
    return (
        <div className='testimony'>
            <div className="testimony-box">
                <div className="user">
                    <img src={img} alt={attlr} />
                    <p>{name}</p>
                </div>
                <span>{username}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default UserSay