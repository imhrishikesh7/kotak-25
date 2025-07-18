import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './HauslaArrowButtons'
import { DotButton, useDotButton } from './HauslaDotButtons'

const HauslaCarousel = () => {
  const stories = [
    {
      id: 1,
      image: "/Community/IMG-121.webp",
      text: "The support I received, particularly for strawberry tissue culture and goats, has transformed my life...",
      author: "- Pushpa Devi, Sarthu Devi",
      details: "Gandhariya hamlet, Dedi block, Jharkhand"
    },
    {
      id: 2,
      image: "",
      text: "Due to water availability, this is the first time wheat is growing in our fields...",
      author: "- Sarla Devi, Samithal hamlet, Gujarat",
      details: "Income crossed ₹1 lakh per annum by cultivating 2.5 acres"
    },
    {
      id: 3,
      image: "",
      text: "On the interview day, I was nervous; but I spoke passionately about my skills...",
      author: "- Sohan (with autism spectrum disorder)",
      details: "Now working as Multi-Purpose Facilitator at JP Morgan"
    },
    // Add remaining stories similarly...
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className="p-5 bg-white rounded-3xl shadow-2xl max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
        Hausla hai toh <span className="text-red-500 italic">ho jayega</span>.
      </h1>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {stories.map((story) => (
            <div className="embla__slide p-4" key={story.id}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl max-w-2xl mx-auto">
                {story.image && (
                  <img
                    src={story.image}
                    alt="Story"
                    className="w-full object-cover rounded-xl mb-6"
                  />
                )}
                <div className="text-4xl text-red-500 mb-4">"</div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">{story.text}</p>
                <p className="font-semibold text-gray-800 mb-2">{story.author}</p>
                <p className="text-sm text-gray-600 italic">{story.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls mt-8 flex flex-col items-center space-y-4">
        <div className="embla__buttons flex space-x-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots flex justify-center space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HauslaCarousel
