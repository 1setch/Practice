
import './review.css'


const Review = ({text,orderRate,userName,avatarUrl}) =>{
    //console.log(user);

    return(
        <div className='reviewbody'>
            <img className='review_avatar' src={avatarUrl}  />
            
           <div className='review_desc'>
            <div className='review_user_name'>{userName}</div>
            <div className='review_text'>{text}</div>
            <div className='review_rate'>Оценка: {orderRate}</div>
           </div>
        </div>
    )
}
export default Review;




