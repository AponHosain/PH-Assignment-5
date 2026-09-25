import { useState } from 'react'
import { toast } from 'react-toastify'
import type { Icard } from '../../types/CardTypes'

interface SkillCardProps {
  cards: Icard[]
}

const SkillCard = ({ cards }: SkillCardProps) => {
  const [stack, setStack] = useState<Icard[]>([])


  const handleAddToStack = (card: Icard) => {
  
    const alreadyExists = stack.some(
      (item) => item.name === card.name
    )

    if (alreadyExists) {
      toast.success(`${card.name} is already in your stack!`)
      return
    }

  
    setStack((prev) => [...prev, card])

    toast.success(`${card.name} selected successfully!`)
  }

  const handleRemove = (cardName: string) => {
    setStack((prev) =>
      prev.filter((item) => item.name !== cardName)
    )

    toast.error(`${cardName} removed from stack!`)
  }

  const handleRemoveAll = () => {
    setStack([])

    toast.error('All items removed from stack!')
  }

  return (
    <div className="container mx-auto grid grid-cols-4 gap-6">

     
      <div className="col-span-3 grid grid-cols-3 gap-6">

        {cards.map((card) => {

          // Check if current card is selected
          const isSelected = stack.some(
            (item) => item.name === card.name
          )

          return (
            <div
              key={card.name}
              className={`rounded-xl border bg-white p-6 shadow-sm transition ${
                isSelected
                  ? 'border-green-500 ring-2 ring-green-100'
                  : 'border-gray-200'
              }`}
            >

            
              <div className="flex items-center justify-between">

                <img
                  src={card.img}
                  alt={card.name}
                  className="h-[40px] w-[40px] rounded-lg object-cover"
                />

                <button className="rounded-2xl bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600 transition hover:bg-sky-200">
                  {card.badge}
                </button>

              </div>

              
              <h2 className="mt-6 text-xl font-bold">
                {card.name}
              </h2>

        
              <p className="mt-3 text-sm text-gray-600">
                {card.description}
              </p>

          
              <div className="mt-5 flex items-center justify-between text-sm">

                <span className="rounded bg-gray-100 px-2 py-1">
                  {card.category}
                </span>

                <span>{card.level}</span>

                <span>⭐ {card.rating}</span>

              </div>

              
              <button
                onClick={() => {
                  if (isSelected) {
                   
                  } else {
                    handleAddToStack(card)
                  }
                }}
                className={`mt-5 w-full rounded-lg py-2.5 text-sm font-medium  ${
                  isSelected
                    ? 'bg-pink-100 hover:bg-pink-200 text-pink-500'
                    : 'bg-[#080d1a] hover:bg-gray-800 text-white transition'
                }`}
              >
                {isSelected
                  ? ' ✅ Added to stack'
                  : 'Add to Stack'}
              </button>

            </div>
          )
        })}

      </div>

      <div className="  col-span-1 border-l pl-4">

        <h2 className="mb-3 text-lg font-bold">
          Your Stack
        </h2>


        {stack.length === 0 ? (

          <p className="text-sm text-gray-500">
            Selected items will appear here.
          </p>

        ) : (

          <>
         
            <div className="space-y-3">

              {stack.map((item) => (

                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3"
                >

                  <div className="flex items-center gap-3">

                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-10 w-10 rounded-md object-cover"
                    />

                    <div>
                      <h3 className="text-sm font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {item.category}
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={() => handleRemove(item.name)}
                    
                  >
                   ❌
                  </button>

                </div>

              ))}

            </div>

        
            <p className="mt-4 text-sm font-medium text-gray-600">
              {stack.length} Technology Selected.
            </p>

    
            <button
              onClick={handleRemoveAll}
              className="mt-4 w-full rounded-lg border border-red-200 bg-red-50 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100"
            >
              Remove All
            </button>

          </>

        )}

      </div>

    </div>
  )
}

export default SkillCard
