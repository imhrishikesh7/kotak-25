import Reveal from '../Reveal';
export default function BOD() {
  return (
    <div className=" bg-white py-12 md:px-4">
      <div className="marginal mx-auto">

          <div className="md:w-fit mx-auto mb-6 md:text-center">
                <div className='space-y-2'>
                    {/* Technology Badge */}
                    <Reveal animation="slide-up mx-aut text-cente">
                        <div className="inline-flex mx-aut flex-col md:items-start">
                            <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                Board of Directors
                            </span>
                            {/* Centered decorative line for mobile */}
                            <div className='flex w-12 md:mx-auto md:w-16'>
                                <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                                <div className='h-[2px] bg-[#013367] w-1/2' />
                            </div>
                        </div>
                    </Reveal>

                    {/* Main Title - Much smaller for mobile */}
                    <Reveal animation="slide-up">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-ligh leading-snug text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text md:px-0">
                            Guardians of your trust
                        </h1>
                    </Reveal>
                </div>
            </div>
        <div className="relative group">
          <div
            className="h-full w-[100%] rounded-4xl flex items-center justify-center"
          >
            <img src="./home/IMG-06.webp" className='h-full rounded-3xl' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
