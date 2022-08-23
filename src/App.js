import { useEffect, useState } from 'react'
import data from './data'

function App() {
  const [index, setIndex] = useState(0)
  const [people, setPeople] = useState(data)

  useEffect(() => {
    if (index < 0) {
      const lastIndex = people.length - 1
      setIndex(lastIndex)
    }
    if (index > people.length - 1) {
      setIndex(0)
    }
  }, [index, people])
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article key={person.id} className={position}>
              <img src={person.image} alt='' />
              <h2>{person.name}</h2>
              <h3 className='title'>{person.title}</h3>
              <p className='text'>{person.quote}</p>
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          LC
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          RC
        </button>
      </div>
    </section>
  )
}

export default App
