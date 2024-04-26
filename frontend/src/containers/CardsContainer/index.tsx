import Cards from './Cards'
import Data from './data'
export default function CardsContainer() {
  return (
    <div>
      <div className='flex flex-row gap-2'>
        {
          Data.map((value, index)=>(
            <div className='h-[132px] w-[347px] flex-shrink-0 border-[0.5px] border-bordergrey ml-2 rounded-lg hover:border-gbpurple p-[10px]' key={index}>
              <Cards profileImage={Data[index].img} title={Data[index].title} mentor={Data[index].author} timing={Data[index].timing}/>
            </div>
          ))
        }
        </div>
    </div>
  )
}
