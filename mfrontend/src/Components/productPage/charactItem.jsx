
import './charactItem.css'


const CharactItem = ({grif,strings,frets,country}) =>{
    let isGrif=true;
    let isStrings=true;
    let isFrets=true;
    let isCountry=true;
    if(grif===undefined)isGrif=false;
    if(strings===undefined)isStrings=false;
    if(frets===undefined)isFrets=false;
    if(country===undefined)isCountry=false;
    
    

    return(
    <div className='box'>
        {(isGrif?(
          <div className='elems'>
            <div className='grids'>
              <div className='g_key'>Гриф</div>
              <div className='value'>{grif}</div>
            </div>
            <hr />
          </div>):(<></>))}

          {(isCountry?(
          <div className='elems'>
          <div className='grids'>
            <div className='g_key'>Страна производитель</div>
            <div className='value'>{country}</div>
          </div>
          <hr />
        </div>):(<></>))}

          {(isFrets?(
          <div className='elems'>
          <div className='grids'>
            <div className='g_key'>Кол-во ладов</div>
            <div className='value'>{frets}</div>
          </div>
          <hr />
        </div>):(<></>))}

          {(isStrings?(
          <div className='elems'>
          <div className='grids'>
            <div className='g_key'>Кол-во струн</div>
            <div className='value'>{strings}</div>
          </div>
          <hr />
        </div>):(<></>))}
        

          

          

          
          
        </div>
    )
}
export default CharactItem;




