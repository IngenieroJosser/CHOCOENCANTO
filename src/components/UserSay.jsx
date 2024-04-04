import '../style/scss/home/_usersay.scss'
import ArrayUserSay from './user/ArrayUserSay'
import CardUserSay from './user/CardUserSay'

const UserSay = ({img, verificed, name, username, text, attlr}) => {
    return (
        <div className='testimony'>
            {ArrayUserSay.map((testimony) => (
                    <CardUserSay
                        key={testimony.id}
                        img={testimony.img}    
                        verificed={testimony.verificed}
                        name={testimony.name}
                        username={testimony.username}
                        text={testimony.text}
                        attlr={testimony.attlr}
                    />
                ))}
        </div>
    )
}

export default UserSay