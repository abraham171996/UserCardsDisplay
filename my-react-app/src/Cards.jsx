import "./card.css"
const users=[
    {
        id:1, 
        username:"Ali",
        img:'ali',
        job:'developer'
    },
    {
        id:2,
        username:'bedbext_developer',
        img:'bedbext_developer',
        job:'test2',
    },
    {
        id:3,
        username:'duman',
        img:'duman',
        job:'test3',
    },
    {
        id:4,
        username:'js_oyrenen_shexs',
        img:'js_oyrenen_shexs',
        job:'test4',
    },
    {
        id:5,
        username:'qarli_daglar',
        img:'qarli_daglar',
        job:'test5',
    },
    {
        id:6,
        username:'qoca_cinar',
        img:'qoca_cinar',
        job:'test6',
    },
    {
        id:7,
        username:'visselka',
        img:'visselka',
        job:'test7',
    },
    {
        id:8,
        username:'novxani',
        img:'novxani',
        job:'test8',
    },
]
const Cards = () => {
  return (
    <>
        <ul>
            { users.map((user)=><Card userName = {user.username.toUpperCase()} image = {user.img} job = {user.job} key={user.id}   />)}
        </ul>
    </>
  )
}



// eslint-disable-next-line react/prop-types
const Card = ({userName,image,job}) => {

    
   
    return(
        <li>
            
            <img src={image + ".jpg"} alt={image} />
            <h2>{userName}</h2>
            <span>{job}</span>
        </li>
    )
}
export default Cards
